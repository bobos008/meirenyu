/******************************************
作者: 郭余林　QQ:797311 (supdes)
未经本人同意，请不要删除版权
*****************************************/
function ZEAI_tips(W,H,text){
    bodyW = document.body.clientWidth;
    bodyH = document.documentElement.clientHeight;
    o('divbg_tips').style.width   = bodyW+'px';   
    o('divbg_tips').style.height  = bodyH+'px';   
    display('divbg_tips',1); 
    o('divcontent_tips').style.height = H+'px';
    o('divcontent_tips').style.width  = W+'px';
    cW = parseInt(bodyW/2 - W/2);
    cH = parseInt(bodyH/2 - H);
    o('divcontent_tips').style.left = cW+'px';
    o('divcontent_tips').style.top  = cH+'px';
    o('divcontent_tips').style.lineHeight = H+'px';
    display('divcontent_tips',1); 
    o('divcontent_tips').innerHTML = text;}
    function ZEAI_tips_close(){display('divbg_tips',0);display('divcontent_tips',0);}
    document.write("<style type='text/css'>");
    document.write("#divbg_tips {position:fixed; top:0px;filter:alpha(opacity=50);-moz-opacity:0.5;opacity:0.5; background-color:#000;z-index:999;left:0px;display:none}");
    document.write("#divcontent_tips {position:fixed;z-index:999;overflow:hidden;display:none;background-color:#000;padding:5px;border-radius:5px;color:#fff;filter:alpha(opacity=70);-moz-opacity:0.7;opacity:0.7;font-size:14px;text-align:center}");
    document.write("#divcontent_tips .tipsbox{width:155px;margin:7px auto}");
    document.write("#divcontent_tips .tipsbox .tpsL{float:left;width:35px;height:35px;text-align:left}");
    document.write("#divcontent_tips .tipsbox .tpsL img{width:35px;height:35px}");
    document.write("#divcontent_tips .tipsbox .tpsR{float:left;width:120px;line-height:35px;font-size:14px;text-align:left}");
    document.write("</style>");
    document.write("<div id='divbg_tips'></div>");
    document.write("<div id='divcontent_tips' class='animatedfast fadeInDown'></div>");
    o('divbg_tips').addEventListener('touchmove',function(e) {e.preventDefault();});
    //
    function ZEAI_tips_0_100_0(W,H,text){
        display('mask_tips',1);
        var bodyW = document.body.clientWidth;
        var bodyH = document.documentElement.clientHeight;
        var divcontent_tips0_100_0 = o('divcontent_tips0_100_0');
        divcontent_tips0_100_0.style.height = H+'px';
        divcontent_tips0_100_0.style.width  = W+'px';
        var cW = parseInt(bodyW/2 - W/2);
        var cH = parseInt(bodyH/2 - H);
        divcontent_tips0_100_0.style.left = cW+'px';
        divcontent_tips0_100_0.style.top  = cH+'px';
        display('divcontent_tips0_100_0',1); 
        divcontent_tips0_100_0.innerHTML = text;
    }
    function ZEAI_tips_0_100_0_close(){display('divcontent_tips0_100_0',0);display('mask_tips',0);}
    document.write("<div id='mask_tips'></div>");
    document.write("<div id='divcontent_tips0_100_0' class='alpha0_100_0'></div>");
