from django.shortcuts import render
from django.http import JsonResponse
from django.core.paginator import Paginator
from .models import Items


def items_list(request, column=None, condition=None, value=None, page=1):
    if not column:
        items_list = [x for x in Items.objects.all().values()]
    else:
        items_list = Items.objects.filter()

    paginator = Paginator(items_list, 10)

    # items_paginator = paginator.page(page)

    context = {
        "items": list(items_list)
    }
    return JsonResponse(context)
