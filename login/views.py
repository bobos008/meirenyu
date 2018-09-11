# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse 
from django.http import JsonResponse, HttpResponseRedirect
from models import LoginInfo 
from usercenter.models import UserInfo, ContactInfo
import os
import datetime
import traceback
from PIL import Image, ImageDraw, ImageFont

# Create your views here.
def register(request):
    '''用户注册'''
    now_method = request.method
    if now_method == 'GET':
        return render(request, 'login/register.htm')
    else:
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        email = request.POST.get('email', '')
        gender = request.POST.get('gender', '1')
        ageyear = request.POST.get('ageyear', '1')
        agemonth = request.POST.get('agemonth', '1') 
        ageday = request.POST.get('ageday', '1')
        marraystatus = request.POST.get('marrystatus', '1')
        height = request.POST.get('height', '0') 
        province = request.POST.get('provinceid', '') 
        salary = request.POST.get('salary', '0') 
        weight = request.POST.get('weight', '0') 
        mobile = request.POST.get('mobile', '')

        if gender == '1':
            gender = True
        else:
            gender = False

        if int(agemonth) < 10:
            agemonth = '0' + agemonth
        if int(ageday) < 10:
            ageday = '0' + ageday

        # head_img_path = 'static/imgs/img/'
        # head_thumb_img_path = 'static/imgs/thumb/'
        # img_name = head_img_path + img.name 
        # thumb_name = head_thumb_img_path + img.name

        # 获取当前时间
        now_time = datetime.datetime.now()
        now_time = now_time.strftime("%Y-%m-%d %H:%S:%M")

        '''
        try:
            with open(img_name, 'wb') as pic:
                for c in img.chunks():
                    pic.write(c)
            with open(thumb_name, 'wb') as pic1:
                for p1 in img.chunks():
                    pic1.write(p1)
            # 修改图片尺寸
            img = Image.open(img_name)
            out = img.resize((275, 338), Image.ANTIALIAS)
            point_index = img_name.rfind('.')
            suffix_name = img_name[point_index+1:]
            out.save(img_name, suffix_name)

            # 生成缩略图
            thumb = Image.open(thumb_name)
            out1 = thumb.resize((144, 176), Image.ANTIALIAS)
            point_index1 = thumb_name.rfind('.') 
            suffix_thumb_name = thumb_name[point_index1+1:]
            out1.save(thumb_name, suffix_thumb_name)
        except:
            traceback.print_exc()
            now_dir = os.getcwd()
            os.remove(now_dir + img_name)
            os.remove(now_dir + thumb_name)
        '''

        try:
            login_info = {
                'username': username,
                'password': password,
                'email': email,
                'pub_date': now_time,
            }
            LoginInfo.objects.create(**login_info)

            login_id = LoginInfo.objects.get(username=username, password=password).id
            user_info = {
                'gender': gender,
                'birthday': ageyear + agemonth + ageday,
                'marray_state': marraystatus,
                'height': height,
                'weight': weight,
                'live_area': province,
                'salary': salary,
                'login_id_id': login_id,
            }
            contact_info = {
                'mobil_phone': mobile,
                'login_id_id': login_id
            }
            UserInfo.objects.create(**user_info)
            ContactInfo.objects.create(**contact_info)
        except Exception as err:
            print(err)
            traceback.print_exc()
            return JsonResponse({'res':False})
        return HttpResponseRedirect('/login/login/')

def checkUserName(request):
    '''检测用户名是否合法'''
    username = request.GET.get('username')
    try:
        res = LoginInfo.objects.filter(username=username)
        if res:
            return JsonResponse({'res': True})
        else:
            return JsonResponse({'res': False})
    except Exception as err:
        print(err)
        return JsonResponse({'res': False})

def checkEmail(request):
    '''检测email是否合法'''
    email = request.GET.get('email')
    try:
        res = LoginInfo.objects.filter(email=email)
        if res:
            return JsonResponse({'res': True})
        else:
            return JsonResponse({'res': False})
    except Exception as err:
        print(err)
        return JsonResponse({'res': False})

def checkCode(request):
    '''检测验证码'''
    checkcode = request.GET.get('checkcode').lower()
    verifycode = request.session['verifycode'].lower()
    if verifycode == checkcode:
        return JsonResponse({'res': True})
    else:
        return JsonResponse({'res': False})

def login(request):
    '''加载登录页面模板'''
    
    username = request.COOKIES.get('username', '')
    is_login = {'username': username}
    return render(request, 'login/login.htm', is_login)

def verifyCode(request):
    '''生成验证码'''
    import random
    import string
    # 定义变量，用户画面的背景色，高,宽
    bgcolor = (random.randrange(20, 100), random.randrange(20,100), 255)
    width = 90 
    height = 30 
    # 创建画面对象
    img = Image.new('RGB', (width, height), bgcolor)
    # 创建画笔对象
    draw = ImageDraw.Draw(img)
    # 定义验证码的选值
    str1 = string.ascii_letters + string.digits
    rand_str_list = random.sample(str1, 4)
    rand_str = ''.join(rand_str_list)
    # 构建字体对象
    font = ImageFont.truetype('static/font/font.ttf', 23)
    # 构建字体颜色
    fontcolor = (255, random.randrange(0, 255), random.randrange(0, 255))
    # 绘制4个字
    draw.text((5, 2), rand_str[0], font=font, fill=fontcolor)
    draw.text((25, 2), rand_str[1], font=font, fill=fontcolor)
    draw.text((48, 2), rand_str[2], font=font, fill=fontcolor)
    draw.text((70, 2), rand_str[3], font=font, fill=fontcolor)
    # 释放画笔
    del draw
    # 存入session, 用于做进一步验证
    request.session['verifycode'] = rand_str
    # 内存文件操作
    import cStringIO
    buf = cStringIO.StringIO()
    # 将图片保存在内存中，文件类型位png
    img.save(buf, 'png')
    # 将内存中的图片数据返回给客户端，MIME类型为图片png
    return HttpResponse(buf.getvalue(), 'image/png')

def checkLogin(request):
    '''检测用户和密码'''
    login_name = request.POST.get('loginname')
    password = request.POST.get('password')
    checkcode = request.POST.get('checkcode').lower()
    csrfmiddlewaretoken = request.POST.get('csrfmiddlewaretoken')
    verifycode = request.session['verifycode'].lower()
    
    if verifycode != checkcode:
        return JsonResponse({'verify': True})
    try:
        if login_name.find('@') == -1:
            res_username = LoginInfo.objects.filter(username=login_name, password=password)
            if res_username:
                response = JsonResponse({'res': True})
                response.set_cookie("username", login_name, 3600*24)
                return response 
        else:
            res_email = LoginInfo.objects.get(email=login_name, password=password)
            if res_email:
                username = res_email.username
                response = JsonResponse({'res': True})
                response.set_cookie("username", username, 3600*24)
                return response
    except Exception as err:
        print(err)
        return JsonResponse({'res': False})

def loginout(request):
    '''退出'''
    try:
        # response = JsonResponse({'res': True})
        response = HttpResponseRedirect('/index/index/')
        response.delete_cookie('username')
        return response
    except Exception as err:
        print(err)
        # return JsonResponse({'res': False}) 
        return JsonResponse({'res': False}) 
