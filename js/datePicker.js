$(function(){
    var horaEscolhaCampo;
    $('input').bind('focus', function() {
        var pos = $(this).offset();
        var width = $(this).width();
        var height = $(this).height();

        $('.escolhaHora').css('left', pos.left);
        $('.escolhaHora').css('top', pos.top + (height*2));
        $('.escolhaHora').show();

        horaEscolhaCampo = $(this);

    });

    $('input').bind('blur', function() {
        setTimeout(function() {
             $('.escolhaHora').hide();
        }, 200);

    });

    $('.escolhaHora button').bind('click', function() {
        var hora = $(this).html();
        horaEscolhaCampo.val(hora);
    });

});