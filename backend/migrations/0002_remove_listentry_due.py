# Generated by Django 3.2.20 on 2023-08-04 13:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listentry',
            name='due',
        ),
    ]