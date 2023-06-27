# Generated by Django 4.2.2 on 2023-06-18 20:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id_categoria', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre_categoria', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('sku', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('stock', models.IntegerField()),
                ('precio', models.IntegerField()),
                ('descripcion', models.CharField(max_length=200)),
                ('imagen_url', models.ImageField(upload_to='imagenesProducto')),
                ('id_categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='petshop.categoria')),
            ],
        ),
    ]
