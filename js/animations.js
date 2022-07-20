$(document).ready(function(){

// Drop menu
	$('.menu a').each(function(index, element) {
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		}, 2000 + (index * 500))
	});


	if( $(window).width() > 800 ) {

		// Header
		
		$('header .texts').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .texts').animate({
			opacity: 1,
			'marginTop': '-52px'
		}, 1500);

		// Picture slides to the right

		$('#about-us').animate({
			marginTop: '-=100px'
		}, 1500); 

	}

// Menu elements scroll to section

	var aboutUs = $('#about-us').offset().top;
	var menu = $('#food').offset().top;
	var gallery = $('#gallery').offset().top;
	var locations = $('#location').offset().top;

	$('#btn-about-us').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: aboutUs
		}, 500);
	});

	$('#btn-menu').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu
		}, 500);
	});

	$('#btn-gallery').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: gallery
		}, 500);
	});

	$('#btn-location').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: locations
		}, 500);
	});

});