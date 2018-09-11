/*=====以下请在Zeai交友系统官方客服指导下进行修改，以免整站与数据库错乱，无法恢复。=====*/
/*=====zeai资料信息=====*/

var selstr  = '不限';
var selstr2 = '不限';
//身高
var heigh_ARR = [{'id':'0','value':selstr}];
for (var i = 144; i <= 260; i++) {var istr = i.toString();heigh_ARR.push({'id':istr,'value':istr+' 厘米'});}
//体重
var weigh_ARR = [{'id':'0','value':selstr}];
for (var i = 35; i <= 130; i++) {var istr = i.toString();weigh_ARR.push({'id':istr,'value':istr+' 公斤'});}
//年龄
var age1_ARR = [{'id':'0','value':selstr}];
for (var i = 20; i <= 77; i++) {var istr = i.toString();age1_ARR.push({'id':istr,'value':istr});}
var age2_ARR = age1_ARR;
//婚姻状况supdes
var love_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'未婚'},
	{'id':'3','value':'离婚'},
	{'id':'4','value':'丧偶'}
];


//认证supdes
var identityproof_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'身份认证'},
	{'id':'2','value':'手机认证'},
	{'id':'3','value':'学历认证'},
	{'id':'4','value':'财产认证'}
];

//性别
var sex_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'男'},
	{'id':'2','value':'女'}
];

//有无小孩
var child_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'无小孩'},
	{'id':'2','value':'有小孩归自己'},
	{'id':'3','value':'有小孩归对方'}
];


var nation_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'汉族'},
	{'id':'2','value':'藏族'},
	{'id':'3','value':'朝鲜族'},
	{'id':'4','value':'蒙古族'},
	{'id':'5','value':'回族'},
	{'id':'6','value':'满族'},
	{'id':'7','value':'维吾尔族'},
	{'id':'8','value':'壮族'},
	{'id':'9','value':'彝族'},
	{'id':'10','value':'苗族'},
	{'id':'11','value':'侗族'},
	{'id':'12','value':'瑶族'},
	{'id':'13','value':'白族'},
	{'id':'14','value':'布依族'},
	{'id':'15','value':'傣族'},
	{'id':'16','value':'京族'},
	{'id':'17','value':'黎族'},
	{'id':'18','value':'羌族'},
	{'id':'19','value':'怒族'},
	{'id':'20','value':'佤族'},
	{'id':'21','value':'水族'},
	{'id':'22','value':'畲族'},
	{'id':'23','value':'土族'},
	{'id':'24','value':'阿昌族'},
	{'id':'25','value':'哈尼族'},
	{'id':'26','value':'高山族'},
	{'id':'27','value':'景颇族'},
	{'id':'28','value':'珞巴族'},
	{'id':'29','value':'锡伯族'},
	{'id':'30','value':'德昂(崩龙)族'},
	{'id':'31','value':'保安族'},
	{'id':'32','value':'基诺族'},
	{'id':'33','value':'门巴族'},
	{'id':'34','value':'毛南族'},
	{'id':'35','value':'赫哲族'},
	{'id':'36','value':'裕固族'},
	{'id':'37','value':'撒拉族'},
	{'id':'38','value':'独龙族'},
	{'id':'39','value':'普米族'},
	{'id':'40','value':'仫佬族'},
	{'id':'41','value':'仡佬族'},
	{'id':'42','value':'东乡族'},
	{'id':'43','value':'拉祜族'},
	{'id':'44','value':'土家族'},
	{'id':'45','value':'纳西族'},
	{'id':'46','value':'傈僳族'},
	{'id':'47','value':'布朗族'},
	{'id':'48','value':'哈萨克族'},
	{'id':'49','value':'达斡尔族'},
	{'id':'50','value':'鄂伦春族'},
	{'id':'51','value':'鄂温克族'},
	{'id':'52','value':'俄罗斯族'},
	{'id':'53','value':'塔塔尔族'},
	{'id':'54','value':'塔吉克族'},
	{'id':'55','value':'柯尔克孜族'},
	{'id':'56','value':'乌兹别克族'}
];


var star_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'水瓶座'},
	{'id':'2','value':'双鱼座'},
	{'id':'3','value':'白羊座'},
	{'id':'4','value':'金牛座'},
	{'id':'5','value':'双子座'},
	{'id':'6','value':'巨蟹座'},
	{'id':'7','value':'狮子座'},
	{'id':'8','value':'处女座'},
	{'id':'9','value':'天秤座'},
	{'id':'10','value':'天蝎座'},
	{'id':'11','value':'射手座'},
	{'id':'12','value':'摩羯座'}
];


var blood_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'A型'},
	{'id':'2','value':'B型'},
	{'id':'3','value':'AB型'},
	{'id':'4','value':'O型'},
	{'id':'5','value':'其他或未知'}
];


