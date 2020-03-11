from django.contrib.auth.models import Group
from docs.models import templates
from rest_framework import serializers

class TemplatesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = templates
        fields = ['title','full_path','id']

