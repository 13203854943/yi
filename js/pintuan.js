$(".on").addClass("in");
$("section>ul>li").click(function(){
	$(this).addClass("in").children("ul").show().parent().siblings().removeClass("in").children("ul").hide();
})