var bornanimal_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'鼠'},
	{'id':'2','value':'牛'},
	{'id':'3','value':'虎'},
	{'id':'4','value':'兔'},
	{'id':'5','value':'龙'},
	{'id':'6','value':'蛇'},
	{'id':'7','value':'马'},
	{'id':'8','value':'羊'},
	{'id':'9','value':'猴'},
	{'id':'10','value':'鸡'},
	{'id':'11','value':'狗'},
	{'id':'12','value':'猪'}
];


var edu_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'初中'},
	{'id':'2','value':'高中'},
	{'id':'3','value':'大专'},
	{'id':'4','value':'本科'},
	{'id':'5','value':'硕士'},
	{'id':'6','value':'博士'}
];


var job_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'市场/销售人员'},
	{'id':'2','value':'医生'},
	{'id':'3','value':'律师'},
	{'id':'4','value':'教师'},
	{'id':'5','value':'幼师'},
	{'id':'6','value':'设计师'},
	{'id':'7','value':'程序员'},
	{'id':'8','value':'策划推广'},
	{'id':'9','value':'客服人员'},
	{'id':'10','value':'空姐'},
	{'id':'11','value':'护士'},
	{'id':'12','value':'服务员'},
	{'id':'13','value':'营业员'},
	{'id':'14','value':'导游'},
	{'id':'15','value':'记者/编辑'},
	{'id':'16','value':'摄影师'},
	{'id':'17','value':'文员/秘书'},
	{'id':'18','value':'行政人事'},
	{'id':'19','value':'高层管理人员'},
	{'id':'20','value':'公务员'},
	{'id':'21','value':'机关干部'},
	{'id':'22','value':'军人'},
	{'id':'23','value':'警察'},
	{'id':'24','value':'消防员'},
	{'id':'25','value':'工程师'},
	{'id':'26','value':'职业经理人'},
	{'id':'27','value':'咨询师'},
	{'id':'28','value':'会计师'},
	{'id':'29','value':'审计师'},
	{'id':'30','value':'经纪人'},
	{'id':'31','value':'预算员'},
	{'id':'32','value':'检验员'},
	{'id':'33','value':'理财师'},
	{'id':'34','value':'出纳财务'},
	{'id':'35','value':'技术人员'},
	{'id':'36','value':'办公室职员'},
	{'id':'37','value':'体育工作者'},
	{'id':'38','value':'水电工'},
	{'id':'39','value':'厨师'},
	{'id':'40','value':'司机'},
	{'id':'41','value':'操作工'},
	{'id':'42','value':'机械师'},
	{'id':'43','value':'美容化妆师'},
	{'id':'44','value':'结构师'},
	{'id':'45','value':'药剂师'},
	{'id':'46','value':'建筑工'},
	{'id':'47','value':'建筑包工头'},
	{'id':'48','value':'生产采购人员'},
	{'id':'49','value':'仓管专员'},
	{'id':'50','value':'音乐家'},
	{'id':'51','value':'画家'},
	{'id':'52','value':'艺术家'},
	{'id':'53','value':'模特'},
	{'id':'54','value':'演艺人员'},
	{'id':'55','value':'教练'},
	{'id':'56','value':'讲师'},
	{'id':'57','value':'教授'},
	{'id':'58','value':'翻译'},
	{'id':'59','value':'学生'},
	{'id':'60','value':'私营业主'},
	{'id':'61','value':'自由职业者'},
	{'id':'62','value':'农民'},
	{'id':'90','value':'待业中'},
	{'id':'99','value':'其他'}
];

/*
var pay_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'1000元以下'},
	{'id':'2','value':'1001～2000元'},
	{'id':'3','value':'2001～3000元'},
	{'id':'4','value':'3001～5000元'},
	{'id':'5','value':'5001～8000元'},
	{'id':'6','value':'8001～10000元'},
	{'id':'7','value':'10001～20000元'},
	{'id':'8','value':'20001～50000元'},
	{'id':'9','value':'50000元以上'}
];
*/
var pay_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'1千以下'},
	{'id':'2','value':'1~2千'},
	{'id':'3','value':'2~3千'},
	{'id':'4','value':'3~4千'},
	{'id':'5','value':'5~8千'},
	{'id':'6','value':'8千~1万'},
	{'id':'7','value':'1~2万'},
	{'id':'8','value':'2~5万'},
	{'id':'9','value':'5万以上'}
];

//住房supdes
var house_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'已购房(有贷款)'},
	{'id':'2','value':'已购房(无贷款)'},
	{'id':'3','value':'有能力购房'},
	{'id':'4','value':'无房'},
	{'id':'5','value':'无房需对方解决'},
	{'id':'6','value':'无房需双方解决'},
	{'id':'7','value':'与父母同住'},
	{'id':'8','value':'独自租房'},
	{'id':'9','value':'与人合租'},
	{'id':'10','value':'住亲朋家'},
	{'id':'11','value':'住单位房'}
];


