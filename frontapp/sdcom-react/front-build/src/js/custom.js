/* careousel slider */
$(document).ready(function() {
  
    $('.testimonial-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      items:1
    });

    $('.logo-slider').owlCarousel({
      loop:true,
      margin:10,
      dots: false,
      nav: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
      }
    });

    $('.blog-slider').owlCarousel({
      loop:true,
      margin:30,
      dots: false,
      nav: true,
      responsive:{
        0:{
          items:1
        },
        600:{
        items:2
        },
        1000:{
          items:3
        }
      }
    });

  $(".portfolio-wrap .card-title").click(function(ev) {
     ev.stopPropagation();
  });
});


$(window).scroll(function(){
    if ($(window).scrollTop() >= 70) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
    if ($(window).scrollTop() >= 400) {
        $('header').addClass('fix-logo');
    }
    else {
        $('header').removeClass('fix-logo');
    }
});