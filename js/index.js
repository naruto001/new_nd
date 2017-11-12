$( function () {
	$('#fullpage').fullpage( {
		scrollingSpeed:'1500',
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
	/*var slide_pic = [170, 568, 830,568]; */
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

			for(var j=0; j<3; j++) {
				$('.pic'+j+'_img').stop(true,true);
				$('.pic'+j+'_txt').stop(true,true);
				$('.pic'+j+'_a').stop(true,true);
				$('.pic'+j+'_b').stop(true,true);
				$('.pic'+j+'_c').stop(true,true);
				$('.pic'+j+'_d').stop(true,true);
				$('.pic'+j+'_e').stop(true,true);
				$('.pic'+j+'_f').stop(true,true);
				$('.pic'+j+'_g').stop(true,true);
				$('.pic'+j+'_h').stop(true,true);
				$('.pic'+j+'_i').stop(true,true);
				$('.pic'+j+'_j').stop(true,true);
				$('.pic'+j+'_k').stop(true,true);
				$('.pic' + j + '_img').removeAttr('style');
				$('.pic' + j + '_txt').removeAttr('style');
				$('.pic' + j + '_a').removeAttr('style');
				$('.pic' + j + '_b').removeAttr('style');
				$('.pic' + j + '_c').removeAttr('style');
				$('.pic' + j + '_d').removeAttr('style');
				$('.pic' + j + '_e').removeAttr('style');
				$('.pic' + j + '_f').removeAttr('style');
				$('.pic' + j + '_g').removeAttr('style');
				$('.pic' + j + '_h').removeAttr('style');
				$('.pic' + j + '_i').removeAttr('style');
				$('.pic' + j + '_j').removeAttr('style');
				$('.pic' + j + '_k').removeAttr('style');
			};

			$('.pic0_img').animate({
				left:'42px',
				bottom:'28px',
				opacity:'1'
			},900);
			$('.pic0_a').animate({
				left:'162px',
				bottom:'128px',
				opacity:'1'
			},1000);
			$('.pic0_b').animate({
				left:'280px',
				bottom:'105px',
				opacity:'1'
			},2000);
			$('.pic0_c').animate({
				left:'360px',
				bottom:'72px',
				opacity:'1'
			},3000);
			$('.pic0_d').animate({
				left:'500px',
				bottom:'46px',
				opacity:'1'
			},3000);
			$('.pic0_txt').animate({
				left:'40px',
				top:'20px',
				opacity:'1'
			},3000 );
			$('.pic0_e').animate({
				left:'210px',
				top:'29px',
				opacity:'1'
			},3000);
			$('.pic0_f').animate({
				left:'369px',
				top:'89px',
				opacity:'1'
			},3000);
			$('.pic0_g').animate({
				left:'498px',
				top:'140px',
				opacity:'1'
			},3000);
			$('.pic0_h').animate({
				left:'331px',
				top:'18px',
				opacity:'1'
			},3000);
			$('.pic0_i').animate({
				right:'-40px',
				bottom:'-110px',
				opacity:'1'
			},2000);
			$('.pic0_j').animate({
				right:'0',
				top:'60px',
				opacity:'1'
			},3000);
			$('.pic0_k').animate({
				left:'463px',
				top:'27px',
				opacity:'1'
			},3000);

			//pic02
			$('.pic1_img').animate({
				left:'0px',
				top:'0',
				opacity:'1'
			},900);
			$('.pic1_txt').animate({
				left:'0px',
				bottom:'0px',
				opacity:'1'
			},3000 );
			
			$('.pic1_a').animate({
				right:'0px',
				top:'80px',
				opacity:'1'
			},2000);
			
			
			
		}
	})
} )