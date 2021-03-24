$(document).ready(function() {

    /*SROLL ON BUTTONS*/


    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUpBig');
    }, {

    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /*MOBILE NAV*/
    $('.toggle i').click(function() {
        var nav = $('.mann');
        var icon = $('.toggle i');

        nav.slideToggle(200);
        if (icon.hasClass('fas fa-bars')) {
            icon.removeClass("fas fa-bars").addClass("fas fa-times");


        } else {
            icon.removeClass("fas fa-times").addClass("fas fa-bars");

        }
    });
});