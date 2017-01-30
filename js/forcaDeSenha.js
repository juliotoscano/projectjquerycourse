$(function () {

    $('#password').bind('keyup', function() {

        var txt = $(this).val();
        var forca = 0;

        //letras
        var reg = new RegExp(/[a-z]/i);
        if (reg.test(txt)) {
            forca +=25;
        }

        //numero
        var reg = new RegExp(/[0-9]/i);
        if (reg.test(txt)) {
            forca +=25;
        }

        //tamanho
        if (txt.length >5) {
            forca +=25;
        }

        //caracteres especiais
        var reg = new RegExp(/[^a-z0-9]/i);
        if (reg.test(txt)) {
            forca +=25;
        }

        $('#forca').html('<p>Força: '+forca+'</p>');

    });

});