function fontAuto(width){
	var screenWidth=document.documentElement.clientWidth;
	if(screenWidth>=width)
	{
		document.documentElement.style.fontSize="625%";
	}
	else{
		document.documentElement.style.fontSize=(625*screenWidth/width)+"%";
	}
	
}
fontAuto(750);

window.onresize=function(){
	fontAuto(750);
}
