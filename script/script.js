$(document).ready(function () {
    // contact form
    $("#hello-form").css({ 'display': 'none' }, 0);
    $(".helloButton").click(function () {
        $("#hello-form").css({ 'display': 'block' }, 1000);
        $("#hello-form").animate({ 'opacity': '1' }, 1000);
        $('#main').animate({ 'opacity': '0.2' }, 1000);
    });

    $(".close").click(function () {
        $("#hello-form").css({ 'display': 'none' }, 1000);
        $("#hello-form").animate({ 'opacity': '0' }, 1000);
        $('#main').animate({ 'opacity': '1' }, 1000);
    });

    // newsletter form 

    $("#email-form").css({ 'display': 'none' }, 0);
    $(".subscribeButton").click(function () {
        $("#email-form").css({ 'display': 'block' }, 1000);
        $("#email-form").animate({ 'opacity': '1' }, 1000);
        $('#main').animate({ 'opacity': '0.2' }, 1000);
    });

    $(".close").click(function () {
        $("#email-form").css({ 'display': 'none' }, 1000);
        $("#email-form").animate({ 'opacity': '0' }, 1000);
        $('#main').animate({ 'opacity': '1' }, 1000);
    });

});

