# coding=utf-8
from __future__ import unicode_literals

from django.shortcuts import render
from login.models import LoginInfo
from usercenter.models import UserInfo

# Create your views here.
def usercenter(request):
    '''个人中心'''
    username = request.COOKIES.get('username', '')
    logininfo = LoginInfo.objects.get(username=username)
    login_id = logininfo.id
    userinfo = UserInfo.objects.get(login_id_id=login_id)
    data = {
        'username': username,
        'userinfo': userinfo
    }
    return render(request, 'usercenter/user.html', data)

def homepage(request, username):
    '''个人主页'''
    username = request.COOKIES.get('username', '')
    logininfo = LoginInfo.objects.get(username=username)
    login_id= logininfo.id
    userinfo = UserInfo.objects.get(login_id_id=login_id)
    data = {
        'username': username,
        'userinfo': userinfo
    }
    return render(request, 'index/user_detail.html', data)
