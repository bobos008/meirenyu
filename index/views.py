# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse
from models import SuccessCase, NewsReading, Activity, CompanyInfo
from login.models import LoginInfo
from usercenter.models import UserInfo

# Create your views here.
def index(request):
    username = request.COOKIES.get('username', '')
    userinfos = UserInfo.objects.all()
    data = {
        'userinfos': userinfos,
        'username': username
    }
    return render(request, 'index/index.html', data)
    # return HttpResponse('index')

def member(request):
    '''会员'''
    username = request.COOKIES.get('username', '')
    userinfos = UserInfo.objects.all()
    data = {
        'username': username,
        'userinfos': userinfos 
    }
    return render(request, 'index/member.html', data)

def memberdetail(request, id):
    '''会员详情'''
    username = request.COOKIES.get('username', '')
    userinfo = UserInfo.objects.get(pk=id)
    print(userinfo)
    data = {
        'username': username,
        'userinfo': userinfo
    }
    return render(request, 'index/user_detail.html', data)

def newsRead(request):
    '''新闻阅读'''
    username = request.COOKIES.get('username', '')
    newses = NewsReading.objects.all()
    data = {
        'username': username,
        'newses': newses
    }
    return render(request, 'index/news_reading.html', data)
    # return HttpResponse('newsread')

def newsDetail(request, id):
    '''新闻详情'''
    username = request.COOKIES.get('username', '')
    newsinfo = NewsReading.objects.get(pk=id)
    data = {
        'username': username,
        'newsinfo': newsinfo
    }
    return render(request, 'index/news_detail.html', data)

def successCase(request):
    '''成功案例'''
    username = request.COOKIES.get('username', '')
    successcase = SuccessCase.objects.all()
    data = {
        'username': username,
        'successcase': successcase
    }
    return render(request, 'index/success_case.html', data)

def successCaseDetail(request, id):
    '''成功案例详情'''
    username = request.COOKIES.get('username', '')
    successcaseinfo = SuccessCase.objects.get(pk=id)
    data = {
        'username': username,
        'successcaseinfo': successcaseinfo
    }
    return render(request, 'index/successcase_detail.html', data)

def activity(request):
    '''活动'''
    username = request.COOKIES.get('username', '')
    activityinfos = Activity.objects.all()
    companyinfos = CompanyInfo.objects.all()
    data = {
        'username': username,
        'activityinfos': activityinfos,
        'companyinfos': companyinfos
    }
    return render(request, 'index/activity.html', data)

def activitydetail(request, id):
    '''获取获取详情'''
    username = request.COOKIES.get('username', '')
    activity_info = Activity.objects.get(pk=id)
    data = {
        'username': username,
        'activityinfo': activity_info
    }
    return render(request, 'index/activity_detail.html', data)

def aboutus(request):
    '''关于我们'''
    username = request.COOKIES.get('username', '')
    companyinfo = CompanyInfo.objects.first()
    data = {
        'username': username,
        'companyinfo': companyinfo
    }
    return render(request, 'index/aboutus.html', data)

def contactus(request):
    '''联系我们'''
    username = request.COOKIES.get('username', '')
    companyinfo = CompanyInfo.objects.first()
    data = {
        'username': username,
        'companyinfo': companyinfo
    }
    return render(request, 'index/contactus.html', data)


def recruit(request):
    '''招聘'''
    username = request.COOKIES.get('username', '')
    companyinfo = CompanyInfo.objects.first()
    data = {
        'username': username,
        'companyinfo': companyinfo
    }
    return render(request, 'index/recruit.html', data)

def disclaimer(request):
    '''免责申明'''
    username = request.COOKIES.get('username', '')
    companyinfo = CompanyInfo.objects.first()
    data = {
        'username': username,
        'companyinfo': companyinfo
    }
    return render(request, 'index/disclaimer.html', data)

def notes(request):
    '''交友须知'''
    username = request.COOKIES.get('username', '')
    companyinfo = CompanyInfo.objects.first()
    data = {
        'username': username,
        'companyinfo': companyinfo
    }
    return render(request, 'index/notes.html', data)

def privacyprotect(request):
    '''保护隐私'''
    username = request.COOKIES.get('username', '')
    companyinfo = CompanyInfo.objects.first()
    data = {
        'username': username,
        'companyinfo': companyinfo
    }
    return render(request, 'index/privacyprotect.html', data)
