$(function () {
    const navCheck = $('.navigation__checkbox');
    const navLink  = $('.navigation__link');
    const book = $("#book_btn");
    const close = $("#popup__close");
    const popup = $("#popup");
    const open = $(".open_popup");

    // Smooth Scrolling

    var scroll = new SmoothScroll('a[href*="#"]', {

        ignore: '#popup',
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

    navLink.click(function () {
        navCheck.prop('checked', false);
    });

    book.click(function () {
        popup.css({"opacity":"0","visibility":"hidden"});
    });

    close.click(function () {
        popup.css({"opacity":"0","visibility":"hidden"});
    });

    open.click(function () {
        popup.css({"opacity":"1","visibility":"visible"});
        $(".popup__content").css({"opacity": "1","transform": "translate(-50%, -50%) scale(1)"});
    })

});