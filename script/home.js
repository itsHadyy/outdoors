$(document).ready(function () {

    $("#hiddenSection").hide();

    $("#more").click(function () {
        $("#hiddenSection").slideDown(2000);
        $("#less").show();
        $("#more").hide();
    });

    $("#less").click(function () {
        $("#hiddenSection").slideUp(1000);
        $("#less").hide();
        $("#more").show();
    });

    $('#card01').animate({ opacity: 0 }, 0);
    $('#card02').animate({ opacity: 0 }, 0);
    $('#card03').animate({ opacity: 0 }, 0);

    // $('body').css({ 'overflow': 'hidden' });

    // $('#start').click(function () {
    //     $('.header01').hide(0);
    //     $('header').css({ 'height': '80px' });
    //     $('.first-section').css({ 'padding-top': '320px' })
    //     $('body').css({ 'overflow': 'scroll' });
    // });


    $(window).on('load resize scroll', function () {


        if ($(window).scrollTop() >= 80) {
            $('.header01').hide(0);
            $('header').css({ 'height': '80px' });
            $('.first-section').css({ 'padding-top': '320px' })
        }
        if ($(window).scrollTop() < 80) {
            $('.header01').slideDown(1000);
            $('header').css({ 'height': '100vh' });
            $('.first-section').css({ 'padding-top': '100vh' })
        }

        if ($(window).scrollTop() >= 100) {
            $('#card01').animate({ opacity: 1 }, 1500);
            $('#card02').animate({ opacity: 1 }, 3000);
            $('#card03').animate({ opacity: 1 }, 4500);
        }
    });
});