var checkflag = "false";
function checkallbox(selectname,totalio) {
	if (checkflag == "false") {
		for (i = 0; i < totalio; i++) {
			o(selectname+i).checked = true;
		}
		checkflag = "true";
		return "取消"; 
	} else {
		for (i = 0; i < totalio; i++) {
			o(selectname+i).checked = false;
		}
		checkflag = "false";
		return "全选"; 
	}
}
//
function chk_radio(objname){
 	var f = false;
	var obj = document.getElementsByName(objname);
	for(var k = 0;k<obj.length;k++){
		if (obj[k].checked){f=true;break;}
	}
	return f;
}
function chk_checkbox(objname){
 	var n = 0;
	var obj = document.getElementsByName(objname+'[]');
	for(var k = 0;k<obj.length;k++){
		if (obj[k].checked)n++;
	}
	return n;
}
