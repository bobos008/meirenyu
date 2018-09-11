# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def error404(request):
    return render(request, 'tips/index.html')

