from django.contrib.auth.models import Group
from personal.models import User
from rest_framework import viewsets
from personal.serializers import UserSerializer, GroupSerializer
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    authentication_class = (JSONWebTokenAuthentication,)
    
class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
