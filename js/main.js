$(document).ready(function() {
	$('body').addClass('js');
	var $menu = $('#menu'),
	$menulink = $('.menu-link');
  
	$menulink.click(function() {
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		return false;
	});

	$('a.movie-showtime').on('click', function(){
	    window.location.replace("movie_detail.html");
	});

	$('.movie-teaser-movie-image img').on('click', function(){
	    window.location.replace("movie_detail.html");
	});

	$('.experience-eat img').on('click', function(){
        window.location.replace("menu.html");
	});

	$('.experience-drink img').on('click', function(){
        window.location.replace("menu.html?experience=drink#menuredirect");
	});

	$('.experience-movie img').on('click', function(){
        window.location.replace("movies.html");
	});

	/* 
	---------------------------------------------
	Calendar
	---------------------------------------------
	*/

	$('.movie-showtime.current').addClass('past');

	$('div.calendar').click(function(e){
		e.preventDefault;

		if(!$(this).hasClass('today')){
			$('.calendar').removeClass('today');
			$(this).addClass('today');

			if($(this).hasClass('current')){
				$('.movie-showtime.current').addClass('past');
			}
			else {
				$('.movie-showtime').removeClass('past');
			}
			$('.movie-teaser').shuffleChildren();
		}
	});

	// $('div.calendar a').click(function(e){
	// 	e.preventDefault;

	// 	if(!$(this).parent('.calendar').hasClass('today')){
	// 	    $('.calendar').removeClass('today');
 //            $(this).parent('.calendar').addClass('today');
 //                if($('.movie-teaser-movie:nth-child(2)').is(':visible')) {
 //                    $('.movie-teaser-movie:nth-child(2)').hide();
 //                    $('.movie-teaser-movie:nth-child(3)').hide();
 //                }
 //                else {
 //                    $('.movie-teaser-movie:nth-child(2)').show();
 //                    $('.movie-teaser-movie:nth-child(3)').show();
 //                }
	// 	    }
	// });

	$('.calendar-list').slick({
		dots: false,
		infinite: false,
		speed: 1500,
		slidesToShow: 6,
		slidesToScroll: 6,
		prevArrow: '<img alt="Left Arrow" class="slick-prev img-left" src="images/left_arrow.png">',
		nextArrow: '<img alt="Right Arrow" class="slick-next img-right" src="images/right_arrow.png">',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});

	/* 
	---------------------------------------------
	Menu Page 
	---------------------------------------------
	*/

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    var experience = getUrlParameter('experience');
    if(experience) {
        $("#menu-salads").hide();
        		$("#menu-specials").hide();
        		$("#menu-kids").hide();
        		$("#menu-desserts").hide();
        		$("#menu-favorites").hide();
        		$("#menu-drinks").show();

        		$("#nav-salads").removeClass("selected");
        		$("#nav-specials").removeClass("selected");
        		$("#nav-kids").removeClass("selected");
        		$("#nav-desserts").removeClass("selected");
        		$("#nav-favorites").removeClass("selected");
        		$("#nav-drinks").addClass("selected");
    }


	$("#nav-favorites").click(function(e){
		e.preventDefault();
		$("#menu-salads").hide();
		$("#menu-specials").hide();
		$("#menu-kids").hide();
		$("#menu-drinks").hide();
		$("#menu-desserts").hide();
		$("#menu-favorites").show();

		$("#nav-salads").removeClass("selected");
		$("#nav-specials").removeClass("selected");
		$("#nav-kids").removeClass("selected");
		$("#nav-drinks").removeClass("selected");
		$("#nav-desserts").removeClass("selected");
		$("#nav-favorites").addClass("selected");
	});

	$("#nav-salads").click(function(e){
		e.preventDefault();
		
		$("#menu-specials").hide();
		$("#menu-kids").hide();
		$("#menu-drinks").hide();
		$("#menu-desserts").hide();
		$("#menu-favorites").hide();
		$("#menu-salads").show();

		$("#nav-salads").addClass("selected");
		$("#nav-specials").removeClass("selected");
		$("#nav-kids").removeClass("selected");
		$("#nav-drinks").removeClass("selected");
		$("#nav-desserts").removeClass("selected");
		$("#nav-favorites").removeClass("selected");
	});

	$("#nav-specials").click(function(e){
		e.preventDefault();
		$("#menu-salads").hide();	
		$("#menu-kids").hide();
		$("#menu-drinks").hide();
		$("#menu-desserts").hide();
		$("#menu-favorites").hide();
		$("#menu-specials").show();

		$("#nav-salads").removeClass("selected");
		$("#nav-specials").addClass("selected");
		$("#nav-kids").removeClass("selected");
		$("#nav-drinks").removeClass("selected");
		$("#nav-desserts").removeClass("selected");
		$("#nav-favorites").removeClass("selected");
	});

	$("#nav-kids").click(function(e){
		e.preventDefault();
		$("#menu-salads").hide();
		$("#menu-specials").hide();
		$("#menu-drinks").hide();
		$("#menu-desserts").hide();
		$("#menu-favorites").hide();
		$("#menu-kids").show();

		$("#nav-salads").removeClass("selected");
		$("#nav-specials").removeClass("selected");
		$("#nav-kids").addClass("selected");
		$("#nav-drinks").removeClass("selected");
		$("#nav-desserts").removeClass("selected");
		$("#nav-favorites").removeClass("selected");
	});

	$("#nav-drinks").click(function(e){
		e.preventDefault();
		$("#menu-salads").hide();
		$("#menu-specials").hide();
		$("#menu-kids").hide();
		$("#menu-desserts").hide();
		$("#menu-favorites").hide();
		$("#menu-drinks").show();

		$("#nav-salads").removeClass("selected");
		$("#nav-specials").removeClass("selected");
		$("#nav-kids").removeClass("selected");
		$("#nav-desserts").removeClass("selected");
		$("#nav-favorites").removeClass("selected");
		$("#nav-drinks").addClass("selected");
	});

	$("#nav-desserts").click(function(e){
		e.preventDefault();
		$("#menu-salads").hide();
		$("#menu-specials").hide();
		$("#menu-kids").hide();
		$("#menu-drinks").hide();
		$("#menu-favorites").hide();
		$("#menu-desserts").show();

		$("#nav-salads").removeClass("selected");
		$("#nav-specials").removeClass("selected");
		$("#nav-kids").removeClass("selected");
		$("#nav-drinks").removeClass("selected");
		$("#nav-desserts").addClass("selected");
		$("#nav-favorites").removeClass("selected");
	});

	/* 
	---------------------------------------------
	Google Maps
	---------------------------------------------
	*/


	/* 
	---------------------------------------------
	Movie Detail Video 
	---------------------------------------------
	*/

	(function($) {

    $.fn.fitVids = function(options) {
      var settings = {
        customSelector: null
      }

      var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

      div.className = 'fit-vids-style';
      div.innerHTML = '­<style>         \
		      .fluid-width-video-wrapper {        \
		         width: 100%;                     \
		         position: relative;              \
		         padding: 0;                      \
		      }                                   \
		                                          \
		      .fluid-width-video-wrapper iframe,  \
		      .fluid-width-video-wrapper object,  \
		      .fluid-width-video-wrapper embed {  \
		         position: absolute;              \
		         top: 0;                          \
		         left: 0;                         \
		         width: 100%;                     \
		         height: 100%;                    \
		      }                                   \
		    </style>';

      ref.parentNode.insertBefore(div, ref);

      if (options) {
        $.extend(settings, options);
      }

      return this.each(function() {
        var selectors = [
          "iframe[src^='http://player.vimeo.com']",
          "iframe[src^='http://www.youtube.com']",
          "iframe[src^='https://www.youtube.com']",
          "iframe[src^='http://www.kickstarter.com']",
          "object",
          "embed"
        ];

        if (settings.customSelector) {
          selectors.push(settings.customSelector);
        }

        var $allVideos = $(this).find(selectors.join(','));

        $allVideos.each(function() {
          var $this = $(this);
          if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
            return;
          }
          var height = this.tagName.toLowerCase() == 'object' ? $this.attr('height') : $this.height(),
            aspectRatio = height / $this.width();
          if (!$this.attr('id')) {
            var videoID = 'fitvid' + Math.floor(Math.random() * 999999);
            $this.attr('id', videoID);
          }
          $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + "%");
          $this.removeAttr('height').removeAttr('width');
        });
      });

    }
  })(jQuery);

  $("#vid-container").fitVids();

});

