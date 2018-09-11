# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from login.models import LoginInfo
from multiselectfield import MultiSelectField

# Create your models here.
class UserInfo(models.Model):
    '''用户基本信息'''
    MARRAY_STATE = (
        (0, u'请选择'),
        (1, u'未婚'),
        (2, u'已婚'),
        (3, u'离异'),
        (4, u'丧偶'),
    )
    CONSTELLATION = (
        (0, u'请选择'),
        (1, u'白羊座'),
        (2, u'金牛座'),
        (3, u'双子座'),
        (4, u'巨蟹座'),
        (5, u'狮子座'),
        (6, u'处女座'),
        (7, u'天秤座'),
        (8, u'天蝎座'),
        (9, u'射手座'),
        (10, u'摩羯座'),
        (11, u'水瓶座'),
        (12, u'双鱼座')
    )
    ZODIAC = (
        (0, u'请选择'),
        (1, u'鼠'),
        (2, u'牛'),
        (3, u'虎'),
        (4, u'兔'),
        (5, u'龙'),
        (6, u'蛇'),
        (7, u'马'),
        (8, u'羊'),
        (9, u'猴'),
        (10, u'鸡'),
        (11, u'狗'),
        (12, u'猪')
    )
    HEIGHT = []
    for h in range(160, 201):
        one_height = []
        one_height.append(h)
        one_height.append(str(h) + 'CM')
        HEIGHT.append(one_height)

    BLOOD_TYPE = (
        (0, u'请选择'),
        (1, u'A型'),
        (2, u'B型'),
        (3, u'O型'),
        (4, u'AB型'),
        (5, u'其他'),
    )

    HAVE_KID = (
        (0, u'请选择'),
        (1, u'无小孩'),
        (2, u'有，和我住一起'),
        (3, u'有，有时和我住一起'),
        (4, u'有，不和我住一起'),
    )

    NATIONALITY = (
        (0, u'请选择'),
        (1, u'中国大陆'),
        (2, u'中国台湾'),
        (3, u'中国香港'),
        (4, u'中国澳门'),
        (5, u'印度尼西亚'),
        (6, u'韩国'),
        (7, u'朝鲜'),
        (8, u'日本'),
        (9, u'越南'),
        (10, u'老挝'),
        (11, u'泰国'),
        (12, u'柬埔寨'),
        (13, u'缅甸'),
        (14, u'文莱'),
        (15, u'东帝汶'),
        (16, u'马来西亚'),
    )

    DATING_TYPE = (
        (0, u'请选择'),
        (1, u'朋友'),
        (2, u'知己'),
        (3, u'恋爱'),
        (4, u'结婚'),
    )

    PERSONALITY = (
        (0, u'请选择'),
        (1, u'浪漫迷人'),
        (3, u'承受稳重'),
        (4, u'风趣幽默'),
        (5, u'乐天达观'),
        (6, u'活泼可爱'),
        (7, u'忠厚老实'),
        (8, u'敦厚害羞'),
        (9, u'温柔体贴'),
        (10, u'多愁善感'),
        (11, u'新潮时尚'), 
        (12, u'热辣动感'),
        (13, u'豪放不羁')
    )

    NATIONAL = (
        (0, u'请选择'),
        (1, u'汉族'),
        (2, u'藏族'),
        (3, u'蒙古族'),
        (4, u'壮族'),
        (5, u'回族'),
        (6, u'维吾尔族'),
        (7, u'朝鲜族'),
        (8, u'苗族'),
        (9, u'黎族'),
        (10, u'其他')
    )

    CAREER = (
        (0, u'请选择'),
        (1, u'在校学生'),
        (2, u'计算机/互联网/IT'),
        (3, u'电子/半导体/仪器仪表'),
        (4, u'通信技术'),
        (5, u'销售'),
        (6, u'其他'),
    )

    SALARY = (
        (0, u'请选择'),
        (1, u'2000元一下'),
        (2, u'2000-5000元'),
        (3, u'5000-10000元'),
        (4, u'10000-20000元'),
        (5, u'20000元以上'),
    )

    HOUSE_SITUATION = (
        (0, u'请选择'),
        (1, u'暂未购房'),
        (2, u'需时购房'),
        (3, u'已购房'),
        (4, u'与人合租'),
        (5, u'独自租房'),
        (6, u'与父母同住'),
        (7, u'其他'),
    )

    HAVE_CAR = (
        (True, u'已购车'),
        (False, u'未购车')
    )

    WEIGHT = []
    for w in range(30, 150):
        one_weight = []
        one_weight.append(w)
        one_weight.append(str(w) + 'KG')
        WEIGHT.append(one_weight)

    APPEARANCE = (
        (0, u'请选择'),
        (1, u'文质彬彬'),
        (2, u'小鸟依人'),
        (3, u'阳光帅气'),
        (4, u'雍容华贵'),
        (5, u'其他'),
    )

    GLAMOUR_PLACE = (
        (0, u'请选择'),
        (1, u'眼睛'),
        (2, u'鼻子'),
        (3, u'脸'),
        (4, u'没有')
    )
    HAIRSTYLE = (
        (0, u'请选择'),
        (1, u'垂直长发'),
        (2, u'卷曲长发'),
        (3, u'中等发型'),
        (4, u'短发'),
        (5, u'其他')
    )

    HAIRCOLOR = (
        (0, u'请选择'),
        (1, u'黑色'),
        (2, u'白色'),
        (3, u'金色'),
        (4, u'光头'),
        (5, u'其他')
    )

    FACESTYLE = (
        (0, u'请选择'),
        (1, u'圆脸'),
        (2, u'长脸'),
        (3, u'方脸'),
        (4, u'其他')
    )
    
    BODYSTYLE = (
        (0, u'请选择'),
        (1, u'瘦'),
        (2, u'苗条'),
        (3, u'肥胖'),
        (4, u'其他')
    )

    gender = models.BooleanField(u'性别', default=True)
    birthday = models.CharField(u'生日', max_length=60, default='')
    constellation = models.CharField(u'星座', max_length=12, choices=CONSTELLATION, default='0')
    zodiac = models.CharField(u'生肖', max_length=12, choices=ZODIAC, default='0')
    marray_state = models.CharField(u'婚姻状态', max_length=32, choices=MARRAY_STATE, default='0')
    height = models.CharField(u'身高', max_length=12, choices=HEIGHT, default='160' )
    blood_type = models.CharField(u'血型', max_length=32, choices=BLOOD_TYPE, default='0')
    have_kid = models.CharField(u'是否有小孩', max_length=32, choices=HAVE_KID, default='0')
    nationality = models.CharField(u'国籍', max_length=60, choices=NATIONALITY, default='1')
    household_register = models.CharField(u'户籍', max_length=60, default='')
    live_area = models.CharField(u'居住地区', max_length=60, default='')
    dating_type = models.CharField(u'交友类型', max_length=60, choices=DATING_TYPE, default='0')
    personality = models.CharField(u'个性', max_length=60, choices=PERSONALITY, default='0')
    national = models.CharField(u'名族', max_length=60, choices=NATIONAL, default='1')    
    career = models.CharField(u'职业', max_length=60, choices=CAREER, default='0')
    salary = models.CharField(u'薪资', max_length=120, choices=SALARY, default='0')
    house_situation = models.CharField(u'住房情况', max_length=120, choices=HOUSE_SITUATION, default='0')
    have_car = models.BooleanField(u'购车情况', choices=HAVE_CAR, default=False)
    weight = models.CharField(u'体重', max_length=10, choices=WEIGHT, default='50')
    appearance = models.CharField(u'外貌', max_length=60, choices=APPEARANCE, default='0')
    glamour_place = models.CharField(u'魅力部位', max_length=60, choices=GLAMOUR_PLACE, default='0')
    hairstyle = models.CharField(u'发型', max_length=60, choices=HAIRSTYLE, default='0') 
    haircolor = models.CharField(u'发色', max_length=60, choices=HAIRCOLOR, default='1')
    facestyle = models.CharField(u'脸型', max_length=60, choices=FACESTYLE, default='0')
    bodystyle = models.CharField(u'体型', max_length=60,  choices=BODYSTYLE, default='0')
    img = models.ImageField(u'头像', upload_to='static/imgs/img/', null=True)
    login_id = models.ForeignKey(LoginInfo)
    class Meta:
        verbose_name_plural = u'用户基本信息'

