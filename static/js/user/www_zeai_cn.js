var msgtitle = '温馨提示：',fixedname;var ajxpath  = '/ajax/',zeaiext = '3mp42cnzeaimp3ds348w8w8w8z4e4a4i4c8n8',ajxext='.php?',jsdomain = '.yiyuanwang.cn',ajxext_=rtrim(ajxext);document.domain = jsdomain.substr(1);
function o(o){	if(typeof(o) == "string")return document.getElementById(o);return o;}
function ifnum(o){	var pattern = /^\d+(\.\d+)?$/;if(pattern.test(o)){return true;}else{return false;}}//数字
function ifint(member,length,str){	var zeai= eval("/^\s*["+member+"]{"+length+"}\s*$/");	if(!zeai.test(str)){return false;}else{return true;}}//整数ifint("0-9","1,2","20")
function empty(str){if (str == '' || str == 0 || str === null || str === undefined){return true;}else{return false;}}
function openurl(url) {/*window.open(str,'_self')*/window.location.href=url;}function openurl_(url) {window.open(url,'_blank')}
function display(id,type){var mode = (type== 1)?'block':'none';if (typeof(id) == "string"){o(id).style.display = mode;}else{id.style.display = mode;}}
function in_array(v,arr) {if(typeof v == 'string' || typeof v == 'number'){for(var i in arr) {if(arr[i] == v) {return true;}}}return false;}
function str_len(str){var byteCount=0;for(var i=0;i<str.length;i++){byteCount=(str.charCodeAt(i)<=256)?byteCount+1:byteCount+2;}return byteCount;}
function ifmob(num){var partten = /^1[3,4,5,7,8]\d{9}$/;if(partten.test(num)){return true;}else{return false;}}
function ifsfz(card){var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;if(reg.test(card) === false){return  false;}else{return  true;}}
function rtrim(s){return s.substring(0,s.length-1);}
function jsoneval(rs){return eval('('+decodeURI(rs)+')');}
var tipsL = "<div class='tipsbox'><div class='tpsL'><img src='/images/loadingData.gif'></div><div class='tpsR'>";var tipsR = "</div></div>";
function XML_ajax(url,fn,form,bfb){
	if(window.XMLHttpRequest) {	var xmlHttp = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		try {	var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");}	catch(e) {} 
		try{	var xmlHttp = new ActiveX0bject("Msxml2.XMLHTTP");}	catch(e) {}	
		if(!xmlHttp){ window.alert("No Create XML"); return false; }}
	xmlHttp.open('POST',encodeURI(url),true);//是否异
	xmlHttp.onreadystatechange = function(){if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
	if(typeof(fn) == "string" && !empty(fn)){
		eval(fn+'("'+xmlHttp.responseText+'")');
	}else if(fn){
		fn(xmlHttp.responseText);
	}}}
	if (!empty(bfb)){}
	form = (!empty(form))?form:null;
	xmlHttp.send(form);
}
function ZEAI_chat(uid,fn){
	var fn = arguments[1] ? arguments[1]:false;
	XML_ajax('/my/msg'+ajxext+'submitok=ajax_ifchat&uid='+uid,function(e){rs=jsoneval(e);
		if (rs.flag == 'nocookdata'){
			ZEAI_alert(rs.msg,rs.jumpurl);
		}else{
			switch (parseInt(rs.flag)){
				case -1:ZEAI_alert(rs.msg);break;
				case -2:ZEAI_alert(rs.msg);break;
				case  0:if(fn)fn(rs.flag,rs.n);ZEAI_iframe(450,550,'我正在与 《'+rs.nickname+'》 聊天','/my/msg_show'+ajxext+'uid='+uid);break;
				default://1,3
					var div,a1,a2,a3;
					ZEAI_div(340,'auto',rs.title,function(){
							var divbox = o('C_div').children;
							if (divbox.length == 0){
								div = document.createElement('div');div.className = 'box_vip';
								a1  = document.createElement('a');a1.href = '/my/vip'+ajxext_;a1.innerHTML = rs.text1;
								a2  = document.createElement('a');a2.href = 'javascript:;';a2.innerHTML = rs.text2;
								a3  = document.createElement('a');a3.href = 'javascript:;';a3.innerHTML = rs.text3;
								div.appendChild(a1);div.appendChild(a2);div.appendChild(a3);
								o('C_div').appendChild(div);
							}else{a2 = divbox[0].children[1];a3= divbox[0].children[2];}
							a2.onclick = function(){XML_ajax('/my/msg'+ajxext+'submitok=ajax_add_msgUlist&uid='+uid,function(e){rs=jsoneval(e);
								if (rs.flag == 1){
									ZEAI_div_close();ZEAI_alert(rs.msg);
									ZEAI_iframe(450,550,'我正在与 《'+rs.nickname+'》 聊天','/my/msg_show'+ajxext+'uid='+uid);ZEAI_alert_close();
									if(fn)fn(rs.flag,rs.n);
								}else{ZEAI_alert(rs.msg,rs.jumpurl);}
							});}
							a3.onclick = function(){ZEAI_div_close();}
						}
					);
				break;
			}
		}
	});
}
function ZEAI_hi(uid,fn) {
	XML_ajax('/my/tip'+ajxext+'submitok=ajax_send_hi&uid='+uid,function (e){rs=jsoneval(e);
		if (rs.flag == 1){
			ZEAI_tips_0_100_0(130,110,'<i class="hi"></i>招呼已发送');setTimeout("ZEAI_tips_0_100_0_close()",2000);if(fn)fn();
		}else{ZEAI_alert(rs.msg,rs.jumpurl);}
	});
}
function AddFavorite(title,url){
	try {window.external.addFavorite(url, title);}
	catch (e) {
		try {window.sidebar.addPanel(title, url, "");}
		catch (e) {alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");}
	}
}
function getpass(){
	var uname = o('miniuname').value;
	if(str_len(uname) < 3 || str_len(uname)>20){ZEAI_alert('请输入正确的登录帐号','miniuname');return false;}else{
		XML_ajax('/login'+ajxext+'submitok=ajax_findpass&uname='+uname,function (e){rs=jsoneval(e);ZEAI_alert(rs.msg,rs.obj,400);});
	}
}