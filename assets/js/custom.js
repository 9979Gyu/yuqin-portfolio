$(document).ready(function(){
	"use strict";

	$('#navbar-placeholder').load('header.html', function(response, status, xhr) {
        if (status == "error") {
            console.error("Error loading the navbar:", xhr.statusText);
        }
    });
    
    $('#footer-placeholder').load('footer.html', function(response, status, xhr) {

		// 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} 
			else {
				$('.return-to-top').fadeOut();
			}
		});

		$('.return-to-top').on('click',function(){
			$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
		
        if (status == "error") {
            console.error("Error loading the footer:", xhr.statusText);
        }
    });

	$('.barWrapper').each(function () {
		var progressBar = $(this).find('.progress-bar');
		var percentage = $(this).find('h3').text().replace('%', '');
		
		progressBar.css('width', percentage + '%');

		progressBar.css('transition', 'width 3s ease-in-out');
	});
	

    // 4. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });


	var currentPage = window.location.pathname;
    
    // Loop through all the nav links
    $('.nav-link').each(function() {
        // Get the href attribute of each nav link
        var linkHref = $(this).attr('href');

        // Check if the link's href includes the current page's pathname
        if (linkHref.includes(currentPage)) {
            // Add the 'active' class to the matching link
            $(this).addClass('active');
        } else {
            // Optionally, remove 'active' class from other links (to prevent multiple active states)
            $(this).removeClass('active');
        }
    });

});	
	