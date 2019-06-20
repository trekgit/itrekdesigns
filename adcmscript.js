/*  Table of Contents 

01. BULLET NAVIGATION JS
02. MOBILE MENU
03. SCROLL TO TOP BUTTON
04. GALLERY JS
05. Show/Hide Elements (Search, sharing, etc.)
06. STICK FOOTER
07. jQuery Tooltips
08. Timeline Class Additions
09. STICKY HEADER
10. CHECKOUT HOVER
11. FADED HEADER JS
12. PARALLAX JS
13. IMAGE ZOOM WOOCOMMERCE
14. SELET BOX UI
15. FLUID VIDEOS

*/

jQuery(document).ready(function($) {
	 'use strict';
	
	 
/*
=============================================== 01. BULLET NAVIGATION JS  ===============================================
*/
	 $('ul.bullet-navigation-pro').css({
	         'position' : 'fixed',
	         'top' : '50%',
	         'margin-top' : -$('ul.bullet-navigation-pro').outerHeight()/2
	 });
	 $("ul.bullet-navigation-pro>li a").wrapInner("<span></span>");
	 
 	$('ul.bullet-navigation-pro').singlePageNav({
 		offset: $('header.fixed-pro').outerHeight(),
 		currentClass: 'current-one-page-nav',
 		speed:'400'
 	});

	 
/*
=============================================== 02. MOBILE MENU  ===============================================
*/
  	$('ul.mobile-menu-pro').slimmenu({
  	    resizeWidth: '1200',
  	    collapserTitle: 'Menu',
  	    easingEffect:'easeInOutQuint',
  	    animSpeed:'medium',
  	    indentChildren: false,
  		childrenIndenter: '- '
  	});


/*
=============================================== 03. SCROLL TO TOP BUTTON  ===============================================
*/
  	// browser window scroll (in pixels) after which the "back to top" link is shown
  	var offset = 150,
  	
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  	offset_opacity = 1200,
  	
	//duration of the top scrolling animation (in ms)
  	scroll_top_duration = 700,
  	
	//grab the "back to top" link
  	$back_to_top = $('#pro-scroll-top, .home-scroll-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
  		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
  		if( $(this).scrollTop() > offset_opacity ) { 
  			$back_to_top.addClass('cd-fade-out');
  		}
  	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		}, scroll_top_duration
	);
	});


/*
=============================================== 04. GALLERY JS  ===============================================
*/	
    $('.gallery-qube-ezio').flexslider({
		animation: "fade",      
		slideDirection: "horizontal", 
		slideshow: false,         
		slideshowSpeed: 7000,  
		animationDuration: 200,        
		directionNav: true,             
		controlNav: true,
		prevText: "",    
		nextText: "", 
    });
	
/*
=============================================== 05. Show/Hide Elements (Search, sharing, etc.) ===============================================
*/	
	var clickOrTouch = (('ontouchend' in window)) ? 'touchend' : 'click';
	
	$(".mobile-menu-icon-pro").on(clickOrTouch, function(e) {
	   $(".site-header").toggleClass("active-menu-icon-pro");
	});
	
	$(".search-icon-pro").on(clickOrTouch, function(e) {
		$(".site-header").toggleClass("active-pro");
	});
	
	
	
	$("#sidebar-hidden-pro").on(clickOrTouch, function(e) {
		$("#sidebar-hidden-pro").css("pointer-events", "none");
		$("body").toggleClass("show-sidebar-pro");
		$(window).trigger('resize');
		$('#qube-masonry, #portfolio-qube-masonry-1, #portfolio-qube-masonry-2, #portfolio-qube-masonry-3, #portfolio-qube-masonry-4, #portfolio-qube-masonry-5, #portfolio-qube-masonry-6, #qube-masonry-1, #qube-masonry-2, #qube-masonry-3, #qube-masonry-4, #qube-masonry-, #qube-masonry-5, #qube-masonry-6').isotope( 'reloadItems' ).isotope();
		
		setTimeout(function() { $("#sidebar-hidden-pro").css("pointer-events", "auto"); }, 350);
	});
	
	
	$(window).resize(function() {
	  if ($(this).width() > 959) { $('.active-menu-icon-pro #main-nav-mobile').hide(); } 
	});
	

	$('.slick-carousel-item-pro .toggle-button-here, .portfolio-toggle-button-here, .qube-masonry-item .toggle-button-here, .share-page-title-icon, .timeline-pro-heading-fix .toggle-button-here').showhide({ default_open: false });

	$(".nav-below-header .checkout-basket-pro").css('bottom', $(".nav-below-header .checkout-basket-pro").outerHeight() * -1 + 1 + "px");

	
