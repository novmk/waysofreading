$(document).ready(function() {


    $(".scroll").click(function (e){
        var toLink = $(this).attr('alt');
        var linkTop = $('#' + toLink).offset().top - $('#' + toLink).height()/2.64;
        $('html, body').animate({
            scrollTop: linkTop
        }, 2000);
        e.preventDefault();
    });

    $(".prompt").click(function (e){
        $(".prompt").fadeOut();
        $(".main_container.exp").css("overflow", "auto");
        $(".main_container.exp").css("height", "auto");
        e.preventDefault();
    });


});


