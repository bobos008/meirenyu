/******************************************
作者: 郭余林　QQ:797311 (supdes)
未经本人同意，请不要删除版权
*****************************************/
/*div*/
function ZEAI_div_close(){display('mask_div',0);display('box_div',0);}
function ZEAI_div(W,H,title,fn){
	display('mask_div',1);display('box_div',1);
	var title   = arguments[2] ? arguments[2]:'';
	var fn      = arguments[3] ? arguments[3]:'';
	if(fn)fn();
	var box_div = o('box_div');
	var C_div   = o('C_div');
	var C_div_child = C_div.children[0];
	var W_ = C_div_child.offsetWidth
	var H_ = C_div_child.offsetHeight;
	W = (W == 0 || W == '' || W == 'auto')?W_:W;
	H = (H == 0 || H == '' || H == 'auto')?H_:H;
	box_div.style.width = W+'px';
	if (!empty(title)){display('title_div',1);box_div.style.height = (H+52)+'px';o('title_div').innerHTML = title;	}else{display('title_div',0);box_div.style.height = (H)+'px';}
	bodyH = document.documentElement.clientHeight;
	bodyW = document.documentElement.clientWidth;
	cW = parseInt((bodyW - box_div.offsetWidth)/2);
	cH = parseInt((bodyH - box_div.offsetHeight)/2-50);
	box_div.style.left = cW+'px';box_div.style.top = cH+'px';
	var X = box_div.children[1];X.onclick = function (){ZEAI_div_close();}
}
document.write("<div id='mask_div' class='alpha0_100'></div>");
document.write("<div id='box_div' class='animattime_fast fadeInDown'>");
document.write("	<div id='title_div'></div><div class='X'></div><div id='C_div'></div>");
document.write("</div>");
o('mask_div').onclick = function(){ZEAI_div_close();}
/*alert*/
function ZEAI_alert_close(){
display('mask_alert',0);display('box_alert',0);
var formid = o('formid').value;
if (formid != ''){
var regm = "^[a-zA-Z][a-zA-Z0-9_]*$";
if (formid == 0 || formid == '0'){	window.opener=null;window.open('','_self');window.close();
}else if(formid == '-1'){window.history.back(-1);
}else if(formid.match(regm)){o(formid).focus();
}else if(empty(formid)){
}else{window.location.href=formid;}}}
function ZEAI_alert(title,formid,W,H){
formid = (arguments[1] || formid==0)?arguments[1]:'';
W = arguments[2] ? arguments[2]:320;
H = arguments[3] ? arguments[3]:111;
var bodyH,box_alert;
box_alert = o('box_alert');
display('mask_alert',1);display('box_alert',1);
bodyW = document.documentElement.clientWidth;
bodyH = document.documentElement.clientHeight;
box_alert.style.width  = W+'px';
box_alert.style.height = H+'px';
cW = parseInt((bodyW - W)/2);
cH = parseInt((bodyH - H)/2-50);
box_alert.style.left = cW+'px';
box_alert.style.top  = cH+'px';
o('title_alert').innerHTML = title;
if (!empty(formid) || formid == 0)o('formid').value = formid;}
document.write("<input type='hidden' value='' id='formid'>");
document.write("<div id='mask_alert' class='alpha0_100'></div>");
document.write("<div id='box_alert' class='animattime_fast fadeInDown'>");
document.write("<div id='title_alert'></div>");
document.write("<div id='close_alert'>确定</div>");
document.write("</div>");
o('close_alert').onclick = function(){ZEAI_alert_close();}
/*confirm*/
function ZEAI_confirm_close(){display('mask_confirm',0);display('box_confirm',0);}
function ZEAI_confirm(title,fn,W,H){
	W = arguments[2] ? arguments[2]:340;
	H = arguments[3] ? arguments[3]:131;
	bodyW = document.documentElement.clientWidth;
	bodyH = document.documentElement.clientHeight;
	box_confirm = o('box_confirm');
	display('mask_confirm',1);display('box_confirm',1);
	box_confirm.style.width = W+'px';
	box_confirm.style.height = H+'px';
	cW = parseInt((bodyW - W)/2);
	cH = parseInt((bodyH - H)/2-50);
	box_confirm.style.left = cW+'px';
	box_confirm.style.top  = cH+'px';
	o('title_confirm').innerHTML = title;
	o('cancel_confirm').onclick = function(){ZEAI_confirm_close();}
	if(fn){o('ok_confirm').onclick = function(){ZEAI_confirm_close();fn();}}
}
document.write("<div id='mask_confirm' class='alpha0_100'></div>");
document.write("<div id='box_confirm' class='animattime_fast fadeInDown'>");
document.write("<div id='title_confirm'></div>");
document.write("<div><a id='ok_confirm'>确定</a><a id='cancel_confirm'>取消</a></div>");
document.write("</div>");
o('mask_confirm').onclick = function(){ZEAI_confirm_close();}

/*piczoom*/
function ZEAI_piczoom(W,H,text){
bodyW = document.body.clientWidth;
bodyH = document.documentElement.clientHeight;
o('divbg_piczoom').style.width   = bodyW+'px';   
o('divbg_piczoom').style.height  = bodyH+'px';   
display('divbg_piczoom',1); 
o('divcontent_piczoom').style.height = H+'px';
o('divcontent_piczoom').style.width  = W+'px';
cW = parseInt(bodyW/2 - W/2);
cH = parseInt(bodyH/2 - H/2);
o('divcontent_piczoom').style.left = cW+'px';
o('divcontent_piczoom').style.top  = cH+'px';
o('close_piczoom').style.left = parseInt(cW+W-30)+'px';
o('close_piczoom').style.top  = parseInt(cH-30)+'px';
display('divcontent_piczoom',1);display('close_piczoom',1); 
var Cpic_piczoom = o('Cpic_piczoom');
Cpic_piczoom.innerHTML = text;
Cpic_piczoom.style.lineHeight = H+'px';
var imgs = Cpic_piczoom.getElementsByTagName('img');
imgs[0].style.maxHeight  = H+'px';}
function ZEAI_piczoom_close(){display('divbg_piczoom',0);display('divcontent_piczoom',0);display('close_piczoom',0);}
document.write("<style type='text/css'>");
document.write("#divbg_piczoom {position:fixed; top:0px;filter:alpha(opacity=70);-moz-opacity:0.7;opacity:0.7;background-color:#000;z-index:998;left:0px;display:none}");
document.write("#divcontent_piczoom {position:fixed;z-index:999;overflow:hidden;display:none;background-color:#000;padding:5px;text-align:center;cursor:zoom-out}");
document.write("#divcontent_piczoom img{vertical-align:middle;display:inline-block}");
document.write("#close_piczoom{position:fixed;z-index:999;display:none;width:60px;height:60px;border-radius:34px;border:#666 2px solid;background-color:#333;background-image:url('/images/close2.png');cursor:pointer}");
document.write("#close_piczoom{background-size:50px 50px;background-repeat:no-repeat;background-position:center center}");
document.write("#close_piczoom:hover{background-color:#666}");
document.write("</style>");
document.write("<div id='divbg_piczoom'></div>");
document.write("<div id='divcontent_piczoom' class='animattime_fast fadeInDown'><div id='Cpic_piczoom'></div></div>");
document.write("<div id='close_piczoom' class='animattime_fast fadeInUp'></div>");
o('divcontent_piczoom').onclick = function(){ZEAI_piczoom_close();}
o('close_piczoom').onclick = function(){ZEAI_piczoom_close();}
function piczoom(pic) {ZEAI_piczoom(720,720,'<img src='+pic+'>');}
