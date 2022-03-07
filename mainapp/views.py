from math import ceil
from django.http import JsonResponse
from .models import Items


def items_list(request, column=None, condition=None, value=None):

    items_list = [x for x in Items.objects.all().values()]
    if condition == 1:
        items_list = list(filter(lambda x: x[column] >= int(value), items_list))
    elif condition == 2:
        items_list = list(filter(lambda x: x[column] <= int(value), items_list))
    elif condition == 3:
        items_list = list(filter(lambda x: str(x[column]) == value, items_list))
    elif condition == 4:
        items_list = list(filter(lambda x: x[column].find(value) != -1, items_list))

    pages = ceil(len(items_list) / 10)
    context = {
        "items": list(items_list), "pages": pages
    }
    return JsonResponse(context)