COMPANY_STYLE = (
    (0, u'请选择'),
    (1, u'政府机构'),
    (2, u'世界500强'),
    (3, u'外企'),
    (4, u'国有企业'),
    (5, u'其他')
)

SALARY_DESCRIBE = (
    (0, u'请选择'),
    (1, u'福利优越'),
    (2, u'投资高回报'),
    (3, u'其他'),
)

WORK_SITUATION = (
    (0, u'请选择'),
    (1, u'轻松稳定'),
    (2, u'工作自由'),
    (3, u'其他')
)

EDUCATIONAL_BACKGROUND = (
    (0, u'请选择'),
    (1, u'中专及一下'),
    (2, u'大专'),
    (3, u'本科'),
    (4, u'本科以上'),
)

MAJOR_STYLE = (
    (0, u'请选择'),
    (1, u'计算机类'),
    (2, u'金融类'),
    (3, u'中文类'),
    (4, u'其他')
)

LANGUAGE = (
    (1, u'汉语'),
    (2, u'英语'),
    (3, u'日语'),
    (4, u'法语'),
    (5, u'越南语'),
    (6, u'其他')
)

FAMILY_NUM = (
    (0, u'请选择'),
    (1, u'老大'),
    (2, u'老二'),
    (3, u'老三'),
    (4, u'老四'),
    (5, u'老五以及更小'),
)