var car_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'已购车'},
	{'id':'2','value':'无车'}
];


var tag1_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'孝顺男'},
	{'id':'2','value':'酷男'},
	{'id':'3','value':'责任心'},
	{'id':'4','value':'经济适用男'},
	{'id':'5','value':'憨直'},
	{'id':'6','value':'感性男'},
	{'id':'7','value':'事业男'},
	{'id':'8','value':'睿智'},
	{'id':'9','value':'猥琐男'},
	{'id':'10','value':'幽默男'},
	{'id':'11','value':'爱旅行'},
	{'id':'12','value':'宅男'},
	{'id':'13','value':'体贴'},
	{'id':'14','value':'有魄力'},
	{'id':'15','value':'仗义'},
	{'id':'16','value':'经理人'},
	{'id':'17','value':'帅哥'},
	{'id':'18','value':'稳重'}
];


var tag2_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'孝顺女'},
	{'id':'2','value':'小资女'},
	{'id':'3','value':'秀外慧中'},
	{'id':'4','value':'理性女'},
	{'id':'5','value':'感性女'},
	{'id':'6','value':'善良'},
	{'id':'7','value':'事业女'},
	{'id':'8','value':'气质女'},
	{'id':'9','value':'美女'},
	{'id':'10','value':'居家女'},
	{'id':'11','value':'爱运动'},
	{'id':'12','value':'美食家'},
	{'id':'13','value':'野蛮女友'},
	{'id':'14','value':'宅女'},
	{'id':'15','value':'直爽'},
	{'id':'16','value':'爱小动物'},
	{'id':'17','value':'小可爱'},
	{'id':'18','value':'性感女'}
];


var bodytype_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'瘦'},
	{'id':'2','value':'略瘦'},
	{'id':'3','value':'匀称'},
	{'id':'4','value':'苗条'},
	{'id':'5','value':'高挑'},
	{'id':'6','value':'丰满'},
	{'id':'7','value':'健壮'},
	{'id':'8','value':'魁梧'},
	{'id':'9','value':'胖'},
	{'id':'10','value':'略胖'}
];


var face_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'圆脸型'},
	{'id':'2','value':'方脸型'},
	{'id':'3','value':'长脸型'},
	{'id':'4','value':'瓜子脸型'},
	{'id':'5','value':'鸭蛋脸型'},
	{'id':'6','value':'国字脸型'},
	{'id':'7','value':'三角脸型'},
	{'id':'8','value':'菱形脸型'},
	{'id':'9','value':'其他'}
];


var hair_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'顺直长发'},
	{'id':'2','value':'卷曲长发'},
	{'id':'3','value':'中等长度'},
	{'id':'4','value':'短发'},
	{'id':'5','value':'很短'},
	{'id':'6','value':'光头'},
	{'id':'7','value':'其他'}
];


var haircolor_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'黑色'},
	{'id':'2','value':'金色'},
	{'id':'3','value':'褐色'},
	{'id':'4','value':'栗色'},
	{'id':'5','value':'灰色'},
	{'id':'6','value':'红色'},
	{'id':'7','value':'白色'},
	{'id':'8','value':'挑染'},
	{'id':'9','value':'光头'},
	{'id':'10','value':'其他'}
];


var clothing_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'休闲'},
	{'id':'2','value':'正统'},
	{'id':'3','value':'前卫'},
	{'id':'4','value':'随便'},
	{'id':'5','value':'其他'}
];


var attractive_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'笑容'},
	{'id':'2','value':'眉毛'},
	{'id':'3','value':'眼睛'},
	{'id':'4','value':'头发'},
	{'id':'5','value':'鼻梁'},
	{'id':'6','value':'嘴唇'},
	{'id':'7','value':'牙齿'},
	{'id':'8','value':'颈部'},
	{'id':'9','value':'耳朵'},
	{'id':'10','value':'手'},
	{'id':'11','value':'胳膊'},
	{'id':'12','value':'胸部'},
	{'id':'13','value':'腰部'},
	{'id':'14','value':'臀部'},
	{'id':'15','value':'腿'},
	{'id':'16','value':'脚'},
	{'id':'17','value':'没有太特别的'}
];


var myoutbbs1_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'文质彬彬'},
	{'id':'2','value':'西部牛仔'},
	{'id':'3','value':'阳光帅气'},
	{'id':'4','value':'风度翩翩'},
	{'id':'5','value':'成熟魅力'},
	{'id':'6','value':'健壮高大'},
	{'id':'7','value':'朴实无华'},
	{'id':'8','value':'内敛酷男'}
];


var myoutbbs2_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'秀外慧中'},
	{'id':'2','value':'眉清目秀'},
	{'id':'3','value':'明眸善睐'},
	{'id':'4','value':'娇小依人'},
	{'id':'5','value':'青春活泼'},
	{'id':'6','value':'成熟魅力'},
	{'id':'7','value':'雍容华贵'},
	{'id':'8','value':'淡雅如菊'}
];


