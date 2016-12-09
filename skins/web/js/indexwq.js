// JavaScript Document

/*关于我们*/
$(function(){
	
	$(".banner").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    effect: "fold",
    autoPlay: true,
    autoPage: true,
    trigger: "click",
    startFun: function(i) {
        var curLi = jQuery(".banner .bd li").eq(i);
        if ( !! curLi.attr("_src")) {
            curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
        	}
    	}
	});
	
	
	$(".main4_list ul li").hover(function(){
		var t=$(".main4_list ul li").index(this);
		$(".main4_list ul li").removeClass("on").eq(t).addClass("on").stop(true,false).animate({"top":"-4px"},500);
		
		$(".main4_list ul li h4 a").removeClass("on").eq(t).addClass("on");
		},function(){
			$(".main4_list ul li").removeClass("on").stop(true,false).animate({"top":"0px"},100);;
			$(".main4_list ul li h4 a").removeClass("on");
			})
	/*侧栏广告*/
	var h=$(window).height();
	var h1=h*0.3;
 	/*侧栏广告*/
 	$("#side").css({"top":h1+"px"});
	$(".side_gb").click(function(){
		$("#side").css({"display":"none"});
		
		})
	})