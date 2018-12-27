jQuery(window).scroll(function(){
    if (jQuery(window).scrollTop() >= 70) {
        jQuery('header').addClass('fixed-header');
    }
    else {
        jQuery('header').removeClass('fixed-header');
    }
});
