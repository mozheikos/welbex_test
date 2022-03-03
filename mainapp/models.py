from django.db import models


class Items(models.Model):
    date = models.DateField(verbose_name="Дата", blank=False)
    title = models.CharField(verbose_name="Название",
                             blank=False, max_length=255, unique=True)
    quantity = models.PositiveIntegerField(
        verbose_name="Количество", default=0)
    distance = models.DecimalField(
        verbose_name="Расстояние", default=0, decimal_places=3, max_digits=8)
