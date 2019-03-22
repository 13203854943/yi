<script type="text/javascript">
		$(function(){
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
		});
		
		         var index=0;
            var withd=$(".fs-2").width();
              var dong=null;      
           dong= (function(){             	
             	index=index> 1? 0:index;
             	$(".fs-2>ul>li").stop().animate({left:-withd*index},500)
            });
            var shi=setInterval(function(){
            	index++;
            	dong();
            },1000);
     
		})
	</script>