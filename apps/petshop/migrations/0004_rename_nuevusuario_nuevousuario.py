# Generated by Django 4.2.2 on 2023-06-23 03:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('petshop', '0003_nuevusuario_delete_nuevousuario'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='nuevUsuario',
            new_name='nuevoUsuario',
        ),
    ]
