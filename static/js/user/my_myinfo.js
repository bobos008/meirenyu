input("GYLform");
var tmpsex = 0;
if (t == 1)	picaddfn();
function picaddfn(){
	var picaddC = o('picadd').children;
	if (picaddC.length == 0){
		o('picadd').onclick = function(){
			var pic = o('pic');pic.click();
			pic.onchange = function(){
				var FILES = pic.files[0];
				if (FILES['size'] > UpMaxSize*1024000){pic.value='';ZEAI_alert('图片【'+FILES['name']+'】太大，已超过'+UpMaxSize+'M，请重新选择','',500);return false;}
				var filename = FILES['name'].toLowerCase();
				var ftype    = filename.substring(filename.lastIndexOf("."),filename.length);
				if ((ftype != '.jpg')&&(ftype != '.gif')&&(ftype != '.png')){pic.value='';ZEAI_alert('只能上传 .jpg 或 .gif 或 .png 格式的图片,请重新选择!','',500);return false;}
				setTimeout(ZEAI_tips(200,50,tipsL+"正在上传中..."+tipsR),50);//<span id='upbfb'></span>
				var form = new FormData();
				form.append("FILES",FILES);
				form.append("submitok",'ajax_photo_s_up');
				XML_ajax('myinfo'+ajxext_,function(e){rs=jsoneval(e);
					pic.value='';ZEAI_tips_close();
					if (rs.flag == 1){ZEAI_iframe(720,660,'裁切主头像','photo_s_cut'+ajxext+'&submitok=www___zeai__cn_inphotocut&tmp_photo='+rs.tmp_photo);}else{ZEAI_alert(rs.msg);}
				},form);
			}
		}
	}else{
		var photo_s = picaddC[0],b = picaddC[1];
		photo_s.onclick = function(){piczoom(photo_s.src.replace('_s','_b'));}
		if (H2 != 2)
		b.onclick = function(){
			ZEAI_confirm('是否删除重新上传？',function (){
				XML_ajax('myinfo'+ajxext+'submitok=ajax_photo_s_del',function (e){rs=jsoneval(e);
					if (rs.flag == 1){o('picadd').innerHTML = '';picaddfn();}
				});
			});
		};
	}
}
function chkform(t){
	switch (t){
		case 1:
			var a1 = get_option('a1','v');
			var a2 = get_option('a2','v');
			var a3 = get_option('a3','v');
			a1 = (a1 == 0)?'':a1;
			a2 = (a2 == 0)?'':','+a2;
			a3 = (a3 == 0)?'':','+a3;
			var areaid = a1 + a2 + a3;
			areaid = (areaid == '0,0,0')?'':areaid;
			//
			var a1t = get_option('a1','t');
			var a2t = get_option('a2','t');
			var a3t = get_option('a3','t');
			a1t = (nulltext == a1t)?'':a1t;
			a2t = (nulltext == a2t)?'':' '+a2t;
			a3t = (nulltext == a3t)?'':' '+a3t;
			var areatitle = a1t + a2t + a3t;
			//
			var a11 = get_option('a11','v');
			var a22 = get_option('a22','v');
			var a33 = get_option('a33','v');
			a11 = (a11 == 0)?'':a11;
			a22 = (a22 == 0)?'':','+a22;
			a33 = (a33 == 0)?'':','+a33;
			var area2id = a11 + a22 + a33;
			area2id = (area2id == '0,0,0')?'':area2id;
			//
			var a11t = get_option('a11','t');
			var a22t = get_option('a22','t');
			var a33t = get_option('a33','t');
			a11t = (nulltext == a11t)?'':a11t;
			a22t = (nulltext == a22t)?'':' '+a22t;
			a33t = (nulltext == a33t)?'':' '+a33t;
			var area2title = a11t + a22t + a33t;
			//
			o('areaid').value = areaid;
			o('areatitle').value = areatitle;
			o('area2id').value = area2id;
			o('area2title').value = area2title;
			if (data_sex == 0){
				if (tmpsex == 0){
					ZEAI_alert('请选择您的性别','sex1');return false;
				}else if(tmpsex == 1){
					o('tag').value = get_checked_value_list('tag_1');
				}else if(tmpsex == 2){
					o('tag').value = get_checked_value_list('tag_2');
				}
			}else{
				o('tag').value = get_checked_value_list('tag_');
			}
			if (str_len(o('nickname').value) > 50 || str_len(o('nickname').value)<2){ZEAI_alert('请输入您的昵称','nickname');return false;}
			if (o('birthday').value == '0000-00-00' || empty(o('birthday').value)){ZEAI_alert('请选择您的生日','birthday');return false;}
			if (!chk_radio('love') && empty(data_love) ){ZEAI_alert('请选择您的婚姻状况','love1');return false;}
			if (!chk_radio('edu') && empty(data_edu) ){ZEAI_alert('请选择您的学历','edu1');return false;}
			if (!chk_radio('pay') && empty(data_pay) ){ZEAI_alert('请选择您的月收入','pay1');return false;}
			if (!chk_radio('house') && empty(data_house) ){ZEAI_alert('请选择您的住房情况','house1');return false;}
			if (!chk_radio('car') && empty(data_car) ){ZEAI_alert('请选择您的买车情况','car1');return false;}
			if (empty('heigh')){ZEAI_alert('请选择您的身高','heigh');return false;}
			if (empty(o('a1').value)){ZEAI_alert('请选择您的所在地区一级','a1');return false;}
			if (empty(o('a2').value)){ZEAI_alert('请选择您的所在地区二级','a2');return false;}
			if (empty(o('a3').value)){ZEAI_alert('请选择您的所在地区三级','a3');return false;}
		break;
		case 3:
			o('language').value = get_checked_value_list('language_');
		break;
		case 4:
			o('pet').value = get_checked_value_list('pet');
			o('lifeskill').value = get_checked_value_list('lifeskill');
		break;
		case 5:
			o('likesport').value = get_checked_value_list('likesport_');
			o('likefood').value = get_checked_value_list('likefood_');
			o('likemusic').value = get_checked_value_list('likemusic_');
			o('likemovie').value = get_checked_value_list('likemovie_');
			o('likebook').value = get_checked_value_list('likebook_');
			o('liketalk').value = get_checked_value_list('liketalk_');
			o('likefunrest').value = get_checked_value_list('likefunrest_');
			o('likehobby').value = get_checked_value_list('likehobby_');
		break;
	}
}
function tag12(sex){
	if (sex == 1){
		display('tagbox1',1);display('tagbox2',0);
		tmpsex = 1;
	}else{
		display('tagbox1',0);display('tagbox2',1);
		tmpsex = 2;
	}
}

function delrz(t){
	ZEAI_confirm('请先取消认证后再操作',function (){
		openurl('honor_2'+ajxext+'hid='+t);	
	});
}
if (!empty(o('mod2')))o('mod2').onclick = function(){delrz(2);}
if (!empty(o('mod4')))o('mod4').onclick = function(){delrz(4);}
if (!empty(o('mod5')))o('mod5').onclick = function(){delrz(5);}
