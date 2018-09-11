# coding=utf-8

from django.conf.urls import url 
from . import views

urlpatterns = [
    url(r'^usercenter/', views.usercenter),
    url(r'^homepage/(\w*)/', views.homepage),
]