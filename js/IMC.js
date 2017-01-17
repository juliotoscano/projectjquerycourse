function descricaoDeResultado(resultado) {
    if(resultado < 20.7){
        $('#descricao').html('Voce está abaixo do peso');
    }else{
        if (resultado < 26.5) {
            $('#descricao').html('Peso normal');
        }else{
            if (resultado < 27.9) {
                $('#descricao').html('Marginalmente acima do peso');
            }else{
                if (resultado < 31.2) {
                    $('#descricao').html('Acima do peso ideal');
                }else{
                    $('#descricao').html('Obeso');
                }
            }
        }
    }
};

$(function(){
    var peso = 0;
    var altura;
    var resultado;
    $('#peso').bind('keyup',function(){
        peso = $(this).val();
        if(altura == 0){

        }else{
            resultado = peso / altura;
            $('#resultado').val(resultado);
            descricaoDeResultado(resultado);
        }
    });
    $('#altura').bind('keyup',function(){
        altura = $(this).val();
        altura = altura * altura;
        if (peso == 0) {

        }else{
            resultado = peso / altura;
            $('#resultado').val(resultado);
            descricaoDeResultado(resultado);
        }
    });
});