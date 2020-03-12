from django.contrib.auth.models import Group
from docs.models import templates
from rest_framework import viewsets
from docs.serializers import TemplatesSerializer
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
import pypandoc
import os
from django.shortcuts import get_object_or_404
from django.conf import settings
from io import BytesIO
from docxtpl import DocxTemplate
from django.http import FileResponse
from rest_framework.parsers import JSONParser

class TemplatesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = templates.objects.all()
    serializer_class = TemplatesSerializer
    authentication_class = (JSONWebTokenAuthentication,)

class FormHtmlViewSet(viewsets.ViewSet):
    authentication_class = (JSONWebTokenAuthentication,)
    queryset = templates.objects.all()
    parser_classes = [JSONParser]

    def retrieve(self,request, pk):
        obj = get_object_or_404(templates,pk=pk)
        filename = settings.MEDIA_ROOT + '/'+ str(obj.full_path)
        output = pypandoc.convert_file(filename, "html")

        return Response({"html":output})

    def post(self, request,pk):
        obj = get_object_or_404(templates,pk=pk)
        filename = settings.MEDIA_ROOT + '/'+ str(obj.full_path)
        save_filename = settings.MEDIA_ROOT +'/save_docs.docx'
        # открываем шаблон
        doc = DocxTemplate(filename)
        # передаем параметры запроса как значени плейсхолеров для шаблона
        doc.render(request.data)

        # сохраняем результат заполнения docx в память
        doc.get_docx().save(save_filename)


        return Response({"link":'http://localhost:8000/'+settings.MEDIA_URL +'save_docs.docx'})