function addBola() {
    var x = Math.floor(Math.random()*800);
    var y = Math.floor(Math.random()*500);
    var cor = Math.floor(Math.random()*4);
    // As Cores das bolas seram azul, vermelho, amarelo, preto, verde

    var bola = $('<div class="bola"></div>');
    bola.css('left', x+ 'px');
    bola.css('top', y+ 'px');
    switch(cor){
        case 0:
            bola.css('background-color','blue');
            break;
        case 1:
            bola.css('background-color','red');
            break;
        case 2:
            bola.css('background-color','yellow');
            break;
        case 3:
            bola.css('background-color','black');
            break;
        case 4:
            bola.css('background-color','green');
            break;
    }

    bola.bind('click', function() {
        $(this).fadeOut('fast');

        pontuacao++;
        updatePontuacao();
    });

    $(document.body).append(bola);
}

function updatePontuacao() {
    $('#pontuacao').html(pontuacao);
}

var pontuacao = 0;

$(function() {
    $('#comecar').bind('click', function() {
        $(this).remove();
        $('<button id="fim">terminar</button>').appendTo('.placar');
        var intervalo = setInterval(addBola, 1000);
        $('#fim').bind('click', function() {
            $('.bola').remove();
            clearInterval(intervalo);
            $(this).remove();
            $('<p>Fim de jogo.</p>').appendTo('.placar');
        });
    });
});