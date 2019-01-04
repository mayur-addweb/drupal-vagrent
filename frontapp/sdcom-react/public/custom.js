jQuery(window).scroll(function(){
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
