//Nao estou conseguindo executar o tempo apos passar de musica.


function nextMusic() {
    $('.panel-collapse').collapse('hide');
    $('#collapseTwo').collapse('show');
}

function clock() {
    var s = 2;
    var m = 0;
    var stop = true;
    var intervalo;
    //var h = 0;

    intervalo = window.setInterval(function() {
        if (s == 0) {
            //Verificar quando estamos no minuto zero. O Stop sendo True significa que podemos parar quando
            //os sergundos chegarem a zero.
            if (stop) {
                document.getElementById("segundo").innerHTML = "0"+ s + "s";
                window.clearInterval(intervalo);
                nextMusic();
            }else{
                //A principio as musicas terao 2m30s de duracao. Dessa forma:
                m--;
                s = 59;
                //Quando minuto for igual a zero então daremos a ordem para quando os segundos voltarem
                //a zero o stop ja estar sendo True.
                if (m=0) {
                    stop = true;
                }
            }
        }

        // if (h < 10) document.getElementById("hora").innerHTML = "0" + h + "h"; else document.getElementById("hora").innerHTML = h + "h";
        if (s < 10) document.getElementById("segundo").innerHTML = "0" + s + "s"; else document.getElementById("segundo").innerHTML = s + "s";
        if (m < 10) document.getElementById("minuto").innerHTML = "0" + m + "m"; else document.getElementById("minuto").innerHTML = m + "m";
        s--;
    },1000);

    //Se houver o evento para esconder o collapse, entao sera acionado para que o evento de intervalo pare.
    $('.panel-collapse').on('hidden.bs.collapse', function () {
        window.clearInterval(intervalo);
        statusIntervalo = true;
        $(this).find('.panel-body').html(' cifra');
    });

};

$(function() {

    //Esconder todos os collapses antes de mostrar algum outro.
    $('.panel-heading').bind('mousedown', function() {
        $('.panel-collapse').off('show.bs.collapse');
        $('.panel-collapse').collapse('hide');
    });

    //Identifica quando o collapse fechar, primeiro muda o icone depois insere o relogio e chama a funcao.
    //Quando fechar muda o icone. A desativacao do relogio esta sendo feito na propria funcao
    $('.panel-heading').bind('mouseup', function() {
        $('.panel-collapse').on('show.bs.collapse', function () {
        var heading = '#' + $(this).attr('aria-labelledby');
        $(heading).find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up').css('color', '#FFFFFF');
        $(this).find('.panel-body').prepend('<p><span id="minuto">00m</span> <span id="segundo">00s</span></p>');
        clock();
        });
        $('.panel-collapse  ').on('hidden.bs.collapse', function () {
            var heading = '#' + $(this).attr('aria-labelledby');
            $(heading).find('.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down').css('color', '#FFFFFF');
        });

    });

    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

})