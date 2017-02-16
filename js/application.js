
function clock() {
    var s = 1;
    var m = 1;
    var stop = false;
    var intervalo;
    //var h = 0;
    intervalo = window.setInterval(function() {
        if (s == 0) {
            if (stop) {
                document.getElementById("segundo").innerHTML = "0"+ s + "s";
                window.clearInterval(intervalo);
            }else{
                m--;
                s = 59;
                stop = true;
            }
        }
        // if (h < 10) document.getElementById("hora").innerHTML = "0" + h + "h"; else document.getElementById("hora").innerHTML = h + "h";
        if (s < 10) document.getElementById("segundo").innerHTML = "0" + s + "s"; else document.getElementById("segundo").innerHTML = s + "s";
        if (m < 10) document.getElementById("minuto").innerHTML = "0" + m + "m"; else document.getElementById("minuto").innerHTML = m + "m";
        s--;
    },1000);

    $('.panel-collapse  ').on('hidden.bs.collapse', function () {
        window.clearInterval(intervalo);
    });

}

//collapse

$(function() {
    $('.panel-collapse').on('show.bs.collapse', function () {
        var heading = '#' + $(this).attr('aria-labelledby');
        $(heading).find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up').css('color', '#FFFFFF');
        $(this).find('.panel-body').prepend('<p><span id="minuto">00m</span> <span id="segundo">00s</span></p>');
        clock();
    });
    $('.panel-collapse  ').on('hidden.bs.collapse', function () {
        var heading = '#' + $(this).attr('aria-labelledby');
        $(heading).find('.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down').css('color', '#FFFFFF');
        $(this).find('.panel-body').html(' cifra');
    });

    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

})