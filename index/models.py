# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from tinymce.models import HTMLField

# Create your models here.
class SuccessCase(models.Model):
    '''成功案例'''
    title = models.CharField(u'标题', max_length=32)
    status = models.CharField(u'状态', max_length=32)
    browse = models.IntegerField(u'浏览') 
    pub_date = models.DateTimeField(u'发表时间', auto_now_add=True)
    cover = models.ImageField(u'封面', upload_to='static/imgs/img/', null=True)
    # content = models.TextField(u'内容')
    content = HTMLField(verbose_name=u'内容')
    class Meta:
        verbose_name_plural = u'成功案例'

class NewsReading(models.Model):
    '''新闻阅读'''
    title = models.CharField(u'标题', max_length=32)
    writer = models.CharField(u'作者', max_length=32)
    browse = models.IntegerField(u'浏览')
    # content = models.TextField(u'内容')
    content = HTMLField(verbose_name=u'内容')
    pub_date = models.DateTimeField(u'发布时间', auto_now_add=True, null=True)

    class Meta:
        verbose_name_plural = u'新闻阅读'

class Activity(models.Model):
    '''活动'''
    title = models.CharField(u'标题', max_length=32)
    activitytype = models.CharField(u'活动类型', max_length=32)
    region = models.CharField(u'地区', max_length=32)
    cover = models.ImageField(u'封面', upload_to='static/imgs/img/', null=True)
    pub_date = models.DateTimeField(u'发表时间')
    endtime = models.DateTimeField(u'结束时间')
    mancount = models.IntegerField(u'男报名人数')
    womancount = models.IntegerField(u'女报名人数')
    status = models.BooleanField(u'是否结束')
    introduce = models.TextField(u'活动介绍', null=True)
    content = HTMLField(verbose_name=u'活动详情') 

    class Meta:
        verbose_name_plural = u'活动'

class CompanyInfo(models.Model):
    '''公司详情'''
    name = models.CharField(u'公司名称', max_length=32)
    phone = models.CharField(u'公司电话', max_length=11)
    site = models.CharField(u'公司地址', max_length=32)
    email = models.EmailField(u'公司邮箱')
    # introduce = models.TextField(u'公司介绍')
    content = HTMLField(verbose_name=u'公司介绍', default='')
    contactus = HTMLField(verbose_name=u'联系我们', default='')
    recruit = HTMLField(verbose_name=u'高薪招聘', default='')
    disclaimer = HTMLField(verbose_name=u'免责申明', default='')
    promise = HTMLField(verbose_name=u'郑重承诺', default='')
    notes = HTMLField(verbose_name=u'交友须知', default='')
    privacyprotect = HTMLField(verbose_name=u'保护隐私', default='')

    class Meta:
        verbose_name_plural = u'公司信息'
