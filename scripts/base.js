window.onload=function(){
//打字游戏
	var sence=document.getElementById('sence'),code,block,timerId, hasjishuqi=false,time=0;
	var time1=document.getElementById('time');
	for(var i=0;i<52;i++){
		code=65+Math.floor(Math.random()*(122-65));
		while(code>=91&&code<=96){
			code=65+Math.floor(Math.random()*(122-65));
		}
		block=document.createElement('div');
		block.setAttribute('class','block');
		sence.appendChild(block);
		block.innerHTML=String.fromCharCode(code);
	}
	var top=sence.firstElementChild;
	document.onkeydown=function(e){
		// var top=sence.firstElementChild;
		if(e.shiftKey){
			if(e.keyCode!==top.innerHTML.charCodeAt(0)) return;
		}else{
			if(e.keyCode+32!==top.innerHTML.charCodeAt(0)) return;
		}	
		if(!hasjishuqi){
			timerId=setInterval(function(){
				time++;
				time1.innerHTML=time;
			},1000);
			hasjishuqi=true;
		}
		top.style.background='#898989';
		top=top.nextElementSibling;
		if(top==null){
			clearInterval(timerId);
			alert(time);
			location.reload();
		}//这个为打字换色模式

		// sence.removeChild(top);
		// if(sence.children.length==0){
		// 	clearInterval(timerId);
		// 	alert(time);
		// 	location.reload();
		// }//这个为打字消除模式
	};


	
	
	
	
	






};