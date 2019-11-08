#coding: utf-8
from django.contrib.auth.models import AbstractUser
from django.db import models


class base_models(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class position(base_models):
    title = models.CharField(max_length=150, verbose_name="Наименование")
    code = models.CharField(max_length=150, verbose_name="Search code")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Должность"
        verbose_name_plural = "Должности"
        ordering = ['title']


class User(AbstractUser,base_models):
    sid = models.CharField(max_length=150, null=True, blank=True, verbose_name="sid")
    birthday = models.DateField(null=True, blank=True, verbose_name="День рождения")
    phone = models.CharField(max_length=150, null=True, blank=True, verbose_name="Телефон")
    position = models.ForeignKey(position, on_delete=models.CASCADE, null=True, blank=True, verbose_name="Должность") 
    location = models.CharField(max_length=30, null=True, blank=True)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "Сотрудник"
        verbose_name_plural = "Сотрудники"
        ordering = ['username']