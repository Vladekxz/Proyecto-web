# Generated by Django 4.2.2 on 2023-06-23 03:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petshop', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='nuevoUsuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('apellido', models.CharField(max_length=100)),
                ('usuario', models.CharField(max_length=150)),
                ('contraseña', models.CharField(max_length=150)),
            ],
        ),
    ]