from django.contrib.auth.models import Group
from docs.models import templates
from rest_framework import viewsets
from docs.serializers import TemplatesSerializer
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response

class TemplatesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = templates.objects.all()
    serializer_class = TemplatesSerializer
    authentication_class = (JSONWebTokenAuthentication,)

class FormHtmlViewSet(viewsets.ViewSet):
    
    queryset = templates.objects.all()

    def retrieve(self,request, pk):
        
        return Response({"data":f"test{pk}"})