var jobfield_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'计算机/互联网（软件、硬件、服务）'},
	{'id':'2','value':'通信/电子（半导体、仪器、自动化）'},
	{'id':'3','value':'金融服务（会计、审计、银行、保险）'},
	{'id':'4','value':'金融/投资/证券'},
	{'id':'5','value':'贸易（进出口、批发、零售）'},
	{'id':'6','value':'快速消费品（食品、饮料、化妆品）'},
	{'id':'7','value':'服装/纺织/皮革'},
	{'id':'8','value':'家具/家电/玩具/工艺品/小饰品'},
	{'id':'9','value':'办公用品及设备'},
	{'id':'10','value':'医疗/医药/保健'},
	{'id':'11','value':'广告/公关/市场推广/会展'},
	{'id':'12','value':'影视/媒体/出版/印刷/包装'},
	{'id':'13','value':'房地产相关（建筑、物业）'},
	{'id':'14','value':'家居/室内设计/装潢'},
	{'id':'15','value':'服务（咨询、人力资源）'},
	{'id':'16','value':'法律相关'},
	{'id':'17','value':'教育/培训'},
	{'id':'18','value':'学术/科研'},
	{'id':'19','value':'酒店/餐饮业'},
	{'id':'20','value':'旅游'},
	{'id':'21','value':'娱乐/休闲/体育'},
	{'id':'22','value':'美容/保健/形体'},
	{'id':'23','value':'交通（运输、物流、航天、航空）'},
	{'id':'24','value':'汽车（含销售、零配件、相关服务）'},
	{'id':'25','value':'农业（农、林、牧、渔业）'},
	{'id':'26','value':'政府机构/机关'},
	{'id':'27','value':'艺术/音乐/舞蹈'},
	{'id':'28','value':'制造/化工/能源'},
	{'id':'90','value':'非盈利机构'},
	{'id':'99','value':'其他行业'}
];


var companykind_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'政府机关'},
	{'id':'2','value':'事业单位'},
	{'id':'3','value':'外资企业'},
	{'id':'4','value':'合资企业'},
	{'id':'5','value':'国营企业'},
	{'id':'6','value':'私营企业'},
	{'id':'7','value':'自有公司'},
	{'id':'8','value':'其他'}
];


var subject_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'计算机类'},
	{'id':'2','value':'电子信息类'},
	{'id':'3','value':'中文类'},
	{'id':'4','value':'外文类'},
	{'id':'5','value':'经济学类'},
	{'id':'6','value':'金融学类'},
	{'id':'7','value':'管理类'},
	{'id':'8','value':'市场营销类'},
	{'id':'9','value':'法学类'},
	{'id':'10','value':'教育类'},
	{'id':'11','value':'社会学类'},
	{'id':'12','value':'历史类'},
	{'id':'13','value':'哲学类'},
	{'id':'14','value':'艺术类'},
	{'id':'15','value':'图书馆类'},
	{'id':'16','value':'情报档案类'},
	{'id':'17','value':'政治类'},
	{'id':'18','value':'数学类'},
	{'id':'19','value':'统计类'},
	{'id':'20','value':'物理类'},
	{'id':'21','value':'化学类'},
	{'id':'22','value':'生物类'},
	{'id':'23','value':'食品类'},
	{'id':'24','value':'医学类'},
	{'id':'25','value':'环境类'},
	{'id':'26','value':'地理类'},
	{'id':'27','value':'建筑类'},
	{'id':'28','value':'测绘类'},
	{'id':'29','value':'电气类'},
	{'id':'30','value':'机械类'},
	{'id':'31','value':'旅游类'},
	{'id':'32','value':'其他'}
];


var jobstatus_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'稳定轻松'},
	{'id':'2','value':'朝九晚五'},
	{'id':'3','value':'偶尔加班'},
	{'id':'4','value':'经常加班'},
	{'id':'5','value':'偶尔出差'},
	{'id':'6','value':'经常出差'},
	{'id':'7','value':'经常有应酬'},
	{'id':'8','value':'工作时间自由'}
];


var future_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'创业期'},
	{'id':'2','value':'稳定上升期'},
	{'id':'3','value':'转型期'},
	{'id':'4','value':'薪资丰厚'},
	{'id':'5','value':'奖金高福利好'},
	{'id':'6','value':'学习充电期'},
	{'id':'7','value':'尚在规划中'}
];


