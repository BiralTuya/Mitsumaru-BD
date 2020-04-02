
    function responsiveToggler() {
    var topNavBar = $("#myTopnav");
    topNavBar.toggleClass("responsive");
}

$(document).ready(function(){
    $(".move-top-btn").click(function(){
      $('html,body').animate({
                scrollTop: $("body").offset().top
            },
            'slow');
    });
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

});



/*Waypoints JavaScript*/

;(function () {
    
    'use strict';
    

    var contentWayPoint = function() {
        var i = 0;
        $('.animate-box').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
                
                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){

                    $('body .animate-box.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            var effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        },  k * 200, 'easeInOutExpo' );
                    });
                    
                }, 100);
                
            }

        } , { offset: '85%' } );
    };



/*Top button JS*/

    var goToTop = function() {

        $('.js-gotop').on('click', function(event){
            
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');
            
            return false;
        });

        $(window).scroll(function(){

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-gotop').addClass('active');
            } else {
                $('.js-gotop').removeClass('active');
            }

        });
    
    };

    
    $(function(){
        contentWayPoint();
        goToTop();
    });


}());
