$(document).ready(function () {

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$('a.page-scroll').bind('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 50)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	});

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
		target: '.navbar-fixed-top',
		offset: 51
	});

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function () {
		$('.navbar-toggle:visible').click();
	});

	// Fit Text Plugin for Main Header
	$("h1").fitText(
		1.2, {
			minFontSize: '35px',
			maxFontSize: '65px'
		}
	);

	// Offset for Main Navigation
	$('#mainNav').affix({
		offset: {
			top: 100
		}
	});
});

// Initialize WOW.js Scrolling Animations
$(function () {
	new WOW().init();
});

// Typed.js

document.addEventListener('DOMContentLoaded', function () {
	Typed.new('.typed', {
		strings: ["Open 8am to 5pm Monday thru Friday!", "Walk-ins welcome!", "Feel free to call at (502) 695-4477."],
		typeSpeed: 100
	});
});

//new Cocoen(document.querySelector('.cocoen'));

document.querySelectorAll('.cocoen').forEach(function(element){
  new Cocoen(element);
});

$('.cocoen').cocoen();
