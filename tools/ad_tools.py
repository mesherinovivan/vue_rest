#coding: utf-8

import ldap3

from django.core.mail import mail_admins
import socket
from ldap3.utils.conv import escape_filter_chars
from ldap3 import SUBTREE, ALL_ATTRIBUTES, ALL_OPERATIONAL_ATTRIBUTES

class ADtools(object):

    def __init__(self, *args, **kwargs):
        self.search_base = kwargs.get('search_base',None)
        self.search_filter = kwargs.get('search_filter',None)
        self.attributes = kwargs.get('attributes',None)
        self.win_bind_name = kwargs.get('win_bind_name',None)
        self.win_bind_passwd = kwargs.get('win_bind_passwd',None)
        self.server_win_uri = kwargs.get('server_win_uri',None)
        self.groups_list = []
        self.connection = self.get_connect()

    def get_attr_or_none(self,obj,name):
        try:
            return getattr(obj, name, None).value
        except:
            return ''

    def get_person_ou(self):
        persons = []
        with self.connection as conn:
            conn.search(self.search_base, self.search_filter, search_scope=SUBTREE, attributes=self.attributes)
            for person in conn.entries:
                if (len(conn.entries) == 0):
                    return None
                persons.append(
                    {
                            'description':self.get_attr_or_none(person,'description'),
                            'phone_work':self.get_attr_or_none(person,'telephoneNumber'),
                            'office':self.get_attr_or_none(person,'title'),
                            'status':self.get_attr_or_none(person,'userAccountControl'),
                            'department':self.get_attr_or_none(person,'department'),
                            'job':self.get_attr_or_none(person,'company'),
                            'email':self.get_attr_or_none(person,'mail'),
                            'streetAddress':self.get_attr_or_none(person,'streetAddress'),
                            'location':self.get_attr_or_none(person,'l'),
                            'cabinet':self.get_attr_or_none(person,'physicalDeliveryOfficeName'),
                            'objectsid':self.get_attr_or_none(person,'objectsid'),
                            'sAMAccountName':self.get_attr_or_none(person,'sAMAccountName'),
                    }
                )
        return persons

    def get_account_attr(self):
        with self.connection as conn:
            conn.search(self.search_base, self.search_filter, search_scope=SUBTREE, attributes=self.attributes)
            if (len(conn.entries) == 0):
                return None
            return {
                    'description':self.get_attr_or_none(conn.entries[0],'description'),
                    'phone_work':self.get_attr_or_none(conn.entries[0],'telephoneNumber'),
                    'office':self.get_attr_or_none(conn.entries[0],'title'),
                    'status':self.get_attr_or_none(conn.entries[0],'userAccountControl'),
                    'department':self.get_attr_or_none(conn.entries[0],'department'),
                    'job':self.get_attr_or_none(conn.entries[0],'company'),
                    'email':self.get_attr_or_none(conn.entries[0],'mail'),
            }


    def get_connect(self):
        server = ldap3.Server('ldap://{}'.format(self.server_win_uri))
        return ldap3.Connection(server, user=self.win_bind_name, password=self.win_bind_passwd)
        
    def search_members(self, members, conn, search_base, attributes):
        result = []
        try:
            for item in members:
                search_filter_sub = "(&(|(objectClass=group)(objectClass=organizationalUnit))(name={0}))".format(escape_filter_chars(item))
                conn.search(self.search_base, search_filter_sub, search_scope=SUBTREE, attributes=self.attributes)
                if (len(conn.entries) == 0):
                    continue

                for item in conn.entries[0].memberOf:
                    group_name = item.split(',')[0].split('=')[1]
                    if group_name in self.groups_list:
                        continue
                    else:
                        self.groups_list.append(group_name)
                        result.append(group_name)
        except Exception as e:
            pass

        if result == []:
            return

        return self.search_members(result, conn, search_base,  attributes)

    def get_user_groups(self, recursive=False):
        result = []
        try:
            with self.connection as conn:
                conn.search(self.search_base, self.search_filter, search_scope=SUBTREE, attributes=self.attributes)
                if (len(conn.entries) == 0):
                    return None, None
                for item in conn.entries[0].memberOf:
                    group_name = item.split(',')[0].split('=')[1]
                    result.append(group_name)
                userAccountControl = conn.entries[0].userAccountControl.value # статусу УЗ пользователя
                
                if recursive:
                    self.search_members(result,conn, self.search_base, self.attributes)
                result.extend(self.groups_list)

        except Exception as e:
            message = 'Ошибка доступа к домен контроллеру {server_win_uri}'.format(server_win_uri = self.server_win_uri)
            subject = "[Django][{queue_name}@{host}] Error: Ошибка доступа к домен контроллеру".format(
                queue_name='ldap3',
                host=socket.gethostname(),
                server_win_uri = self.server_win_uri
            )
            mail_admins(subject, message)
            raise
        return list(set(result)), userAccountControl