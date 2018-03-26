;(function($) {

/* --------------- Main slider --------------- */
	$('#main-slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
	});

/* --------------- MASONRY GRID --------------- */
	$(window).on('load', function () {
		$('.grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: 10,
		});
	});


/* --------------- ARTICLE-NAV --------------- */
	$( ".input" ).focus(function() {
		$(this).parent().find('.input-label, .error').addClass('active');
	});

	$( ".input" ).blur(function() {
		var inputVal = $(this).val();
		if (!inputVal) {
			$(this).parent().find('.input-label, .error').removeClass('active');
		}
	});

	$('.nav__mobile-btn').on ('click', function(){
		$("body").addClass("menu_active");
		$(".menu_mask").css ({'display':'block'});
		$(".menu_mask").animate ({opacity:0.3}, 400);
	});

	$('#menu_close, .menu_mask').on ('click', function(){
		$("body").removeClass("menu_active");
		$(".menu_mask").animate ({opacity:0}, 400, function(){
			$(".menu_mask").css ({'display':'none'});
		});
	});

/* --------------- ACCORDEON --------------- */
	$('.accordeon_trigger').click (function(e) {
		e.preventDefault();

		var $this = $(this),
		item = $this.closest('.accordeon_item'),
		list = $this.closest('.accordeon_list'),
		items = list.find('.accordeon_item'),
		content = item.find('.accordeon_inner'),
		otherContent = list.find('.accordeon_inner'),
		duration = 300;

		if (!item.hasClass('active')) {
			items.removeClass('active');
			item.addClass('active')

			otherContent.stop(true, true).slideUp(duration);
			content.stop(true, true).slideDown(duration);
		} else {
			content.stop(true, true).slideUp(duration);
			item.stop(true, true).removeClass('active');
		}
	});


/* --------------- DROPDOWN --------------- */
	$('.dropdown-button1').click(function() {
	  	if (!$(this).hasClass('show')) {
		    $('#dropdown1').stop(true, false).slideDown(300);
		    $(this).addClass('show');
		}
		else {
			$('#dropdown1').stop(true, false).slideUp(200);
			$(this).removeClass('show');
		}
	});

	$('.dropdown-button2').click(function() {
	  	if (!$(this).hasClass('show')) {
		    $('#dropdown2').stop(true, false).slideDown(300);
		    $(this).addClass('show');
		}
		else {
			$('#dropdown2').stop(true, false).slideUp(200);
			$(this).removeClass('show');
		}
	});

	$(document).mouseup(function (e){ 
        var div = $(".dropdown-button1"); 
        if (!div.is(e.target)
            && div.has(e.target).length === 0) { 
            $('#dropdown1').stop(true, false).slideUp(200);
			$(this).removeClass('show');
			$('.dropdown-button1').removeClass('show'); 
        }
    });
    $(document).mouseup(function (e){ 
        var div = $(".dropdown-button2"); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) { 
            $('#dropdown2').stop(true, false).slideUp(200);
			$(this).removeClass('show');
			$('.dropdown-button2').removeClass('show');
        }
    });

/* --------------- WEATHER TABS --------------- */
	$('#monday').show();
	$('#tabs-weather').on('click', '.days-list__item', function(e) {
		e.preventDefault();

		$('#tabs-weather .active').removeClass('active');
		$(this).addClass('active');
		var tab = $(this).attr('href');
		$('.article-weather__day').hide();
		$(tab).show();
	});

	$('#article-weather').on('click', '.temp-format__item', function () {
		$(this).parent().find('.temp-format__item').removeClass('active');
		$(this).addClass('active');
		if ( $(this).hasClass('cesium') ) {
			$(this).closest('.article-weather__day').find('.day-main__temp .num').removeClass('active');
			$(this).closest('.article-weather__day').find('.day-main__temp .num.cesium').addClass('active');
		} else {
			$(this).closest('.article-weather__day').find('.day-main__temp .num').removeClass('active');
			$(this).closest('.article-weather__day').find('.day-main__temp .num.fahrenheit').addClass('active');
		}
	});


/* --------------- CALENDAR --------------- */
	$('#datepicker').datepicker({
		dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		firstDay: 1
	});



	$("#double-range").ionRangeSlider({
		type: "double",
	    min: 0,
	    max: 100,
	    from: 25,
	    to: 75,
	    hide_min_max: true,
	});

	$("#single-range").ionRangeSlider({
	    min: 0,
	    max: 100,
	    from: 25,
	    to: 75,
	    hide_min_max: true,
	});
})(jQuery);

/* --------------- REGISTRATION FORM --------------- */
	$("#reg-form").validate({
		rules: {
			username: 'required',
			password: 'required',
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			username: 'Please specify your name',
			password: 'Please specify password',
			email: 'Please use correct email format'
		}
	});