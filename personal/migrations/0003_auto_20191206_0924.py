# Generated by Django 2.2.7 on 2019-12-06 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personal', '0002_auto_20191108_0951'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='company',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='position',
            name='code',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='Search code'),
        ),
    ]
