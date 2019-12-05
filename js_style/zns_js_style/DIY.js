var i=0
$(function(){
	$(".ig").eq(0).show().siblings().hide();
	setInterval(function(){
		i++;
		if(i==6)
		{i=0}
		
		$(".ig").eq(i).fadeIn(300).siblings().fadeOut(300),
		$(".tab").eq(i).addClass("bg").siblings().removeClass("bg")
},4000)


})