var language_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'中文(普通话)'},
	{'id':'2','value':'中文(广东话)'},
	{'id':'3','value':'英语'},
	{'id':'4','value':'法语'},
	{'id':'5','value':'日语'},
	{'id':'6','value':'韩语'},
	{'id':'7','value':'德语'},
	{'id':'8','value':'意大利语'},
	{'id':'9','value':'俄语'},
	{'id':'10','value':'芬兰语'},
	{'id':'11','value':'荷兰语'},
	{'id':'12','value':'葡萄牙语'},
	{'id':'13','value':'西班牙语'},
	{'id':'14','value':'越南语'},
	{'id':'15','value':'阿拉伯语'},
	{'id':'16','value':'泰国语'},
	{'id':'17','value':'印度尼希亚语'},
	{'id':'18','value':'印度语'},
	{'id':'19','value':'丹麦语'},
	{'id':'20','value':'希腊语'},
	{'id':'21','value':'伊朗语'},
	{'id':'22','value':'匈牙利语'},
	{'id':'23','value':'土耳其语'},
	{'id':'24','value':'挪威语'},
	{'id':'25','value':'捷克语'},
	{'id':'26','value':'波兰语'},
	{'id':'27','value':'瑞典语'},
	{'id':'28','value':'缅甸语'},
	{'id':'29','value':'罗马尼亚语'},
	{'id':'30','value':'其他'}
];


var religion_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'无宗教信仰'},
	{'id':'2','value':'大乘佛教显宗'},
	{'id':'3','value':'大乘佛教密宗'},
	{'id':'4','value':'小乘佛教'},
	{'id':'5','value':'道教'},
	{'id':'6','value':'儒教'},
	{'id':'7','value':'基督教天主教派'},
	{'id':'8','value':'基督教东正教派'},
	{'id':'9','value':'基督教新教派'},
	{'id':'10','value':'犹太教'},
	{'id':'11','value':'伊斯兰教什叶派'},
	{'id':'12','value':'伊斯兰教逊尼派'},
	{'id':'13','value':'印度教'},
	{'id':'14','value':'神道教'},
	{'id':'15','value':'萨满教'},
	{'id':'16','value':'其他宗教信仰'}
];


var payremarks_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'福利优越'},
	{'id':'2','value':'奖金丰厚'},
	{'id':'3','value':'事业稳定上升'},
	{'id':'4','value':'事业刚起步'},
	{'id':'5','value':'投资高回报'}
];


var economystatus_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'除了钱，什么都有'},
	{'id':'2','value':'目前什么都没有，以后会有的'},
	{'id':'3','value':'有些存款'},
	{'id':'4','value':'有存款，有房'},
	{'id':'5','value':'有存款，有房有车'},
	{'id':'6','value':'钱不用担心，我很富裕'}
];


var smoking_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'不吸'},
	{'id':'2','value':'偶尔吸'},
	{'id':'3','value':'一天一包'},
	{'id':'4','value':'有烟就吸'},
	{'id':'5','value':'正在戒烟'},
	{'id':'6','value':'已经戒了'}
];


var drink_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'滴酒不沾'},
	{'id':'2','value':'有时喝一些'},
	{'id':'3','value':'喜欢来两杯'},
	{'id':'4','value':'好酒量，天天喝'},
	{'id':'5','value':'正在戒酒'},
	{'id':'6','value':'已经戒了'}
];


var rest_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'早睡早起很规律'},
	{'id':'2','value':'经常夜猫子'},
	{'id':'3','value':'总是早起鸟'},
	{'id':'4','value':'偶尔懒散一下'},
	{'id':'5','value':'没有规律'}
];


var sporthabit_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'每天锻炼'},
	{'id':'2','value':'每周至少一次'},
	{'id':'3','value':'每月几次'},
	{'id':'4','value':'没时间锻炼'},
	{'id':'5','value':'集中时间锻炼'},
	{'id':'6','value':'不喜欢锻炼'}
];


var wantbaby_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'愿意'},
	{'id':'2','value':'不愿意'},
	{'id':'3','value':'视情况而定'}
];


var pet_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'猫'},
	{'id':'2','value':'狗'},
	{'id':'3','value':'鸟'},
	{'id':'4','value':'鱼'},
	{'id':'5','value':'兔'},
	{'id':'6','value':'鼠'},
	{'id':'7','value':'猪'},
	{'id':'8','value':'马'},
	{'id':'9','value':'蛇'},
	{'id':'10','value':'乌龟'},
	{'id':'11','value':'爬行动物'},
	{'id':'12','value':'另类宠物'},
	{'id':'13','value':'其他宠物'},
	{'id':'14','value':'正打算养'},
	{'id':'15','value':'不喜欢养'},
	{'id':'16','value':'过敏'}
];


var parentslive_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'愿意'},
	{'id':'2','value':'不愿意'},
	{'id':'3','value':'视具体情况而定'},
	{'id':'4','value':'尊重伴侣意见'}
];


var parentsstatus_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'父母均健在'},
	{'id':'2','value':'只有母亲健在'},
	{'id':'3','value':'只有父亲健在'},
	{'id':'4','value':'父母均已离世'}
];


