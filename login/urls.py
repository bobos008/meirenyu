# coding=utf-8

from django.conf.urls import url 
from . import views

urlpatterns = [
    url(r'^register/', views.register),
    url(r'^checkUserName/', views.checkUserName),
    url(r'^checkEmail/', views.checkEmail),
    url(r'^login/', views.login),
    url(r'^checkLogin/', views.checkLogin),
    url(r'^verify/', views.verifyCode),
    url(r'^checkCode/', views.checkCode),
    url(r'^loginout/', views.loginout),
]
