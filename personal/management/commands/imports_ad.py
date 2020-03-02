from django.core.management.base import BaseCommand, CommandError
from tools.ad_tools import ADtools, ALL_ATTRIBUTES, ALL_OPERATIONAL_ATTRIBUTES, SUBTREE
from personal.models import User, position
from pprint import pprint

class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('--user', type=str)
        parser.add_argument('--password', type=str)
        parser.add_argument('--dc', type=str)
        parser.add_argument('--ou', type=str)

    def handle(self, *args, **options):
        user = options['user']
        password = options['password']
        dc = options['dc']
        ou = options['ou']

        AD_BASE_SEARCH_GROUPS = 'OU={0},DC=corp,DC=tnk-bp,DC=ru'.format(ou)
        AD_SEARCH_FILTER_GROUPS = '(&(objectCategory=Person)(sAMAccountName=*))'

        ad_connector = ADtools(
            search_base=AD_BASE_SEARCH_GROUPS,
            search_filter=AD_SEARCH_FILTER_GROUPS,
            attributes=[ALL_ATTRIBUTES, ALL_OPERATIONAL_ATTRIBUTES],
            win_bind_name=user,
            win_bind_passwd=password,
            server_win_uri=dc
        )
        for person in ad_connector.get_person_ou():
            try:
                obj_user = User.objects.get(sid=person.objectsid)

            except Exception as e:
                try:
                    position_obj = position.objects.get(title=person.get("office",None))
                except Exception as e:
                    if person.get("office",None):
                        position_obj = position.objects.create(
                            title=person.get("office",None),
                        )
                    else:
                        position_obj = None


                try:
                    obj_user = User.objects.create(
                        sid=person.get("objectsid"),
                        phone = person.get("phone_work"),
                        position = position_obj,
                        location = "{0} {1} {2}".format(person.get("location"),person.get("streetAddress"), person.get("physicalDeliveryOfficeName")),
                        company = person.get("job"),
                        username = person.get("sAMAccountName"),
                        department = person.get("department"),
                        first_name = person.get("description").split(' ')[1],
                        last_name = person.get("description").split(' ')[0],
                        othername = person.get("description").split(' ')[2],
                        email = person.get("email")
                    )
                except IndexError as e:
                    continue

            self.stdout.write(self.style.SUCCESS('{0}'.format(person.get("sAMAccountName"))))




        self.stdout.write(self.style.SUCCESS('{0}/{1}/{2}'.format(user,password,dc) ))
        #self.stdout.write(self.style.SUCCESS('Successfully closed poll "%s"' % poll_id))