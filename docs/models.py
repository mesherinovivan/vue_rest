
#coding: utf-8
from django.db import models


class templates(models.Model):
    title = models.CharField(max_length=150, verbose_name="Наименование")
    full_path = models.FileField( verbose_name="Путь к файлу")
    description = models.CharField(max_length=150, verbose_name="Описание")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Шаблон"
        verbose_name_plural = "Шаблоны"
        ordering = ['title']