CONSUMPTION_LEVEL = (
    (0, u'请选择'),
    (1, u'美食'),
    (2, u'服装'),
    (3, u'旅游'),
    (4, u'其他'),
)

FAITH = (
    (0, u'请选择'),
    (1, u'无宗教信仰'),
    (2, u'佛教'),
    (3, u'基督教'),
    (4, u'伊斯兰教'),
    (5, u'其他'),
)

TAKE_EXERCISE = (
    (0, u'请选择'),
    (1, u'每天锻炼'),
    (2, u'每周几次'),
    (3, u'每月几次'),
    (4, u'从不锻炼'),
)

WORK_REST = (
    (0, u'请选择'),
    (1, u'早睡早起'),
    (2, u'经常夜猫子'),
    (3, u'有时候夜猫子'),
    (4, u'其他'),
)

LIKE_SKILL = (
    (0, u'实现个人目标'),
    (1, u'维护朋友圈关系'),
    (2, u'装修房屋'),
    (3, u'志愿者'),
    (4, u'保持生活规律'),
    (5, u'理财'),
    (6, u'其他')
)

LIKE_SPORT = (
    (0, u'足球'),
    (1, u'篮球'),
    (2, u'排球'),
    (3, u'网球'),
    (4, u'羽毛球'),
    (5, u'其他')
)

LIKE_FOOD = (
    (0, u'中国菜'),
    (1, u'日本菜'),
    (2, u'泰国菜'),
    (3, u'法国菜'),
    (4, u'其他'),
)

LIKE_BOOK = (
    (0, u'校园青春'),
    (1, u'文学'),
    (2, u'历史传记'),
    (3, u'旅游'),
    (4, u'其他')
)

LIKE_MOVIE = (
    (0, u'悬疑推理'),
    (1, u'爱情'),
    (2, u'喜剧'),
    (3, u'动画'),
    (4, u'西部'),
)

AVOCATION = (
    (0, u'音乐'),
    (1, u'体育'),
    (2, u'写作'),
    (3, u'游戏'),
    (4, u'旅游'),
)

