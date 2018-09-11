# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import SuccessCase, NewsReading, Activity, CompanyInfo 

# Register your models here.
@admin.register(SuccessCase)
class SuccessCaseAdmin(admin.ModelAdmin):
    search_fields = ['title', 'content']
    list_display = ['title', 'status', 'browse', 'pub_date']

@admin.register(NewsReading)
class NewsReadingAdmin(admin.ModelAdmin):
    search_fields = ['title', 'writer', 'content']
    list_display = ['title', 'writer', 'browse', 'pub_date']

@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    search_fields = ['title', 'region', 'content', 'activitytype']
    list_display = ['title', 'activitytype', 'region', 'mancount', 'womancount', 'status', 'pub_date']

@admin.register(CompanyInfo)
class CompanyInfoAdmin(admin.ModelAdmin):
    search_fields = ['name', 'phone', 'site', 'email']
    list_display = ['name', 'phone', 'site', 'email']
