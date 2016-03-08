$(document).ready(function(){
	var offset = 300;
	var duration = 2000;
	var w = $(window).width();
	var menuIcon = $('.menu-mbl');
	var menu = $('nav');
	var prevScroll = 0;
	var loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 150 } );
	$('a[href*=#]:not([href=#])').click(function() {
		//close menu after click on nav
		if( menuIcon.is(":visible") ) {
			event.preventDefault();
			menuIcon.removeClass('menu-close');
			menu.fadeOut(300);
			$("html").css('overflow', 'initial');
		}
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, duration, 'easeOutQuint');
				return false;
			}
		}
	});
	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration, 'easeOutQuint');
		return false;
	});
	//onload
	$(window).load(function() {
		$(".preloader-i").fadeOut("slow");
		$("#preloader").delay(350).fadeOut(800,"swing");
		$('body').delay(700).css({'overflow':'visible'});
	})
	//onscroll
	$(window).scroll(function(){
		prevScroll = $(this).scrollTop();
		//back to top display none in mobile
		if ( menuIcon.is(":hidden") ) {
			if ( $(this).scrollTop() > offset ) {
				$('.back-to-top').fadeIn(duration);
			} else {
				$('.back-to-top').fadeOut(duration);
			}
		}
		//menuIcon changed color when surpass window height in mobile
		if ( menuIcon.is(":visible") ) {
			if ( $(this).scrollTop() > $(window).height() ) {
				$('.logo-i').fadeOut(300);
				$('.menu-mbl span').css('background-color','#000');
				menu.css('background-color','rgba(255,255,255,0.9)');
				$('nav a').css('color','#000');
			}else{
				$('.logo-i').fadeIn(300);
				// $('.menu-mbl span').removeAttr('style');
				$('.menu-mbl span').css('background-color','#fff');
				menu.css('background-color','rgba(0,0,0,0.9)');
				$('nav a').css('color','#fff');
			}
		}
	});
	//onresize
	$(window).resize(function(){
		//back to top display on desktop/hide in mobile
		if ( menuIcon.is(":hidden") ) {
			if ( $(this).scrollTop() > offset ) {
				$('.back-to-top').fadeIn(duration);
			} else {
				$('.back-to-top').fadeOut(duration);
			}
		}else{
			$('.back-to-top').fadeOut(duration);
		}
		//menuIcon color changed if > window height
		if ( menuIcon.is(":visible") ) {
			if ( $(this).scrollTop() > $(window).height() ) {
				$('.menu-mbl span').css('background-color','#000');
			} else {
				$('.menu-mbl span').removeAttr('style');
			}
		}
		//remove any style on nav in desktop
		if ( menuIcon.is(":hidden") ) {
			menu.removeAttr('style');
			$('nav a').removeAttr('style');
			$('.logo-i').removeAttr('style');
		}
	});
	//disable scrolling in mobile
	menu.bind("touchmove",function(event){
		event.preventDefault();
	});
	$("#preloader").bind("touchmove",function(event){
		event.preventDefault();
	});
	menuIcon.click(function(){
		menu.fadeToggle();
		if( menuIcon.hasClass('menu-close') ) {
			// close menu
			menuIcon.removeClass('menu-close');
			$("html").css('overflow', 'initial');
		}else{
			// open menu
			menuIcon.addClass('menu-close');
			$("html").css('overflow', 'hidden');
		}
		// $('.logo-i').removeAttr('style');
		// $('.menu-mbl span').removeAttr('style');
		
		// if ( $(this).scrollTop() > $(window).height() ) {
		// 	$('.logo-i').css('fill','#000');
		// 	$('.menu-mbl span').css('background-color','#000');
		// }else{
		// 	$('.logo-i').css('fill','#fff');
		// 	$('.menu-mbl span').css('background-color','#fff');
		// }
		// if( $(this).scrollTop() > $(window).height() && menu.is(':visible') ){
		// 	console.log('black');
		// 	$('.logo-i').css('fill','#000');
		// 	$('.menu-mbl span').css('background-color','#000');
		// }
	});
	$('.workLink').click(function(){
		loader.show();
		$('body').css({'overflow':'hidden'});
		$(".preloader-i").fadeIn("slow");
		switch(true)
		{
			case $(this).is('#work1'):
				setTimeout( function() {
					window.location = "lexus-invitational.html";
				}, 2000 );
				break;
			case $(this).is('#work2'):
				setTimeout( function() {
					window.location = "toyota-hybrid-lab.html";
				}, 2000 );
				break;
			case $(this).is('#work3'):
				setTimeout( function() {
					window.location = "toyota-hilux-urban-hero.html";
				}, 2000 );
				break;
			case $(this).is('#work4'):
				setTimeout( function() {
					window.location = "toyota-new-camry.html";
				}, 2000 );
				break;
			case $(this).is('#work5'):
				setTimeout( function() {
					window.location = "friso-batch-tracker.html";
				}, 2000 );
				break;
			case $(this).is('#work6'):
				setTimeout( function() {
					// window.location = "toyota-cny-2015.html";
					window.location = "smartmoments-haiwan-ladang-yang-comel.html";
				}, 2000 );
				break;
			case $(this).is('#work7'):
				setTimeout( function() {
					window.location = "toyota-resolution-driver.html";
				}, 2000 );
				break;
			case $(this).is('#work8'):
				setTimeout( function() {
					window.location = "kevin-yap-2014.html";
				}, 2000 );
				break;
			case $(this).is('#work9'):
				setTimeout( function() {
					window.location = "mini-means-business.html";
				}, 2000 );
				break;
		}
	})
	$('.projectNav').click(function(){
		loader.show();
		$('body').css({'overflow':'hidden'});
		$(".preloader-i").fadeIn("slow");
		switch(true)
		{
			case $(this).is('#mainPage'):
				setTimeout( function() {
					window.location = "index.html";
				}, 2000 );
				break;
			case $(this).is('#projectNavAbout'):
				setTimeout( function() {
					window.location = "index.html#about";
				}, 2000 );
				break;
			case $(this).is('#projectNavProject'):
				setTimeout( function() {
					window.location = "index.html#project";
				}, 2000 );
				break;
			case $(this).is('#projectNavContact'):
				setTimeout( function() {
					window.location = "index.html#contact";
				}, 2000 );
				break;
		}
	})
	$('.odd').mouseover(function(){
		$('.work').addClass('work-white');
	})
	$('.odd').mouseout(function(){
		$('.work').removeClass('work-white');
	})
	$('.even').mouseover(function(){
		$('.work').addClass('work-black');
	})
	$('.even').mouseout(function(){
		$('.work').removeClass('work-black');
	})
	// $('#backToMain').click(function(){
	// 	loader.hide();
	// 	classie.removeClass( pages[ currentPage ], 'show' );
	// 	// update..
	// 	currentPage = currentPage ? 0 : 1;
	// 	classie.addClass( pages[ currentPage ], 'show' );
	// });

	// $('.pageload-link').click(function(){
	// 	$('body').css({'overflow':'hidden'});
	// 	loader.show();
	// 	$('#main_content').delay(200).hide();
	// 	setTimeout( function(){
	// 		$('#page-2').load("invitational_golf.html", function(){
	// 			$('body').css({'overflow':'visible'});
	// 			loader.hide();
	// 		});
	// 	}, 2000 );
	// })

	// $('#back_to_main').click(function(){
	// 	console.log('test');
	// 	$('body').css({'overflow':'hidden'});
	// 	loader.show();
	// 	$('#invitational_golf').delay(150).hide();
	// 	setTimeout( function(){
	// 		loader.hide();
	// 		$('#main_content').show();
	// 	}, 2000 );
	// })
});