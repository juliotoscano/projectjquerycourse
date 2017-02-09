$(function(){

    $('a.galeria').bind('click', function() {
        var img = $(this).find('img').attr('src');

        $('.divboximg img').attr('src', img);
        $('.divboximg img').attr('height', '100%');
        $('.box, .divboximg').fadeIn('fast');
    });

    $('.box, .fechar').bind('click', function() {
        $('.box, .divboximg').fadeOut('fast');
    });

});