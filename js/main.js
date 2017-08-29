//页面加载完毕后执行
$(function(){
		var objDemo = document.getElementById("demo");
        var objSmallBox = document.getElementById("small-box");
        var objMark = document.getElementById("mark");
        var objFloatBox = document.getElementById("float-box");
        var objBigBox = document.getElementById("big-box");
        var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

        objMark.onmouseover = function () {
            objFloatBox.style.display = "block";
            objBigBox.style.display = "block";
        }

        objMark.onmouseout = function () {
            objFloatBox.style.display = "none";
            objBigBox.style.display = "none";
        }

        objMark.onmousemove = function (ev) {

            var _event = ev || window.event;  //兼容多个浏览器的event参数模式

            var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
            var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop + objFloatBox.offsetHeight / 2;

            if (left < 0) {
                left = 0;
            } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
                left = objMark.offsetWidth - objFloatBox.offsetWidth;
            }

            if (top < 0) {
                top = 0;
            } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
                top = objMark.offsetHeight - objFloatBox.offsetHeight;

            }

            objFloatBox.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
            objFloatBox.style.top = top + "px";

            var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
            var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);

            objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
            objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
        }	
        
//      切换图片
		$('.productBox_left_small_img li').mouseover(function(){
			var num=$(this).index();
			$('.product .container .productBox_left .productBox_left_small_img li img').removeClass('active');
			
			$($('.product .container .productBox_left .productBox_left_small_img li img')[num]).addClass('active');
			
			var arr=['TB2q0GIbrBmpuFjSZFuXXaG_XXa_!!2616970884.jpg_430x430q90.jpg','TB2Iv7carplpuFjSspiXXcdfFXa_!!2616970884.jpg_430x430q90.jpg','TB2rOXgdmKI.eBjy1zcXXXIOpXa_!!2616970884.jpg_430x430q90.jpg','TB2Avk9c9iJ.eBjSspfXXbBKFXa_!!2616970884.jpg_430x430q90.jpg','TB2q0GIbrBmpuFjSZFuXXaG_XXa_!!2616970884.jpg_430x430q90.jpg'];
			
			var arr1=['TB115c4OVXXXXa1XXXXXXXXXXXX_!!0-item_pic.jpg','TB2Iv7carplpuFjSspiXXcdfFXa_!!2616970884.jpg','TB2rOXgdmKI.eBjy1zcXXXIOpXa_!!2616970884.jpg','','TB2q0GIbrBmpuFjSZFuXXaG_XXa_!!2616970884.jpg'];
//			$('.productBox_left_small_img li')[num];
//			console.log($($('.productBox_left_small_img li')[num]).children()[0].currentSrc='');
			$('#small-box img').attr('src','img/'+arr[num]);
			$('#big-box img').attr('src','img/'+arr1[num]);
			if(arr1[num]=='')
			{
				$('#big-box img').css('display','none');
				$('#mark').css('display','none');
			}else
			{
				$('#big-box img').css('display','block');
				$('#mark').css('display','block');
			}
		});
//		数量框控制器
		$('.top').click(function(){
			$('#countProduct').val(parseInt($('#countProduct').val())+1);
		});
		$('.down').click(function(){
			if($('#countProduct').val()>1)
			{
				$('#countProduct').val(parseInt($('#countProduct').val())-1);
			}

		});
		$('.productBox_right_information .item .chanceBoxItem').click(function(){
			$($(this).parent().children()).removeClass('active');
			$(this).addClass('active');
		});
		$('.product .container .productBox_right .productBox_right_information .proviceItem em').click(function(){
			if($('.product .container .productBox_right .productBox_right_information .proviceItem em .shopBox').css('display')=='none')
			{
				$('.product .container .productBox_right .productBox_right_information .proviceItem em .shopBox').css('display','block');
				$('.product .container .productBox_right .icon-down').addClass('icon-top').removeClass('icon-down');
				
			}else
			{
				$('.product .container .productBox_right .productBox_right_information .proviceItem em .shopBox').css('display','none');
				$('.product .container .productBox_right .icon-top').addClass('icon-down').removeClass('icon-top');
				
			}

		});
});

