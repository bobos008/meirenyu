/******************************************
作者: 郭余林　QQ:797311 (supdes)
未经本人同意，请不要删除版权
*****************************************/
function ZEAI_iframe_close(){display('mask_iframe',0);display('box_iframe',0);}   
function ZEAI_iframe(W,H,title,url,fn){
	display('mask_iframe',1);display('box_iframe',1);
	var title   = arguments[2] ? arguments[2]:'';
	var fn      = arguments[4] ? arguments[4]:'';
	if(fn)fn();
	var box_iframe = o('box_iframe');
	var C_iframe   = o('C_iframe');
	var C_iframe_child = C_iframe.children[0];
	var W_ = C_iframe_child.offsetWidth
	var H_ = C_iframe_child.offsetHeight;
	W = (W == 0 || W == '' || W == 'auto')?W_:W;
	H = (H == 0 || H == '' || H == 'auto')?H_:H;
	box_iframe.style.width = W+'px';
	if (!empty(title)){display('title_iframe',1);box_iframe.style.height = (H+50)+'px';o('title_iframe').innerHTML = title;	}else{display('title_iframe',0);box_iframe.style.height = (H)+'px';}
	bodyH = document.documentElement.clientHeight;
	bodyW = document.documentElement.clientWidth;
	cW = parseInt((bodyW - box_iframe.offsetWidth)/2);
	cH = parseInt((bodyH - box_iframe.offsetHeight)/2);
	box_iframe.style.left = cW+'px';box_iframe.style.top = cH+'px';
	var X = box_iframe.children[1];X.onclick = function (){ZEAI_iframe_close();}
	o('www_zeai_cn__iframe').style.width  = W+'px';
	o('www_zeai_cn__iframe').style.height = H+'px';
	o('www_zeai_cn__iframe').src = url;
}
document.write("<div id='mask_iframe' class='alpha0_100'></div>");
document.write("<div id='box_iframe' class='animattime_fast fadeInDown'>");
document.write("	<div id='title_iframe'></div><div class='X'></div>");
document.write("	<div id='C_iframe'><iframe id='www_zeai_cn__iframe' name='supdesQQ__797311' frameborder='0'  scrolling='no' class='iframe'></iframe></div>");
document.write("</div>");
//o('mask_iframe').onclick = function(){ZEAI_iframe_close();}
function win_pageDrag(id) {
	var dv = o(id);
	dv.onmousedown = function (e) {
		var d = document;
		var page = {
			event: function (evt) {
				var ev = evt || window.event;
				return ev;
			},pageX: function (evt) {
				var e = this.event(evt);
				return e.pageX || (e.clientX + document.body.scrollLeft - document.body.clientLeft);
			},pageY: function (evt) {
				var e = this.event(evt);
				return e.pageY || (e.clientY + document.body.scrollTop - document.body.clientTop);
			},layerX: function (evt) {
				var e = this.event(evt);
				return e.layerX || e.offsetX;
			},layerY: function (evt) {
				var e = this.event(evt);
				return e.layerY || e.offsetY;
			}
		}             
		var x = page.layerX(e);var y = page.layerY(e);        
		if (dv.setCapture) {dv.setCapture();}
		else if (window.captureEvents) {window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);}
		d.onmousemove = function (e) {                    
			var tx = page.pageX(e) - x;
			var ty = page.pageY(e) - y;
			//dv.style.left = tx + "px";
			//dv.style.top = ty + "px";
			var boxW = parseInt(o('box_iframe').style.width);
			var boxH = parseInt(o('box_iframe').style.height);
			var bodyW = parseInt(document.body.clientWidth);
			var bodyH = parseInt(document.documentElement.clientHeight);
			if (tx<0)tx = 0;
			if (ty<0)ty = 0;
			var maxLeftW = bodyW-boxW-10;
			var maxBottomH = bodyH-boxH-10;
			if (tx>maxLeftW)tx = maxLeftW;
			if (ty>maxBottomH)ty = maxBottomH;
			o('box_iframe').style.left = tx + "px";
			o('box_iframe').style.top = ty + "px";
			return false;
		}
		d.onmouseup = function () {
			if (dv.releaseCapture) {dv.releaseCapture();}else if (window.releaseEvents) {window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP);}d.onmousemove = null;d.onmouseup = null;
			
		}
	}
}win_pageDrag('title_iframe');
