$(".menu__link").on('click', function (e) {
    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});
$(".scroll").on('click', function (e) {
    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});
window.addEventListener('click', function (e) {
    console.log(e.pageY)
}, false);

$(window).scroll(function () {
    const win = $(window).height()
    if ($(this).scrollTop() > 770 - win) {
        $("#wedo .page__caption").addClass("animate__animated animate__rubberBand");
    }
    if ($(this).scrollTop() > 2400 - win) {
        $("#news .page__caption").addClass("animate__animated animate__wobble");
    }
    if ($(this).scrollTop() > 3500 - win) {
        $("#gallery .page__caption").addClass("animate__animated animate__heartBeat");
    }
    if ($(this).scrollTop() > 4700 - win) {
        $("#contacts .page__caption").addClass("animate__animated animate__tada");
    }
})
