from django.db import migrations
from datetime import date
from random import randint, random


def forward(apps, schema_editor):

    items_model = apps.get_model('mainapp', 'Items')

    for i in range(1, 100):
        items_model.objects.create(
            pk=i,
            date=date.today(),
            title=f"Название_{i}",
            quantity=randint(1, 100),
            distance=random() * 1000,
        )


def reverse(apps, schema_editor):
    items_model = apps.get_model('mainapp', 'Items')
    items_model.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [("mainapp", "0001_initial")]

    operations = [migrations.RunPython(forward, reverse)]
