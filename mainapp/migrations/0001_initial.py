# Generated by Django 3.2 on 2022-03-03 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(verbose_name='Дата')),
                ('title', models.CharField(max_length=255, unique=True, verbose_name='Название')),
                ('quantity', models.PositiveIntegerField(default=0, verbose_name='Количество')),
                ('distance', models.DecimalField(decimal_places=3, default=0, max_digits=8, verbose_name='Расстояние')),
            ],
        ),
    ]
