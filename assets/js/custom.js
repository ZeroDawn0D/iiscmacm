(function($) {
    "use strict";
    // Fixed Header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 90) {
            $(".header-navigation").addClass("fixed-nav");
        } else {
            $(".header-navigation").removeClass("fixed-nav");
        }
    });
    // Preloader
    if ($('.loading-main').length > 0) {
        $(window).on('load', function() {
            $('.loading-main').fadeOut();
            $('.pre-loader').delay(350).fadeOut("slow", 0.0);
            $('body').css({
                'overflow-y': 'scroll'
            });
        });
    }
    // Responsive menu
    $('.slimmenu').slimmenu({
        resizeWidth: '992',
        collapserTitle: '',
        animSpeed: 'fast',
        easingEffect: null,
        indentChildren: true,
    });
    // Slider Carousel
    if ($('.slider-carousel').length > 0) {
        $('.slider-carousel').owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            autoplay:true,
            mouseDrag: false,
            touchDrag: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                }
            }
        })
    }
    // Post Carousel
    if ($('.post-carousel').length > 0) {
        $('.post-carousel').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay:true,
            autoplayTimeout:2500,
            lazyLoad: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                }
            }
        })
    }
    // Company Carousel
    if ($('.company-slider').length > 0) {
        $('.company-slider').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            center:true,
            margin:70,
            autoplay:true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 3,
                },
                768: {
                    items: 5,
                }
            }
        })
    }
    // Testimonial Carousel
    if ($('.testimonial-slider').length > 0) {
        $('.testimonial-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin:60,
            autoplay:true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                }
            }
        })
    }
    if ($('.testimonial-slider2').length > 0) {
        $('.testimonial-slider2').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin:60,
            autoplay:true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            }
        })
    }

    if ($('.team-carousel-1').length > 0) {
        $('.team-carousel-1').owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            margin:0,
            autoplay:false,
            mouseDrag: false,
            touchDrag: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            }
        })
    }

    if ($('.team-carousel-2').length > 0) {
        $('.team-carousel-2').owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            margin:60,
            autoplay:false,
            mouseDrag: false,
            touchDrag: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    autoplay: true,
                    autoplayTimeout:2500,
                    loop: true,
                    mouseDrag: true,
                    touchDrag: true,
                },
                768: {
                    items: 2,
                    autoplay: true,
                    autoplayTimeout:2500,
                    loop: true,
                    mouseDrag: true,
                    touchDrag: true,
                },
                992: {
                    items: 4,
                    autoplay: true,
                    autoplayTimeout:2500,
                    loop: true,
                    mouseDrag: true,
                    touchDrag: true,
                }
            }
        })
    }
    
    // Parallax Window
    
    if ($('.parallax-window').length > 0) {
    $('.parallax-window').parallax({
        naturalWidth: 600,
        naturalHeight: 400
      });
    }
    // Wow Animation
     var wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       10,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
    // Video Modal
    if ($('.popup-youtube, .popup-vimeo, .popup-gmaps').length > 0) {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true,
        });
    }
    // File Upload
    $(".form-action").on("change", ".file-upload-field", function(){ 
        $(this).parent(".file-upload").attr("data-text",         $(this).val().replace(/.*(\/|\\)/, '') );
    });
    // timeline animation


    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    // Home Top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 1000,
        $back_to_top = $('.home-top');
        $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);


    });


     $('.rating').rating();

    $('.ratingEvent').rating({ rateEnd: function (v) { $('#result').text(v); } });

    // for search 

    var sjs = SimpleJekyllSearch({
     searchInput: document.getElementById('search-input'),
     resultsContainer: document.getElementById('results-container'),
     json: '/search.json'
    });
    $(".menu-heading .btn").on("click",function(){
       $(this).next("div").toggleClass("active");
    });

})(jQuery);
