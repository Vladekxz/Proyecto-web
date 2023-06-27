# Generated by Django 4.2.2 on 2023-06-26 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petshop', '0008_usuario_delete_customuser'),
    ]

    operations = [
        migrations.DeleteModel(
            name='nuevoUsuario',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='apellido',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='contraseña',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='id',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='nombre',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='usuario',
        ),
        migrations.AddField(
            model_name='usuario',
            name='contraseña_user',
            field=models.CharField(default=1, max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usuario',
            name='id_user',
            field=models.IntegerField(default=1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usuario',
            name='nombre_user',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]