/*
=============================================== 06. STICK FOOTER ===============================================
*/
	$("#footer-header-qube header#masthead-qube.centered-header.default-non-fixed, #footer-header-qube header#masthead-qube.default-header-layout.default-non-fixed, #footer-header-qube header#masthead-qube.full-width-header.default-non-fixed").sticky({});
	
	
	
	
/*
=============================================== 07. jQuery Tooltips ===============================================
*/	
	 $('.tooltip').tooltipster({
	    animation: 'fade',
	    delay: 100,
	    theme: 'tooltipster-light',
	    touchDevices: false,
	    trigger: 'hover'
	 });
	 
	 
/*
=============================================== 08. Timeline Class Additions  ===============================================
*/
	 $(function(){
	    var $this, count = 0, className;
	    $('ul.timeline-layout-pro li').each(function(i){
			$this = $(this);
		   
	        if($this.is(".timeline-year-pro")){
	 		   count = 1;
	        }
	 	   else{
			 
			if(count == 1)  $this.addClass("right-timeline-pro"); 
			
			if (count > 1) { count = 0;  }
			}
			count ++;
			 
	    });
	 });
	 

/*
=============================================== 09. STICKY HEADER  ===============================================
*/
	
		var  $menu = $('header#masthead-qube'),
	    $clone = $menu.clone(true),
	    $window = $(window),
	    top = $menu.offset().top,
	    topDown = top + $menu.height() + 65,
	    currentScroll = 0;
      
	    $clone.addClass('fixed-pro');
		$clone.removeClass('default-non-fixed');
	    $menu.before($clone);

	    $window.scroll(function() {
	      currentScroll = $window.scrollTop();
      
	      if(currentScroll > topDown) {
	        $menu.addClass('invisible-pro');
	        $clone.addClass('visible-pro');
	      } 
      
	      if(currentScroll < topDown) {
	        $menu.removeClass('invisible-pro');
	        $clone.removeClass('visible-pro');
	      }
	    });
	 


/*
=============================================== 10. CHECKOUT HOVER  ===============================================
*/
		
	    var hide = false;
		
		if ($(this).width() > 959) { 
			
	    $(".cart-hover-pro").hover(function(){
	        if (hide) clearTimeout(hide);
	        $(".checkout-basket-pro").fadeIn();
	    }, function() {
	        hide = setTimeout(function() {$(".checkout-basket-pro").fadeOut("slow");}, 250);
	    });
		
	    $(".checkout-basket-pro").hover(function(){
	        if (hide) clearTimeout(hide);
	    }, function() {
	        hide = setTimeout(function() {$(".checkout-basket-pro").fadeOut("slow");}, 250);
	    });
	}


/*
=============================================== 11. FADED HEADER JS  ===============================================
*/
		$(window).scroll(function() {
		    $(".fade-header-qube").css({
		    'opacity' : 1-(($(this).scrollTop())/250)
		    });          
		});
	
/*
=============================================== 12. PARALLAX JS  ===============================================
*/	
	$('.parallax-window').parallax({
	    overScrollFix: true,
		speed: 0.2
	 });

/*
=============================================== 13. IMAGE ZOOM WOOCOMMERCE  ===============================================
*/
	$('.woocommerce-main-image').zoom();
	
/*
=============================================== 14. SELET BOX UI  ===============================================
*/
	$('.widget_categories select, .widget_archive select, #woocommerce-post-page table.variations select, .woocommerce-ordering select').selectric();

/*
=============================================== 15. FLUID VIDEOS  ===============================================
*/

	fluidvids.init({
	  selector: ['iframe', 'object'], // runs querySelectorAll()
	  players: ['www.youtube.com', 'player.vimeo.com'] // players to support
	});

	
	
});