var broandsis_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'独生子女'},
	{'id':'2','value':'2'},
	{'id':'3','value':'3'},
	{'id':'4','value':'4'},
	{'id':'5','value':'5'},
	{'id':'6','value':'6'},
	{'id':'7','value':'7'},
	{'id':'8','value':'8'},
	{'id':'9','value':'9'}
];


var maxconsumption_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'美食'},
	{'id':'2','value':'服饰'},
	{'id':'3','value':'化妆'},
	{'id':'4','value':'健身'},
	{'id':'5','value':'娱乐休闲'},
	{'id':'6','value':'旅行'},
	{'id':'7','value':'社交'},
	{'id':'8','value':'文化'},
	{'id':'9','value':'教育'},
	{'id':'10','value':'其他'}
];


var makeromantic_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'经常'},
	{'id':'2','value':'偶尔'},
	{'id':'3','value':'视情况而定'},
	{'id':'4','value':'从不'},
	{'id':'5','value':'不喜欢'}
];


var lifeskill_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'实现个人目标'},
	{'id':'2','value':'维护朋友圈关系'},
	{'id':'3','value':'装修房屋'},
	{'id':'4','value':'志愿者/义工'},
	{'id':'5','value':'热衷电脑'},
	{'id':'6','value':'保持生活条理'},
	{'id':'7','value':'理财'},
	{'id':'8','value':'在家款待朋友'},
	{'id':'9','value':'抚养或照顾孩子'},
	{'id':'10','value':'制造浪漫'},
	{'id':'11','value':'社交活动'},
	{'id':'12','value':'谈生意'},
	{'id':'13','value':'保持健康'},
	{'id':'14','value':'解决冲突'},
	{'id':'15','value':'博闻强识'},
	{'id':'16','value':'对自我长期规划'},
	{'id':'17','value':'在简单中找快乐满足'},
	{'id':'18','value':'文化和艺术'},
	{'id':'19','value':'结交新朋友'},
	{'id':'20','value':'烹饪'},
	{'id':'21','value':'赚钱养家'},
	{'id':'22','value':'保养、修理汽车'},
	{'id':'23','value':'做一个好朋友好同事'},
	{'id':'24','value':'日常小维修小制作'},
	{'id':'25','value':'做家务装扮整理房间'},
	{'id':'26','value':'其他'}
];


var personality_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'浪漫迷人'},
	{'id':'2','value':'成熟稳重'},
	{'id':'3','value':'风趣幽默'},
	{'id':'4','value':'乐天达观'},
	{'id':'5','value':'活泼可爱'},
	{'id':'6','value':'忠厚老实'},
	{'id':'7','value':'淳朴害羞'},
	{'id':'8','value':'温柔体贴'},
	{'id':'9','value':'多愁善感'},
	{'id':'10','value':'新潮时尚'},
	{'id':'11','value':'热辣动感'},
	{'id':'12','value':'豪放不羁'},
	{'id':'13','value':'精力充沛'}
];


var likesport_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'足球'},
	{'id':'2','value':'篮球'},
	{'id':'3','value':'排球'},
	{'id':'4','value':'网球'},
	{'id':'5','value':'羽毛球'},
	{'id':'6','value':'乒乓球'},
	{'id':'7','value':'壁球'},
	{'id':'8','value':'保龄球'},
	{'id':'9','value':'手球'},
	{'id':'10','value':'橄榄球'},
	{'id':'11','value':'棒球'},
	{'id':'12','value':'高尔夫'},
	{'id':'13','value':'健身'},
	{'id':'14','value':'跑步'},
	{'id':'15','value':'自行车'},
	{'id':'16','value':'摩托车'},
	{'id':'17','value':'汽车'},
	{'id':'18','value':'舞蹈'},
	{'id':'19','value':'体操'},
	{'id':'20','value':'跆拳道'},
	{'id':'21','value':'柔道'},
	{'id':'22','value':'空手道'},
	{'id':'23','value':'游泳'},
	{'id':'24','value':'水上运动'},
	{'id':'25','value':'攀岩'},
	{'id':'26','value':'溜冰/滑雪'},
	{'id':'27','value':'拳击'},
	{'id':'28','value':'钓鱼'},
	{'id':'29','value':'瑜珈'},
	{'id':'30','value':'武术'},
	{'id':'31','value':'其他'},
	{'id':'32','value':'不喜欢运动'}
];


var likefood_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'江浙菜'},
	{'id':'2','value':'川菜'},
	{'id':'3','value':'湘菜'},
	{'id':'4','value':'火锅'},
	{'id':'5','value':'烧烤'},
	{'id':'6','value':'家常菜'},
	{'id':'7','value':'路边大排档'},
	{'id':'8','value':'绿色食品'},
	{'id':'9','value':'零食小吃'},
	{'id':'10','value':'粤菜'},
	{'id':'11','value':'北方菜'},
	{'id':'12','value':'面食'},
	{'id':'13','value':'素食'},
	{'id':'14','value':'糕点甜食'},
	{'id':'15','value':'自助餐'},
	{'id':'16','value':'减肥餐'},
	{'id':'17','value':'无肉不欢'},
	{'id':'18','value':'鲁菜'},
	{'id':'19','value':'其他'},
	{'id':'20','value':'能填饱肚子就好'}
];


