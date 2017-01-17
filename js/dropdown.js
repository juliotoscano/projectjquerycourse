$(function(){

    $('li').hover(function() {
        $(this).find('.menu2').slideDown();
        $(this).css('background-color','#616161');
    }, function() {
        $(this).find('.menu2').slideUp();
        $(this).css('background-color','#000');
    });


});