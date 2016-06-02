$(function() {
	var id = 42;
	if(window.location.hash == '#simpletag' + id) {
		var elements_tracked = 2;
		var simpletag_url = 'http://simpletag.local/';
		var website_url = 'http://zeturf.local/';

		// Wipe DOM
		$('body *').remove();
		for (i = 0; i < document.styleSheets.length; i++) {
			document.styleSheets[i].disabled = true;
		}

		// Load Simpletag assets
		$("<link/>", {
		   rel: "stylesheet",
		   type: "text/css",
		   href: simpletag_url + "styles/simpletag.css"
		}).appendTo("head");
		$("<link/>", {
		   rel: "stylesheet",
		   type: "text/css",
		   href: "//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"
		}).appendTo("head");
		$("<link/>", {
		   rel: "stylesheet",
		   type: "text/css",
		   href: "//cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css"
		}).appendTo("head");

		// Create iframe
		$('<iframe />');
	    $('<iframe />', {
	        src: website_url + 'site/content/homepage.php'
	    }).appendTo('body');
	    
	    // Create tooltip/DOM selector
	    $('iframe').on("load",function() {
	    	$('iframe').contents().find('body').append('<div id="simpletag-overlay" style="display: none; position: absolute; z-index: 2147483647; opacity: 0.6; background-color: #00C7FF; pointer-events: none;"></div><div id="simpletag-tooltip" style="display: none; position: absolute; z-index: 2147483647; background-color: white; color: black; border-radius: 3px; padding: 20px 25px; box-sizing: border-box; box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5); transform: translateX(-50%) translateY(calc(-100% - 25px))"; >Is this your Call to Action?</div>');
	    });

		// Create/set up sidebar
		$.ajax({
		  url: '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js',
		  dataType: "script"
		}).done(function() {
			$('body').append('<aside><div class="header"><i class="mdi mdi-arrow-left" data-id="slick-prev"></i><div class="step-infos"><span class="step-title">New Page</span><span class="step-subtitle">No elements tracked yet</span></div></div><div class="step-tracker"><p class="step-number"><span class="current">1</span>/' + elements_tracked + '</p><span class="loader"><span class="progress"></span></span></div><div id="steps"><div><div class="centered-content"><h3>Hello World!</h3><p>This page isn\'t one of your templates...yet.</p><button data-id="slick-next">Add to templates</button></div></div><div><div class="templates-list"><h3>What type of page are we looking at?</h3><ul><li><a href="javascript:void(0)" data-id="slick-next">Product page</a></li><li><a href="javascript:void(0)" data-id="slick-next">Shopping cart</a></li><li><a href="javascript:void(0)" data-id="slick-next">Checkout</a></li><li><a href="javascript:void(0)" data-id="slick-next">Product Page</a></li><li><a href="javascript:void(0)" data-id="slick-next">Product Page</a></li><li><a href="javascript:void(0)" data-id="slick-next">Product Page</a></li></ul></div></div><div><ul><li><a href="javascript:void(0)">Product Page</a></li></ul><p class="secondary">We are now going to get your page template set up by clicking all the important elements step-by-step.</p><a href="javascript:void(0)" class="action" data-id="slick-next">Let\'s do this</a></div><div><div class="centered-content tag" id="tag-cta"><h3>Call to Action</h3><p class="secondary">Start by clicking on your "Add to Cart" button to track it.</p><span class="skip" data-id="slick-next">Skip</span></div></div><div><div class="centered-content tag" id="tag-price"><h3>Price</h3><p class="secondary">Click on your "Price" to track it.</p><span class="skip" data-id="slick-next">Skip</span></div></div><div><div class="centered-content"><h3>You\'re all set!</h3><p class="secondary">Navigate to another page to track it.</p><a href="/step3.html" class="action">Back to all pages</a></div></div></aside>');
			$('#steps').slick({
				infinite: false,
				draggable: false,
				arrows: false,
				speed: 100
			});

			$('[data-id=slick-prev]').on('click', function() {
				$("#steps").fadeTo('fast', 0, function() {
				   $(this).slick('slickPrev');
				   setTimeout(function(){
						$('#steps').fadeTo('fast', 1);
				   }, 100);
				});
			});

			$('[data-id=slick-next]').on('click', function() {
				$("#steps").fadeTo('fast', 0, function() {
				   $(this).slick('slickNext');
				   setTimeout(function(){
						$('#steps').fadeTo('fast', 1);
				   }, 100);
				});
			});

			$('#steps').on('afterChange', function(event, slick, direction){
				if(slick.currentSlide == 2) {
					$('.step-infos').fadeOut('fast', function() {
						$('.step-subtitle').text('No elements tracked yet').css('display', 'block');
						$('.step-title').text('Product page');
						$('.step-infos').fadeIn();
					});
					$('iframe').contents().find('a, button, span, p').off('mouseover');
					$('iframe').contents().find('a, button, span, p').off('click');
					$('iframe').contents().find('#simpletag-tooltip').hide();
					$('iframe').contents().find('#simpletag-overlay').hide();
				}
				else if(slick.currentSlide == 3) {
					$('.step-tracker').fadeIn('fast');
					$('iframe').contents().find('a, button, span, p').on('mouseover', function(e) {
						var pos_top = $(this).offset().top;
						var pos_left = $(this).offset().left;
						var overlay_width = $(this).innerWidth() + 20;
						var overlay_height = $(this).innerHeight() + 20;
						$('iframe').contents().find('#simpletag-tooltip').show();
						$('iframe').contents().find('#simpletag-overlay').show();
						$('iframe').contents().find('#simpletag-tooltip').css({ top : pos_top + 'px', left : pos_left + $(this).width() / 2 + 'px' });
						$('iframe').contents().find('#simpletag-overlay').css({ top : pos_top - 10 + 'px', left : pos_left - 10 + 'px' }).width(overlay_width).height(overlay_height);
					});

					$('iframe').contents().find('a, button, span, p').on('click', function(e) {
						e.preventDefault();
						$('#steps').slick('slickNext');
					});
				}
				else if(slick.currentSlide == 4) {
					$('iframe').contents().find('#simpletag-tooltip').hide();
					$('iframe').contents().find('#simpletag-overlay').hide();
					$('iframe').contents().find('#simpletag-tooltip').text('Is this your price?');
					$('.step-tracker .current').text('2');
					$('.step-tracker .loader .progress').width('calc(100% / ' + elements_tracked + ' * 2)');
					$('.header .step-subtitle').fadeOut('fast', function() {
						$(this).text('1 element tracked');
						$(this).fadeIn();
					});
				}
				else if(slick.currentSlide == 5) {
					$('.step-tracker').fadeOut('fast');
					$('.header .step-subtitle').fadeOut('fast', function() {
						$(this).text('2 elements tracked');
						$(this).fadeIn();
					});

					$('iframe').contents().find('a, button, span, p').off('mouseover');
					$('iframe').contents().find('a, button, span, p').off('click');
					$('iframe').contents().find('#simpletag-tooltip').hide();
					$('iframe').contents().find('#simpletag-overlay').hide();
				}
			});
	  	});
	}
});