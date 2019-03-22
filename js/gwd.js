$(function(){
    function setRem(){
        var clientWidth=$(window).width();
        var nowRem=(clientWidth/375*10);
        $("html").css("font-size",parseInt(nowRem, 10)+"px");
    };
    setRem();
	
    $(function(){
        var timer;
        $(window).bind("resize",function(){
            clearTimeout(timer)
            timer=setTimeout(function(){
                setRem();
            }, 100)
        })
    });
    var flag=true;
	$(".wdtznz").on("swipeleft",function(){
		if (flag) {
			$(this).children("ul").animate({"right":0+"rem"});
			flag=false;
		}
		
	    
	});  
	 $(".wdtznz").on("swiperight",function(){
	 	if (flag==false) {
	 		$(this).children("ul").animate({"left":0+"rem"});
	 		 flag=true;
	 	}
	});
	
	
	
	
	
	
	
	
	
	

});