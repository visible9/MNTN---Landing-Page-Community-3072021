$(document).ready(function() {
    $('.header__wrapper-slider').slick({
        autoplay: true,



    });
    $('.hdr_slider-item-txt').click(function(event) {
        $('.header__wrapper-slider').slick('goTo', 0);

    });
    $('.hdr_slider-item-numbOne').click(function(event) {
        $('.header__wrapper-slider').slick('goTo', 1);

    });
    $('.hdr_slider-item-numbTwo').click(function(event) {
        $('.header__wrapper-slider').slick('goTo', 2);

    });
    $('.hdr_slider-item-numbThree').click(function(event) {
        $('.header__wrapper-slider').slick('goTo', 3);

    });


});