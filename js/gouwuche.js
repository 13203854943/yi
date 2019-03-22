$(".section-1>ul>li>.span-5").click(function(){
	$(this).children("img").toggle();
})
$("section>.span-1").click(function(){
	$(this).children("img").toggle();
	$("footer>.span-5").children("img").toggle();
	$(".section-1>ul>li>.span-5").children("img").toggle();
	fa();
})
var flag=true;
$("footer>.span-5").click(function(){
	$(this).children("img").toggle();
	$("section>.span-1").children("img").toggle();
	$(".section-1>ul>li>.span-5").children("img").toggle();
	fa();
})

function fa(){
	var a=$(".section-1>ul>li>a>b>span").html();
	var b=$(".jia").prev("input").val();
	var pa=parseInt(a);
	var pb=parseInt(b);
	var nmn=0;
	$(".section-1>ul>li").each(function(){
		var pr=$(this).children("a").children("b").children("span").html();
		var b=$(this).children("a").children("span").children("input").val();
		var ppr=parseInt(pr);
		var pb=parseInt(b);
		var dzh=ppr*pb;
		nmn+=dzh;
	})
	if (flag) {
		$(".zj").html(nmn);
		flag=false;
	}else{
		$(".zj").html(0.00);
		flag=true;
	}
}
$(".jia").click(function(){
	var hh=$(this).prev("input").val();
	var a=parseInt(hh);
	a++;
	$(this).prev("input").val(a);
})
$(".jian").click(function(){
	var hh=$(this).next("input").val();
	var a=parseInt(hh);
	a--;
	if (a<=0) {
		a=0
	}
	$(this).next("input").val(a);
})
	

	
	
	
	
