<!--

	//更换验证码
	function change_yzm(url){
		yzm.innerHTML="<img src=\""+url+"\" title=\"点击更换\"/>";
	}

	//返回历史页面-1
	function goback(n){
		window.history.back(n);
	}

	//Div显示隐藏函数
	function divsh(s){
	 if(s.style.display=="none"){s.style.display="";}else{s.style.display="none";}
	}

	//首页收藏本站函数
	function shoucang(){
		window.external.addFavorite('http://www.evildao.com','邪道网络');
	}

	//首页版权显示函数
	function cr(){
		alert('你们的支持是我最大的动力\n\n      感谢您的访问!\n\n   邪道网络');
	}
	
	//URL跳转函数
	function rurl(url){
		location.href=url;
	}
	
	//logo标签即时更新函数
	function logo(str){
		logo.innerHTML=str;
	}
	
	//搜索内涵标签转换函数
	function sear(key,str){
		if(key){
			if(form1.search.value==str){
				form1.search.value="";
				form1.search.style.color="#000";
			}
		}else{
			if(form1.search.value==""){
				form1.search.value=str;
				form1.search.style.color="#CCC";
			}
		}
	}

	//用户系统账户框内涵转换函数
	function loginUser(key){
		if(key){
			if(form1.user.value=="帐号:"){
				form1.user.value="";
				form1.user.style.color="#000";
			}
		}else{
			if(form1.user.value==""){
				form1.user.value="帐号:";
				form1.user.style.color="#999999";
			}
		}	
	}
	
	//用户系统注册Email文本框内涵转换函数
	function loginMail(key){
		if(key){
			if(form1.email.value=="邮箱:"){
				form1.email.value="";
				form1.email.style.color="#000";
			}
		}else{
			if(form1.email.value==""){
				form1.email.value="邮箱:";
				form1.email.style.color="#999999";
			}
		}	
	}

	//用户系统验证码框内涵转换函数
	function loginYzm(key){
		if(key){
			if(form1.yzm.value=="验证码:"){
				form1.yzm.value="";
				form1.yzm.style.color="#000";
			}
		}else{
			if(form1.yzm.value==""){
				form1.yzm.value="验证码:";
				form1.yzm.style.color="#999999";
			}
		}	
	}

	//用户系统密码框内涵转换函数
	function loginPassword(key){
		if(key){
			if(form1.password.value=="密码:"){
				form1.password.value="";
				form1.password.type="password";
				form1.password.style.color="#000";
			}
		}else{
			if(form1.password.value==""){
				form1.password.value="密码:";
				form1.password.type="text";
				form1.password.style.color="#999999";
			}
		}	
	}
	
	//用户系统重复密码,密码框内涵转换函数
	function loginRPassword(key){
		if(key){
			if(form1.rpassword.value=="重复密码:"){
				form1.rpassword.value="";
				form1.rpassword.type="password";
				form1.rpassword.style.color="#000";
			}
		}else{
			if(form1.rpassword.value==""){
				form1.rpassword.value="重复密码:";
				form1.rpassword.type="text";
				form1.rpassword.style.color="#999999";
			}
		}	
	}

//-->