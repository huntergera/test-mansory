!function(r){r("#main-slider").slick({dots:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<div class="slick-prev"></div>',nextArrow:'<div class="slick-next"></div>'}),r(window).on("load",function(){r(".grid").masonry({itemSelector:".grid-item",columnWidth:10})}),r(".input").focus(function(){r(this).parent().find(".input-label, .error").addClass("active")}),r(".input").blur(function(){r(this).val()||r(this).parent().find(".input-label, .error").removeClass("active")}),r(".nav__mobile-btn").on("click",function(){r("body").addClass("menu_active"),r(".menu_mask").css({display:"block"}),r(".menu_mask").animate({opacity:.3},400)}),r("#menu_close, .menu_mask").on("click",function(){r("body").removeClass("menu_active"),r(".menu_mask").animate({opacity:0},400,function(){r(".menu_mask").css({display:"none"})})}),r(".accordeon_trigger").click(function(e){e.preventDefault();var s=r(this),a=s.closest(".accordeon_item"),t=s.closest(".accordeon_list"),i=t.find(".accordeon_item"),o=a.find(".accordeon_inner"),n=t.find(".accordeon_inner");a.hasClass("active")?(o.stop(!0,!0).slideUp(300),a.stop(!0,!0).removeClass("active")):(i.removeClass("active"),a.addClass("active"),n.stop(!0,!0).slideUp(300),o.stop(!0,!0).slideDown(300))}),r(".dropdown-button1").click(function(){r(this).hasClass("show")?(r("#dropdown1").stop(!0,!1).slideUp(200),r(this).removeClass("show")):(r("#dropdown1").stop(!0,!1).slideDown(300),r(this).addClass("show"))}),r(".dropdown-button2").click(function(){r(this).hasClass("show")?(r("#dropdown2").stop(!0,!1).slideUp(200),r(this).removeClass("show")):(r("#dropdown2").stop(!0,!1).slideDown(300),r(this).addClass("show"))}),r(document).mouseup(function(e){var s=r(".dropdown-button1");s.is(e.target)||0!==s.has(e.target).length||(r("#dropdown1").stop(!0,!1).slideUp(200),r(this).removeClass("show"),r(".dropdown-button1").removeClass("show"))}),r(document).mouseup(function(e){var s=r(".dropdown-button2");s.is(e.target)||0!==s.has(e.target).length||(r("#dropdown2").stop(!0,!1).slideUp(200),r(this).removeClass("show"),r(".dropdown-button2").removeClass("show"))}),r("#monday").show(),r("#tabs-weather").on("click",".days-list__item",function(e){e.preventDefault(),r("#tabs-weather .active").removeClass("active"),r(this).addClass("active");var s=r(this).attr("href");r(".article-weather__day").hide(),r(s).show()}),r("#article-weather").on("click",".temp-format__item",function(){r(this).parent().find(".temp-format__item").removeClass("active"),r(this).addClass("active"),r(this).hasClass("cesium")?(r(this).closest(".article-weather__day").find(".day-main__temp .num").removeClass("active"),r(this).closest(".article-weather__day").find(".day-main__temp .num.cesium").addClass("active")):(r(this).closest(".article-weather__day").find(".day-main__temp .num").removeClass("active"),r(this).closest(".article-weather__day").find(".day-main__temp .num.fahrenheit").addClass("active"))}),r("#datepicker").datepicker({dayNamesMin:["S","M","T","W","T","F","S"],firstDay:1}),r("#double-range").ionRangeSlider({type:"double",min:0,max:100,from:25,to:75,hide_min_max:!0}),r("#single-range").ionRangeSlider({min:0,max:100,from:25,to:75,hide_min_max:!0})}(jQuery),$("#reg-form").validate({rules:{username:"required",password:"required",email:{required:!0,email:!0}},messages:{username:"Please specify your name",password:"Please specify password",email:"Please use correct email format"}});