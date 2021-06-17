// coding with Rosebel for Js Documents

// Table of contents


// hamburger menu start

function openNav() {
	  document.getElementById("mySidenav").style.width = "280px";
	}
	function closeNav() {
	  document.getElementById("mySidenav").style.width = "0";
	}

// hamburger menu end


// 1.  vars and inits

jQuery(document).ready(function($)
{
	"user strict";

	// 1 vars and inits

	initTimer();
	initFavorite();
	initIsotopeFiltering();
	initSlider();
})


// 2.  Init Timer

function initTimer(){
	if ($('.timer').length) 
	{

		// uncomment line below and relocate date
		var target_date = new Date("December 31, 2021").getTime();
		
		//comment line below 

		/*var date = new Date();
		date.setDate(date.getDate() + 5);
		var target_date = date.getTime();*/
//--------------------------------------------------------------

		// var for times units

		var days, hours, minutes, seconds;
		var d = $('#day');
		var h = $('#hour');
		var m = $('#minute');
		var s = $('#second');

		setInterval(function(){

			// find the amount of "seconds" between now and target
			var current_date = new Date().getTime();
			var seconds_left = (target_date - current_date) / 1000;

			//some time calculations
			days = parseInt(seconds_left / 86400);
			seconds_left = seconds_left % 86400;

			hours = parseInt(seconds_left / 3600);
			seconds_left = seconds_left % 3600;

			minutes = parseInt(seconds_left / 60);
			seconds = parseInt(seconds_left % 60);

			//display result
			d.text(days);
			h.text(hours);
			m.text(minutes);
			s.text(seconds);

		}, 1000);
	}
}

// 3.  Init Favorite

	function initFavorite()
	{
		if ($('.favorite').length) 
		{
			var favs = $('.favorite');

			favs.each(function()
			{
				var fav = $(this);
				var active = false;
				if (fav.hasClass('active')) 
				{
					active = true;
				}
				fav.on('click', function()
				{
					if (active) 
					{
						fav.removeClass('active');
						active = false;
					}
					else
					{
						fav.addClass('active');
						active = true;
					}
				});
			});
		}
	}

// 4.  Init Isotope Filtering

function initIsotopeFiltering(){
	if ($('.grid_sorting_button').length) {
		$('.grid_sorting_button').click(function(){
			$('.grid_sorting_button.active').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			$('.product-grid').isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			return false;
		});
	}
}


// 5.  Init Slider

function initSlider()
{
	if ($('.product_slider').length) 
	{
		var slider1 = $('.product_slider');

		slider1.owlCarousel({
			loop: false,
			dots: false,
			nav: false,
			responsive:
			{
				0:{items:1},
				480:{items:2},
				768:{items:3},
				991:{items:4},
				1280:{items:5},
				1440:{items:5},
			}
		});
		if ($('.product_slider_nav_left').length) 
		{
			$('.product_slider_nav_left').on('click', function(){
				slider1.trigger('prev.owl.carousel');
			});
		}
		if ($('.product_slider_nav_right').length) 
		{
			$('.product_slider_nav_right').on('click', function(){
				slider1.trigger('next.owl.carousel');
			});
		}
	}
}