var maxHeight=$('#img_bag #productBarBoxImg ul').height();//滚动图片的最大高度
var targety = document.getElementById("productBarBoxImg").getElementsByTagName("ul")[0].getElementsByTagName("li").length*2;//一次滚动距离
var dx;
var a=null;
function moveTop(){
 var le=parseInt(document.getElementById("productBarBoxImg").scrollTop);
 if(le>document.getElementById("productBarBoxImg").getElementsByTagName("ul")[0].getElementsByTagName("li").length*2){
  targety=parseInt(document.getElementById("productBarBoxImg").scrollTop)-902;
 }else{
  targety=parseInt(document.getElementById("productBarBoxImg").scrollTop)-le-1;
 }
 scTop(true);
}

function scTop(){
dx=parseInt(document.getElementById("productBarBoxImg").scrollTop)-targety;
document.getElementById("productBarBoxImg").scrollTop-=dx*.3;
 clearScroll=setTimeout(scTop,50);
 if(dx*.3<1){
  clearTimeout(clearScroll);
 }
}
function moveBottom(){
 var le=parseInt(document.getElementById("productBarBoxImg").scrollTop)+902;
 var maxL=maxHeight-600;
 if(le<maxL){
  targety=parseInt(document.getElementById("productBarBoxImg").scrollTop)+902;
 }else{
  targety=maxL
 }
 scBottom();
}
function scBottom(){
 dx=targety-parseInt(document.getElementById("productBarBoxImg").scrollTop);
document.getElementById("productBarBoxImg").scrollTop+=dx*.3;
 a=setTimeout(scBottom,50);
 if(dx*.3<1){
  clearTimeout(a)
 }
}
var maxHeight1=document.getElementById("img").getElementsByTagName("ul")[0].getElementsByTagName("li").length*450;//滚动图片的最大高度
var targety1 = 180//一次滚动距离
var dx1;
var a1=null;
function moveTop1(){
 var le=parseInt(document.getElementById("img").scrollTop);
 if(le>180){
  targety1=parseInt(document.getElementById("img").scrollTop)-180;
 }else{
  targety1=parseInt(document.getElementById("img").scrollTop)-le-1;
 }
 scTop1();
}
function scTop1(){
 dx1=parseInt(document.getElementById("img").scrollTop)-targety1;
 document.getElementById("img").scrollTop-=dx1*.3;
 clearScroll=setTimeout(scTop1,50);
 if(dx1*.3<1){
  clearTimeout(clearScroll);
 }
}
function moveBottom1(){
 var le=parseInt(document.getElementById("img").scrollTop)+180;
 var maxL=maxHeight1-540;
 if(le<maxL){
  targety1=parseInt(document.getElementById("img").scrollTop)+180;
 }else{
  targety1=maxL
 }
 scBottom1();
}
function scBottom1(){
 dx1=targety1-parseInt(document.getElementById("img").scrollTop);
document.getElementById("img").scrollTop+=dx1*.3;
 a1=setTimeout(scBottom1,50);
 if(dx1*.3<1){
  clearTimeout(a1)
 }
}
/*
 * 右边固定导航条
 */
