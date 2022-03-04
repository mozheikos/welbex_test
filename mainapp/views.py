from math import ceil
from django.shortcuts import render
from django.http import JsonResponse
from django.core.paginator import Paginator
from .models import Items


def items_list(request, column=None, condition=None, value=None):
    if not column:
        items_list = [x for x in Items.objects.all().values()]
    else:
        if column == 1:
            if condition == 3:
                items_list = [x for x in Items.objects.filter(
                    title=value).values()]
            else:
                items_list = [x for x in Items.objects.filter(
                    title__contains=value).values()]

        elif column == 2:
            if condition == 1:
                items_list = [x for x in Items.objects.filter(
                    quantity__gt=value).values()]
            elif condition == 2:
                items_list = [x for x in Items.objects.filter(
                    quantity__lt=value).values()]
            else:
                items_list = [x for x in Items.objects.filter(
                    quantity=value).values()]
        else:
            if condition == 1:
                items_list = [x for x in Items.objects.filter(
                    distance__gte=value).values()]
            elif condition == 2:
                items_list = [x for x in Items.objects.filter(
                    distance__lte=value).values()]
            else:
                items_list = [x for x in Items.objects.filter(
                    distance=value).values()]
    pages = ceil(len(items_list) / 10)
    context = {
        "items": list(items_list), "pages": pages
    }
    return JsonResponse(context)