var map;
function initMap() {
	 var magic = {lat: 28.557055,  lng: -81.345965};
	map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 28.548023, lng: -81.367972},
				zoom: 13,
				styles: [
						  {
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#f5f5f5"
						      }
						    ]
						  },
						  {
						    "elementType": "geometry.fill",
						    "stylers": [
						      {
						        "color": "#eccc36"
						      }
						    ]
						  },
						  {
						    "elementType": "labels",
						    "stylers": [
						      {
						        "color": "#000000"
						      }
						    ]
						  },
						  {
						    "elementType": "labels.icon",
						    "stylers": [
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "elementType": "labels.text",
						    "stylers": [
						      {
						        "color": "#000000"
						      }
						    ]
						  },
						  {
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#000000"
						      }
						    ]
						  },
						  {
						    "elementType": "labels.text.stroke",
						    "stylers": [
						      {
						        "color": "#ffffff"
						      }
						    ]
						  },
						  {
						    "featureType": "administrative.land_parcel",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#bdbdbd"
						      }
						    ]
						  },
						  {
						    "featureType": "poi",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#eeeeee"
						      }
						    ]
						  },
						  {
						    "featureType": "poi",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#757575"
						      }
						    ]
						  },
						  {
						    "featureType": "poi.park",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#e5e5e5"
						      }
						    ]
						  },
						  {
						    "featureType": "poi.park",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#9e9e9e"
						      }
						    ]
						  },
						  {
						    "featureType": "road",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#ffffff"
						      }
						    ]
						  },
						  {
						    "featureType": "road",
						    "elementType": "geometry.fill",
						    "stylers": [
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "featureType": "road.arterial",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#757575"
						      }
						    ]
						  },
						  {
						    "featureType": "road.highway",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#dadada"
						      }
						    ]
						  },
						  {
						    "featureType": "road.highway",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#616161"
						      }
						    ]
						  },
						  {
						    "featureType": "road.local",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#9e9e9e"
						      }
						    ]
						  },
						  {
						    "featureType": "transit.line",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#e5e5e5"
						      }
						    ]
						  },
						  {
						    "featureType": "transit.station",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#eeeeee"
						      }
						    ]
						  },
						  {
						    "featureType": "water",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#c9c9c9"
						      }
						    ]
						  },
						  {
						    "featureType": "water",
						    "elementType": "geometry.fill",
						    "stylers": [
						      {
						        "color": "#797979"
						      }
						    ]
						  },
						  {
						    "featureType": "water",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#9e9e9e"
						      }
						    ]
						  }
						]
		});
	var marker = new google.maps.Marker({position: magic, map: map});
}

jQuery.fn.shuffleChildren = function(){
    var p = this[0];
    for (var i = p.children.length-1; i >= 2; i--) {
        p.appendChild(p.children[Math.random() * i | 1]);
    }
};