LIKE_TRAVEL = (
    (0, u'名山古刹'),
    (1, u'秀美山水'),
    (2, u'小桥流水'),
    (3, u'高原雪域'),
)

LIKE_PROGRAM = (
    (0, u'政治时间'),
    (1, u'娱乐八卦'),
    (2, u'体育赛事'),
    (3, u'海选活动'),
)

class StudyWordLive(models.Model):
    '''学习工作生活'''
    company_style = models.CharField(u'公司类型', max_length=120, choices=COMPANY_STYLE, default='0')
    salary_describe = models.CharField(u'收入描述', max_length=120, choices=SALARY_DESCRIBE, default='0')
    work_situation = models.CharField(u'工作情况', max_length=120, choices=WORK_SITUATION, default='0')
    company_name = models.CharField(u'公司名称', max_length=120, default='')
    educational_background = models.CharField(u'学历', choices=EDUCATIONAL_BACKGROUND, max_length=60, default='0')
    major_style = models.CharField(u'专业类型', choices=MAJOR_STYLE, max_length=120, default='0')
    school = models.CharField(u'学校类型', max_length=120, default='')
    enrolment_time = models.CharField(u'入学年份', max_length=60, default='')
    language = MultiSelectField(u'语言能力', max_length=60, choices=LANGUAGE)
    family_num = models.CharField(u'家中排行', max_length=60, choices=FAMILY_NUM, default='0')
    consumption_level = models.CharField(u'最大消费', max_length=60, choices=CONSUMPTION_LEVEL, default='0')
    is_smoking = models.BooleanField(u'是否吸烟', default=False)
    is_drink = models.BooleanField(u'是否喝酒', default=False)
    faith = models.CharField(u'宗教信仰', max_length=60, choices=FAITH, default='1')
    take_exercise = models.CharField(u'体育锻炼', max_length=60, choices=TAKE_EXERCISE, default='0')
    work_rest = models.CharField(u'作息习惯', max_length=120, default='')
    want_kid = models.BooleanField(u'是否要孩子', default=True)  
    with_parents_live = models.BooleanField(u'是否和父母同住', default=False)
    make_romantic = models.BooleanField(u'是否制造浪漫', default=True)
    live_skill = MultiSelectField(u'生活技能', max_length=120, choices=LIKE_SKILL)
    like_sport = MultiSelectField(u'喜欢运动', max_length=120, choices=LIKE_SPORT)
    like_food = MultiSelectField(u'喜欢食物', max_length=120, choices=LIKE_FOOD)
    like_book = MultiSelectField(u'喜欢书籍', max_length=120, choices=LIKE_BOOK)
    like_movie = MultiSelectField(u'喜欢电影', max_length=120, choices=LIKE_MOVIE)
    avocation = MultiSelectField(u'业余爱好', max_length=120, choices=AVOCATION)
    like_travel = MultiSelectField(u'喜欢旅游', max_length=120, choices=LIKE_TRAVEL)
    like_program = MultiSelectField(u'喜欢节目', max_length=120, choices=LIKE_PROGRAM)
    introduce = models.TextField(u'内心独白', default='')
    login_id = models.ForeignKey(LoginInfo)
    class Meta:
        verbose_name_plural = u'学习工作生活'

class ContactInfo(models.Model):
    '''联系资料'''
    mobil_phone = models.CharField(u'手机号码', max_length=20, default='')
    qq = models.CharField(u'QQ号码', max_length=20, default='')
    phone = models.CharField(u'电话号码', max_length=20, default='')
    wechat = models.CharField(u'微信', max_length=60, default='')
    webo = models.CharField(u'微博', max_length=60, default='')
    site = models.CharField(u'联系地址', max_length=120, default='')
    zip_code = models.CharField(u'邮编', max_length=32, default='')
    login_id = models.ForeignKey(LoginInfo)
    class Meta:
        verbose_name_plural = u'联系资料'
