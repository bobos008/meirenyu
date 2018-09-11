# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class LoginInfo(models.Model):
    '''用户个人信息'''
    username = models.CharField(u'用户名', max_length=32)
    password = models.CharField(u'密码', max_length=64)
    email = models.CharField(u'email', max_length=64)
    pub_date = models.DateTimeField(u'发表时间', auto_now_add=True)
    def __unicode__(self):
        return self.username
    class Meta:
        verbose_name_plural = u'用户信息'