$(function(){
	$(".quick_links_panel li").mouseenter(function(){
		$(this).children(".mp_tooltip").animate({left:-92,queue:true});
		$(this).children(".mp_tooltip").css("visibility","visible");
		$(this).children(".ibar_login_box").css("display","block");
	});
	$(".quick_links_panel li").mouseleave(function(){
		$(this).children(".mp_tooltip").css("visibility","hidden");
		$(this).children(".mp_tooltip").animate({left:-121,queue:true});
		$(this).children(".ibar_login_box").css("display","none");
	});
	$(".quick_toggle li").mouseover(function(){
		$(this).children(".mp_qrcode").show();
	});
	$(".quick_toggle li").mouseleave(function(){
		$(this).children(".mp_qrcode").hide();
	});
	//点击苏宁易购自提点，显示内容
	$(".threecolcontainer .threecol-middle .suning").click(function(){
		$(".addressphone").toggle();
	});
	$(".suning1").click(function(){
		$(".addressphone1").toggle(0);
	});
				

// 元素以及其他一些变量
var eleFlyElement = document.querySelector("#flyItem"), eleShopCart = document.querySelector("#shopCart");
var numberItem = 0;
// 抛物线运动
var myParabola = funParabola(eleFlyElement, eleShopCart, {
	speed: 400, //抛物线速度
	curvature: 0.0008, //控制抛物线弧度
	complete: function() {
		eleFlyElement.style.visibility = "hidden";
		eleShopCart.querySelector("span").innerHTML = ++numberItem;
	}
});
// 绑定点击事件
if (eleFlyElement && eleShopCart) {
	
	[].slice.call(document.getElementsByClassName("btnCart")).forEach(function(button) {
		button.addEventListener("click", function(event) {
			// 滚动大小
			var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
			    scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
			eleFlyElement.style.left = event.clientX + scrollLeft + "px";
			eleFlyElement.style.top = event.clientY + scrollTop + "px";
			eleFlyElement.style.visibility = "visible";
			
			// 需要重定位
			myParabola.position().move();			
		});
	});
}

//文本框点击颜色变化???
	$(function(){
		$("header .text input").click(function(){
			$(this).css("color","#a2a2a2");
		});
		
	});
});

/*
 * 自由搭配勾选框实现
 */
(function($){
		$('#checkbox-red img').click(function(){
			$(this).attr('src',$(this).attr('src')=='img/checkbox-red.png'?'img/checkbox.png':'img/checkbox-red.png');
		});
})(jQuery);
(function($){
		$('#checkbox img').click(function(){
			$(this).attr('src',$(this).attr('src')=='img/checkbox.png'?'img/checkbox-red.png':'img/checkbox.png');
		});
})(jQuery);



(function() {
				var navWrap = document.getElementById("side_nav");
				var nav1s = navWrap.getElementsByClassName("img-plus");
				var nav2s = navWrap.getElementsByClassName("fst-cat-bd");
				for(var i = 0, len = nav1s.length; i < len; i++) {
					nav1s[i].onclick = (function(i) {
						return function() {
							if(nav2s[i].style.display == "block")
								nav2s[i].style.display = "none";
							else
								nav2s[i].style.display = "block";
						}
					})(i)
				}
			})()
			
			
			
var tabli=$(".box ul li");
			var taba=$(".box ul li a");
			var tabBoxs=$(".tabBox1");
			var i=0;
			function changetab(i){
				for(j=0;j<tabli.length;j++){
					if(j==i){
						tabli.eq(i).css("border-top","2px solid #b00000");
						tabli.eq(i).css("border-left","1px solid #cfbfb1");
			            tabli.eq(i).css("border-right", "1px solid #cfbfb1");
			            tabli.eq(i).css("font-weight","700");
			            taba.eq(i).css("color"," #b10000");
			            taba.eq(i).css
				        tabBoxs.eq(j).css("display","block");
					}
					else {
						tabli.eq(j).css("border-top","none");
						tabli.eq(j).css("border-left","none");
			            tabli.eq(j).css("border-right", "none");
			            tabli.eq(j).css("font-weight","300");
			            taba.eq(j).css("color"," #000");
				        tabBoxs.eq(j).css("display","none");
					}
				}
			}	
	

//选项卡吸顶
//	搜索框对象
	var height=1708;
	//	监听事件
	window.onscroll = function() {

		var top = document.body.scrollTop;
		
		//		当滚动高度大于banner的高度的时候
		if (top + 30 > height) {
			$('.threecolcontainer .threecol-middle .box').css('position','fixed').css('left','300').css('top','0');

		} else {
			$('.threecolcontainer .threecol-middle .box').css('position','static');
			
		}
	};