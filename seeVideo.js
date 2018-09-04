/**
 * video auto paly
 * anthor: andot
 * date: 2018-3-31 14:36:57
 */

document.getElementsByClassName("am-topbar-brand")[0].innerHTML = "<div style='line-height:68px; color:#F00;'>当前页面已使用蚁点视频自动播放插件";

console.log("蚁点视频自动播放插件开始工作");
try {
	jwplayer(0).play(true);
	var inter = setInterval(inters, 1000);
	function inters(){
		var state = jwplayer().getState();
		console.log(state);
		if(state == "complete"){
			var nextVideo = $(".active").attr("title");
			console.log("视频播放完成");
			$(".cell_info").each(function(){
				console.log($(this).find("a").attr("class"));
				if($(this).find("a").attr("class") == "active"){
					console.log("准备播放下一个视频");
					console.log($(this).parents(".tr_topic").next().find(".cell_info").text());
					$(this).parents(".tr_topic").next().find(".cell_info").click();
					
					var nowVideo = $(".active").attr("title");
					if(nextVideo == nowVideo){
						console.log("此视频到了一个小单元最后，应该进入下一个单元");
						$(this).parents(".sh-toc3").next().next().find(".cell_info")[0].click();
					}
					jwplayer(0).play(true);
					console.log($(".active").attr("title")+"视频下一个开始播放");
					return false;
				}  
				//console.log($(this).html());
			});
		}else if(state == "playing")
			console.log($(".active").attr("title")+"视频正在播放");
	}
} catch (error) {
	console.log("此页面不会使用插件"+error);
}

	//document.getElementById("buttonDiv").onclick = function(){}
