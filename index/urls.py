# coding=utf-8

from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^index/', views.index),
    url(r'^member/', views.member),
    url(r'^memberdetail/(\d*)/', views.memberdetail),
    url(r'^newsreading/', views.newsRead),
    url(r'^newsdetail/(\d*)/', views.newsDetail),
    url(r'^successcase/', views.successCase),
    url(r'^successdetail/(\d*)/', views.successCaseDetail),
    url(r'^activity/', views.activity),
    url(r'^activitydetail/(\d*)/', views.activitydetail),
    url('^aboutus/', views.aboutus),
    url('^contactus/', views.contactus),
    url('^recruit/', views.recruit),
    url('^notes/', views.notes),
    url('^disclaimer/', views.disclaimer),
    url('^privacyprotect/', views.privacyprotect),
]
