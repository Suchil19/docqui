$(document).ready(function(){

    $("#boton-continuar-diagnostico").click(function(){

        var uno = $("#uno").prop("checked");
        var dos = $("#dos").prop("checked");
        var tres = $("#tres").prop("checked");
        var cuatro = $("#cuatro").prop("checked");
        var cinco = $("#cinco").prop("checked");

        var valido = false;

        if(uno && dos && !tres && !cuatro && cinco){
            enviarPaginaResultados("Litiasis");
            valido = true;
        }

        if(!uno && dos && !tres && cuatro && !cinco){
            enviarPaginaResultados("I.V.U");
            valido = true;
        }

         if(!uno && dos && !tres && !cuatro && cinco){
            enviarPaginaResultados("I.V.U");
            valido = true;
        }

        if(uno && !dos && !tres && !cuatro && !cinco){
            enviarPaginaResultados("I.V.U");
            valido = true;
        }

        if(uno && dos && !tres && !cuatro && !cinco){
            enviarPaginaResultados("I.V.U");
            valido = true;
        }

        if(uno && dos && tres && cuatro && cinco){
            enviarPaginaResultados("litiasis");
            valido = true;
        }

        



      

        //


        //

    });

    function enviarPaginaResultados(enfermedad){

        window.location.replace("resultadoUno.html?diagnostico=" + enfermedad);

    }

});