var likemusic_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'中文流行音乐'},
	{'id':'2','value':'轻音乐'},
	{'id':'3','value':'民族音乐'},
	{'id':'4','value':'老歌'},
	{'id':'5','value':'舞曲'},
	{'id':'6','value':'歌剧'},
	{'id':'7','value':'西部乡村'},
	{'id':'8','value':'英文流行音乐'},
	{'id':'9','value':'交响乐'},
	{'id':'10','value':'地方戏曲'},
	{'id':'11','value':'摇滚'},
	{'id':'12','value':'另类'},
	{'id':'13','value':'灵歌'},
	{'id':'14','value':'爵士/蓝调'},
	{'id':'15','value':'其他'}
];


var likemovie_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'爱情'},
	{'id':'2','value':'喜剧'},
	{'id':'3','value':'动作冒险'},
	{'id':'4','value':'古装武侠'},
	{'id':'5','value':'科幻魔幻'},
	{'id':'6','value':'悬疑推理'},
	{'id':'7','value':'惊悚恐怖'},
	{'id':'8','value':'动画/卡通片'},
	{'id':'9','value':'战争'},
	{'id':'10','value':'音乐歌舞'},
	{'id':'11','value':'纪录片'},
	{'id':'12','value':'剧情'},
	{'id':'13','value':'肥皂剧'},
	{'id':'14','value':'历史传记'},
	{'id':'15','value':'其他'},
	{'id':'16','value':'什么都看'}
];


var likebook_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'青春校园'},
	{'id':'2','value':'名著小说'},
	{'id':'3','value':'文学类'},
	{'id':'4','value':'艺术类'},
	{'id':'5','value':'卡通漫画'},
	{'id':'6','value':'娱乐时尚'},
	{'id':'7','value':'旅游类'},
	{'id':'8','value':'历史地理'},
	{'id':'9','value':'家居饮食'},
	{'id':'10','value':'婚姻育儿'},
	{'id':'11','value':'保健疗养'},
	{'id':'12','value':'体育棋牌'},
	{'id':'13','value':'管理类'},
	{'id':'14','value':'经济类'},
	{'id':'15','value':'法律类'},
	{'id':'16','value':'政治军事'},
	{'id':'17','value':'社会科学'},
	{'id':'18','value':'古籍'},
	{'id':'19','value':'传记'},
	{'id':'20','value':'科普读物'},
	{'id':'21','value':'语言类'},
	{'id':'22','value':'医学类'},
	{'id':'23','value':'计算机类'},
	{'id':'24','value':'励志成功'},
	{'id':'25','value':'工具书'},
	{'id':'26','value':'其他'},
	{'id':'27','value':'什么都看'}
];


