//等文档加载完后执行js
$(function() {
	//	获取屏幕的宽高
	var nowpage = 0;
	var width = window.innerWidth;
	var hegiht = window.innerHeight;
	$(".content").width(width);
	$(".content").height(4 * hegiht);
	$(".page").width(width);
	$(".page").height(hegiht);
	//不是js原生代码
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,figercount){
			console.log(direction);
			if(direction=="up"){
				nowpage++;
			}
			if(direction=="down"){
				nowpage--;
			}
			if(nowpage<0){
				nowpage=0
			}else if(nowpage>3){
				nowpage=3;
			}
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
				if(nowpage==1){
					$(".page2-wasFarm").fadeIn(2000,function(){
						  $(".page2-wasIt").fadeIn(2000)
					})
				}
				if(nowpage==2){
					$(".page3-earlytitle").fadeIn(2000);
					$(".page3-bustitle").fadeIn(3000);
					$(".page3-bus").animate({left:"-100%"},{duration:2000})
					$(".page3-busavatar").animate({right:"60%"},{duration:4000,complete:function(){
						$(".page3-bus").fadeOut("slow");
						$(".page3-busavatar").fadeOut("slow");
						$(".page3-busstation").fadeOut("slow");
						$(".page3-bustitle").fadeOut("slow");
						$(".page3-earlytitle").fadeOut("slow",function(){
							$(".page3-myTeamWall").fadeIn("slow");
							$(".page3-myteamavatar").fadeIn("slow",function(){
								$(".page3-myTeamSpace").animate({width:"20%"},{duration:400,complete:function(){
									$(".page3-myteamWhereTxt").animate({width:"20%"},{duration:400})
								}})
							});
							
						});
					}})
				}
				if(nowpage==3){
					$(".page4-lightOff").click(function(){
						$(this).attr("src","img/lightOn.png");
						$(".page4-lightOffBg").fadeOut("slow");
						$(".page4-cornerTitle").fadeOut("slow");
						$(".page4-clickGuide").fadeOut("slow",function(){
							$(".page4-lightOnBg").fadeIn("slow");
						    $(".page4-lightOn").fadeIn("slow");
						    $(".page4-weKnowYou").fadeIn("slow");
						});
						
						
					})
				}
			}})
		}
	});
	
	$(".page1-Builiding").fadeIn(400,function(){
		$(".page1-Flight").animate({width:"80%"},{duration:2000})
	});
	
})