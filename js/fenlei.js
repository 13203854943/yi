$(function(){
	$(".on").addClass("in");
	var hei=$(".section-right>div").height();
	$(".section-left>ul>li").click(function(){
		index=$(this).index();
		var num=index*hei;
		console.log(num);
		$(this).addClass("in").siblings().removeClass("in");
		$(document).scrollTop(num);
	})
})
	
