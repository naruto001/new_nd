$( function () {
	$('#fullpage').fullpage( {
		anchors:['page1','page2','page3','page4','page5','page6'],
		menu:'#menu',
		
		//滚动到某一屏后的回调函数，
		//接收 anchorLink 和 index 两个参数，
		//anchorLink 是锚链接的名称，
		//index 是序号，从1开始计算
		afterLoad:function (anchorLink,index) {
			if(index==1) {
				$('.nav').removeAttr('id');
			}else {
				$('.nav').attr('id','tp');
			}
		}
	} );

	//轮播图
	var slide_pic = [170, 568, 830,568];
	$('.slide_pic').slide({
		titCell:".hd ul li",
		mainCell:".bd ul",
		mouseOverStop:true,
		effect:"fold",
		trigger:"mouseover",
		autoPlay:true,
		interTime:5000,
		delayTime:300,
		startFun:function (i,c) {

			for(var j=0; j<4; j++) {
				$('.pic'+j+'_img').stop(true,true);
				$('.pic'+j+'_txt').stop(true,true);
				$('.pic' + j + '_img').removeAttr('style');
				$('.pic' + j + '_txt').removeAttr('style');
			};

			$('.pic'+i+'_img').animate({
				left:'0',
				opacity:'1'
			},900);
			$('.pic'+i+'_txt').animate({
				left:slide_pic[i],
				opacity:'1'
			},900 );
		}
	})
} )