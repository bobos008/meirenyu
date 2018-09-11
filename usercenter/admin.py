# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import UserInfo, StudyWordLive, ContactInfo

# Register your models here.
@admin.register(UserInfo)
class UserInfoAdmin(admin.ModelAdmin):
    list_display = ['marray_state', 'height']

@admin.register(StudyWordLive)
class StudyWordLiveAdmin(admin.ModelAdmin):
    list_display = ['company_name']

@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    pass