var liketalk_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'什么都爱谈'},
	{'id':'2','value':'国家大事'},
	{'id':'3','value':'高科技'},
	{'id':'4','value':'艺术'},
	{'id':'5','value':'星座/占卜'},
	{'id':'6','value':'汽车'},
	{'id':'7','value':'明星'},
	{'id':'8','value':'时装/打扮'},
	{'id':'9','value':'经济/生意'},
	{'id':'10','value':'股票'},
	{'id':'11','value':'装修'},
	{'id':'12','value':'电脑/网络'},
	{'id':'13','value':'生活琐事'},
	{'id':'14','value':'时事/新闻'},
	{'id':'15','value':'电影'},
	{'id':'16','value':'音乐'},
	{'id':'17','value':'我的小孩'},
	{'id':'18','value':'我的梦'},
	{'id':'19','value':'我的朋友'},
	{'id':'20','value':'我的工作'},
	{'id':'21','value':'世界/旅游'},
	{'id':'22','value':'上一次恋情'},
	{'id':'23','value':'动物'},
	{'id':'24','value':'哲学'},
	{'id':'25','value':'流行读物'},
	{'id':'26','value':'文学/诗歌'},
	{'id':'27','value':'宗教'},
	{'id':'28','value':'黄段子'},
	{'id':'29','value':'体育运动'},
	{'id':'30','value':'电视节目'},
	{'id':'31','value':'没什么特别的'}
];
var likefunrest_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'超市'},
	{'id':'2','value':'饭店'},
	{'id':'3','value':'商场'},
	{'id':'4','value':'剧院'},
	{'id':'5','value':'酒吧'},
	{'id':'6','value':'电影院'},
	{'id':'7','value':'音乐会'},
	{'id':'8','value':'迪斯科'},
	{'id':'9','value':'网吧'},
	{'id':'10','value':'温泉'},
	{'id':'11','value':'图书馆/书店'},
	{'id':'12','value':'茶楼'},
	{'id':'13','value':'咖啡厅'},
	{'id':'14','value':'游乐场'},
	{'id':'15','value':'卡拉OK'},
	{'id':'16','value':'健身场所'},
	{'id':'17','value':'短途旅游'},
	{'id':'18','value':'逛街'},
	{'id':'19','value':'公园'},
	{'id':'20','value':'拜访亲友'},
	{'id':'21','value':'宅在家中'},
	{'id':'22','value':'其他'},
	{'id':'23','value':'不想说'}
];
var likehobby_ARR = [
	{'id':'0','value':selstr},
	{'id':'1','value':'计算机/互联网 '},
	{'id':'2','value':'电子产品'},
	{'id':'3','value':'玩游戏'},
	{'id':'4','value':'炒股'},
	{'id':'5','value':'看电视'},
	{'id':'6','value':'看电影'},
	{'id':'7','value':'听音乐'},
	{'id':'8','value':'逛街购物'},
	{'id':'9','value':'戏剧'},
	{'id':'10','value':'乐器'},
	{'id':'11','value':'唱歌'},
	{'id':'12','value':'跳舞'},
	{'id':'13','value':'烹饪'},
	{'id':'14','value':'品酒'},
	{'id':'15','value':'茶艺'},
	{'id':'16','value':'读书看报'},
	{'id':'17','value':'写作'},
	{'id':'18','value':'书法/绘画'},
	{'id':'19','value':'装饰居室'},
	{'id':'20','value':'体育'},
	{'id':'21','value':'瑜珈'},
	{'id':'22','value':'功夫'},
	{'id':'23','value':'极限运动'},
	{'id':'24','value':'汽车'},
	{'id':'25','value':'收藏'},
	{'id':'26','value':'旅游'},
	{'id':'27','value':'动物/宠物'},
	{'id':'28','value':'摄影'},
	{'id':'29','value':'科学'},
	{'id':'30','value':'星座/占卜'},
	{'id':'31','value':'时尚'},
	{'id':'32','value':'时事/政治'},
	{'id':'33','value':'手工艺'},
	{'id':'34','value':'棋牌爱好者'},
	{'id':'35','value':'志愿者活动'},
	{'id':'36','value':'彩票'},
	{'id':'37','value':'卡通动漫'},
	{'id':'38','value':'园艺'},
	{'id':'39','value':'种草养花'},
	{'id':'40','value':'其他'}
];

function onclick_input_iframe(title,objid,height){	o(objid).onclick = function(){	ZEAI_win_iframe(height,title,'iframe'+ajxext+'submitok='+objid);}}
function get_ARR_text(objid,list,style){
	var style = arguments[2] ? arguments[2]:'';
	var list = list.split(',');
	var list_text = '';
	var cARR = '';
	//if (objid == 'tag' || objid == 'myoutbbs'){cARR = eval(objid + getcookie('cook_sex') + '_ARR');}else{cARR = eval(objid + '_ARR');	}
	if (objid == 'tag1'){
		cARR = tag1_ARR;
	}else if(objid == 'tag2'){
		cARR = tag2_ARR;
	}else if(objid == 'myoutbbs1'){
		cARR = myoutbbs1_ARR;
	}else if(objid == 'myoutbbs2'){
		cARR = myoutbbs2_ARR;
	}else if(objid == 'tag' || objid == 'myoutbbs'){
		cARR = eval(objid + getcookie('cook_sex') + '_ARR');
	}else{
		cARR = eval(objid + '_ARR');	
	}
	if (style == 'btn'){
		for( key in list){list_text += '<span>' + get_arrvalue(list[key],cARR) + '</span>';}
		return list_text;	
	}else{
		for( key in list){list_text += get_arrvalue(list[key],cARR) + '，';}
		return rtrim(list_text);	
	}
}
function get_arrvalue(id,objid_ARR){for( key in objid_ARR){if (objid_ARR[key].id == id)return objid_ARR[key].value;}}
function echo(objid,value,showzero){
	var delzero = arguments[2] ? arguments[2]:'';
	if (objid == 'myoutbbs1'){
		var ARR = myoutbbs1_ARR;
	}else if(objid == 'myoutbbs2'){	
		var ARR = myoutbbs2_ARR;
	}else if(objid == 'myoutbbs'){
		var ARR = eval(objid + getcookie('cook_sex') + '_ARR');
	}else{
		var ARR = eval(objid+'_ARR');
	}
	if (delzero){
		document.write(get_arrvalue(value,ARR));
	}else{
		if (!empty(value)){
			document.write(get_arrvalue(value,ARR));	
		}else{
			document.write('&nbsp;');	
		}
	}
}
function echo_list(objid,list,style){
	var style = arguments[2] ? arguments[2]:'';
	if (!empty(list)){
		document.write(get_ARR_text(objid,list,style));	
	}else{
		document.write('&nbsp;');
	}
}
