document.write('<div class="float_rdiv"><div id="frd_up" class="" onClick="window.scrollTo(0,0);"><span class="frd_s"></span>返回<br>顶部</div></div>');
window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop; 
    var top_div = document.getElementById("frd_up");
    if( t >= 30 ) {
		if(top_div.className!="frd_below frd_show"){
			top_div.style.display="block";top_div.className="frd_below";
    		top_div.className="frd_below frd_show";
		}
	} else {top_div.className="frd_below";}
}
if (!empty(o('my')))o('my').onclick = function(){if (this.href != '/my')ZEAI_loginreg('login')}
if (!empty(o('zeailogin')))o('zeailogin').onclick = function(){ZEAI_loginreg('login');}
if (!empty(o('zeaireg')))o('zeaireg').onclick = function(){ZEAI_loginreg('reg');}
if (!empty(o('addfav')))o('addfav').onclick = function(){AddFavorite(favurl,SiteName)}