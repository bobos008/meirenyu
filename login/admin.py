# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import LoginInfo 

# Register your models here.
@admin.register(LoginInfo)
class UserInfoAdmin(admin.ModelAdmin):
    search_fields = ['username', 'email']
    list_display = ('id', 'username', 'email', 'pub_date')

# admin.site.register(UserInfo, UserInfoAdmin)