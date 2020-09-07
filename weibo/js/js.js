// JavaScript Document
var i = 0;
var m;
$(".hbut").hide();
//鼠标移入显示 移出隐藏
$("#main").hover(function () {
	$(".hbut").show();
}, function () {
	$(".hbut").hide();
});
//轮播图 
$(document).ready(function () {
	setInterval(function autodo() {
		i++;
		if (i > 5) {
			i = 1
		}
		doit(i);

	}, 1500);
	$(".anvli").hover(function () {
		i = $(this).val();
		doit(i);
	});
	$("#pre").click(function () {
		i--;
		if (i < 0) {
			i = 5
		}
		doit(i);
	});
	$("#next").click(function () {
		i++;
		if (i > 5) {
			i = 1
		}
		doit(i);
	});
});
// 轮播图动画效果
function doit(i) {
	m = -690 * (i - 1);
	$(".anvli").removeClass("navnow");
	$("#navli" + i).addClass("navnow");
	$("#picbox").stop(true, true).animate({
		"left": m + "px"
	}, 700);
}