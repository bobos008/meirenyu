# coding=utf-8
from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse, HttpResponseRedirect

class Mids(MiddlewareMixin):

    def process_view(self, request, view_func, view_args, view_kwargs):
        '''调用视图前处理'''
        print 'view================='
        now_url = request.path
        username = request.COOKIES.get('username', '')
        not_allow_url = ['/login/login/', '/login/register/']
        if username and (now_url in not_allow_url):
            return HttpResponseRedirect('/user/usercenter/')
        print 'cookies=========='

    def process_exception(self, request, exception):
        '''异常处理'''
        print u'有异常'
        print exception
        print '===================error====================='