/*global $*/
'use strict';

$(function() {
  console.log('Document is ready for action.');

  //hide the mainContent h1s
  $('.mainContent h1').remove();

  $('.projectImage').imagefill();
  // image stretches to fill container

  $('.week1, .week2, .week3, .week4, .week5, .week6, .week7, .week8').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  //currently loads image in lightbox window
  $('.project').colorbox();



  $('.ajax-popup-link').magnificPopup({
    type: 'ajax'
  });

  //active link highlighting
  $('a').click(function() {
    $('.clicked').removeClass('clicked');
  			$(this).addClass('clicked');
  });

  //menu link animations
  $('a').hover(function(){
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
