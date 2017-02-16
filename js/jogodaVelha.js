var vez = 'x';

function atualizar_placar() {
    if (vez =='o') {
        $('.placar img').attr('src', 'img/o.png');
    }else{
        $('.placar img').attr('src', 'img/x.jpg');
    }
};

function verificar_campeao() {

    //obtendo o valor dos espaços.
    var a1 = $('.a1').attr('data-marcado');
    var a2 = $('.a2').attr('data-marcado');
    var a3 = $('.a3').attr('data-marcado');

    var b1 = $('.b1').attr('data-marcado');
    var b2 = $('.b2').attr('data-marcado');
    var b3 = $('.b3').attr('data-marcado');

    var c1 = $('.c1').attr('data-marcado');
    var c2 = $('.c2').attr('data-marcado');
    var c3 = $('.c3').attr('data-marcado');

    var ganhador = '';

    for (var i = 0; i <= 1; i++) {

        //verificar quem ganhou por jogador.
        if (i = 0) {
            var op = 'o';
        }else{
            var op = 'x';
        }

        //verificar possibilidades para vencer a partida.
        if (a1 == op && b1 == op && c1 == op) {
            ganhador = op;
        }else if (a2 == op && b2 == op && c2 == op) {
            ganhador = op;
        }else if (a3 == op && b3 == op && c3 == op) {
            ganhador = op;
        }else if (a1 == op && a2 == op && a3 == op) {
            ganhador = op;
        } else if (b1 == op && b2 == op && b3 == op) {
            ganhador = op;
        }else if (c1 == op && c2 == op && c3 == op) {
            ganhador = op;
        }else if (a1 == op && b2 == op && c3 == op) {
            ganhador = op;
        }else if (a3 == op && b2 == op && c1 == op) {
            ganhador = op;
        }

    }

    if (ganhador != '') {
        if (ganhador == 'o') {
            alert("O GANHADOR FOI: O");
        }else{
            alert("O GANHADOR FOI: X");
        }

        $('.area').html('');
        $('.area').attr('data-marcado', '');

    }else if (a1 != '' && a2 != '' && a3 != '' && b1 != '' && b2 != '' && b3 != '' && c1 != '' && c2 != '' && c3 != ''){
        alert("EMPATE");
    }

}

$(function() {

    //atualiza o placar ao iniciar cada rodada.
    atualizar_placar();

    //adiciona a imagem caso já nao esteja marcado.
    $('.area').bind('click', function() {

        if ( $(this).find('img').length == 0) {

            if (vez == 'o') {
                $(this).html('<img src="img/o.png" border="0" height="45px"></img>');
                $(this).attr('data-marcado', 'o');
                vez = 'x';
            }else{
                $(this).html('<img src="img/x.jpg" border="0" height="45px"></img>');
                $(this).attr('data-marcado', 'x');
                vez = 'o';
            }

            atualizar_placar();

            //verificar_campeao();

        }

    });


});