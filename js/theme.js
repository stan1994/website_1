(function($) {
    "use strict";


    $(document).on ('ready', function (){

        // -------------------- Navigation Scroll
        $(window).on('scroll', function (){
          var sticky = $('.theme-main-menu'),
          scroll = $(window).scrollTop();
          if (scroll >= 100) sticky.addClass('fixed');
          else sticky.removeClass('fixed');

        });



        // ------------------------- Add OnepageNav
        if($('body').length){
          // Smooth scrolling using jQuery easing
          $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click',function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
              }
            }
          });

          // Closes responsive menu when a scroll trigger link is clicked
          $('.js-scroll-trigger').on('click',function() {
            $('.navbar-collapse').collapse('hide');
          });

          // Activate scrollspy to add active class to navbar items on scroll
          $('body').scrollspy({
            target: '#mega-menu-holder',
            offset: 100
          });
        }

  // ------------------------------- Work Progress Slider
        var pSlider = $ (".progress-slider");
        if(pSlider.length) {
            pSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:false,
              autoplay:true,
              margin:30,
              autoplayTimeout:4000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    },
                    1550:{
                        items:3
                    }
                },
          })
        }

// -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });
        });

});


    $(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
        $('#loader').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});


        // ------------------------------- AOS Animation
        AOS.init({
          duration: 1000,
          mirror: true
        });



    })

})(jQuery)
