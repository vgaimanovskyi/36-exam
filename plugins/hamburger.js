$(document).ready(function () {
    $('.js-hamburger').click(function () {
        $('.hamburger__line').toggleClass('hamburger__line--open');
        $('.page--pos-header').toggleClass('page--open-header');
        $('.logo__svg').toggleClass('logo__svg--fill');
        $('.js-menu').slideToggle();
    })
})