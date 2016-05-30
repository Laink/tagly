$(function() {
	if(window.location.hash) {
		$('body *').remove();
		document.getElementsByTagName('link')[0].disabled = true;
		document.getElementsByTagName('link')[1].disabled = true;
		$("<link/>", {
		   rel: "stylesheet",
		   type: "text/css",
		   href: "http://tagly.local/styles/tagly.css"
		}).appendTo("head");
		$("<link/>", {
		   rel: "stylesheet",
		   type: "text/css",
		   href: "http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"
		}).appendTo("head");
		$("<link/>", {
		   rel: "stylesheet",
		   type: "text/css",
		   href: "http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css"
		}).appendTo("head");

		// Create sidebar
		$.ajax({
		  url: '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js',
		  dataType: "script"
		}).done(function() {
			$('body').append('<aside><div class="header"><i class="mdi mdi-arrow-left" data-id="slick-prev"></i><div class="step-infos"><span class="step-title">New Page</span><span class="step-subtitle">No elements tracked yet</span></div></div><div class="step-tracker"><p class="step-number"><span class="current">1</span>/6</p><span class="loader"><span class="progress"></span></span></div><div id="steps"><div><h3>Hello World!</h3><p>This page isn\'t one of your templates...yet.</p><button data-id="slick-next">Add to templates</button></div><div><h3>What type of page are we looking at?</h3><ul><li><a href="#" data-id="slick-next">Product page</a></li><li><a href="#" data-id="slick-next">Shopping cart</a></li><li><a href="#" data-id="slick-next">Checkout</a></li><li><a href="#" data-id="slick-next">Product Page</a></li><li><a href="#" data-id="slick-next">Product Page</a></li><li><a href="#" data-id="slick-next">Product Page</a></li></ul></div><div><ul><li><a href="#">Product Page</a></li></ul><p class="secondary">We are now going to get your page template set up by clicking all the important elements step-by-step.</p><br /><a href="#" class="action" data-id="slick-next">Let\'s do this</a></div><div><h3>Call to Action</h3><p class="secondary">Start by clicking on your "Add to Cart" button to track it.</p><span class="skip" data-id="slick-next">Skip</span></div><div><h3>Price</h3><p class="secondary">Click on your "Price" to track it.</p><span class="skip" data-id="slick-next">Skip</span></div><div><p>You\'re all set! Navigate to another page to track it.</p><button>Back to all pages</button></div></aside>');
			$('#steps').slick({
				infinite: false,
				arrows: false
			});

			$('[data-id=slick-prev]').on('click', function() {
				$('#steps').slick('slickPrev');
			});

			$('[data-id=slick-next]').on('click', function() {
				$('#steps').slick('slickNext');
			});

			$('#steps').on('afterChange', function(event, slick, direction){
				if(slick.currentSlide == 2) {
					$('.step-infos').fadeOut('fast', function() {
						$('.step-subtitle').text('No elements tracked yet').css('display', 'block');
						$('.step-title').text('Product page');
						$('.step-infos').fadeIn();
					});
				}
				else if(slick.currentSlide == 3) {
					$('.step-tracker').fadeIn('fast');
					$('iframe').contents().find('a, button, span, p').on('mouseover', function(e) {
						var pos_top = $(this).offset().top;
						var pos_left = $(this).offset().left;
						var overlay_width = $(this).innerWidth() + 20;
						var overlay_height = $(this).innerHeight() + 20;
						$('iframe').contents().find('#tagly-tooltip').show();
						$('iframe').contents().find('#tagly-overlay').show();
						$('iframe').contents().find('#tagly-tooltip').css({ top : pos_top + 'px', left : pos_left + $(this).width() / 2 + 'px' });
						$('iframe').contents().find('#tagly-overlay').css({ top : pos_top - 10 + 'px', left : pos_left - 10 + 'px' }).width(overlay_width).height(overlay_height);
					});

					$('iframe').contents().find('a').on('click', function(e) {
						e.preventDefault();
						$('#steps').slick('slickNext');
					});
				}
				else if(slick.currentSlide == 4) {
					$('.step-tracker .current').text('2');
					$('.step-tracker .loader .progress').width('calc(100% / 6 * 2)');
					$('.header .step-subtitle').fadeOut('fast', function() {
						$(this).text('1 element tracked');
						$(this).fadeIn();
					})
				}

				// $('iframe').contents().find('a, button').off('mouseover');
				// $('iframe').contents().find('#tagly-tooltip').hide();
				// $('iframe').contents().find('#tagly-overlay').hide();
			});
	  	});

		// Create iframe
		$('<iframe />');
	    $('<iframe />', {
	        src: 'http://zeturf.local/site/content/homepage.php'
	    }).appendTo('body');
	    

	    $('iframe').on("load",function() {
	    	$('iframe').contents().find('body').append('<div id="tagly-overlay" style="position: absolute; z-index: 999; display: block; opacity: 0.6; background-color: #00C7FF; pointer-events: none;"></div><div id="tagly-tooltip" style="position: absolute; z-index: 999; display: block; background-color: white; color: black; border-radius: 3px; padding: 20px 25px; box-sizing: border-box; box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5); transform: translateX(-50%) translateY(calc(-100% - 25px))"; >Is this your Call to Action?</div>');

	    	$.ajax({
	    	  url: 'http://tagly.local/scripts/vendor/jquery.dom-outline-1.0.js',
	    	  dataType: "script"
	    	});
	    });
	}
});