$(".on").addClass("in");
$("section>ul>li").click(function(){
	$(this).addClass("in").children("ul").fadeIn(500).parent().siblings().removeClass("in").children("ul").hide();
})