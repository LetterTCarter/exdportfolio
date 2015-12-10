/*global $*/
'use strict';

$(function() {
	console.log('Document is ready for action.');

	// hide the mainContent h1s
	$('.mainContent h1').remove();

	// hide lightbox home buttons
	$('.homeBtn').hide();

	// image stretches to fill container
	$('.projectImage').imagefill();

	// slick-carousel
	$('.week1, .week2, .week3, .week4, .week5, .week6, .week7, .week8').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});

	// loads p5.js sketch into lightbox via iframe
	$('.project').colorbox({rel: 'gal', iframe: true, innerWidth: '90%', innerHeight: '90%'});

	//active link highlighting
	$('ul a').click(function() {
		$('.clicked').removeClass('clicked');
			$(this).addClass('clicked');
		});

	//menu link animations
		$('ul a').hover(function(){
			$(this).animate({
				fontSize: '+=1px',
				padding: '+=1px'
			}, 300);
		}, function(){
			$(this).animate({
				fontSize: '-=1px',
				padding: '-=1px'
			}, 300);
		});
});
