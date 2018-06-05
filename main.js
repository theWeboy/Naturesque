$(function () {
    const navCheck = $('.navigation__checkbox');
    const navLink  = $('.navigation__link');

    navLink.click(function () {
        console.log("click");
        navCheck.prop('checked', false);
    });

    // Smooth Scrolling

    var scroll = new SmoothScroll('a[href*="#"]', {

        header: null,
        topOnEmptyHash: true,

        speed: 1500,
        clip: true,
        offset: 0,
        easing: 'easeInOutCubic',

        updateURL: true,
        popstate: true,

        emitEvents: true

    });
});