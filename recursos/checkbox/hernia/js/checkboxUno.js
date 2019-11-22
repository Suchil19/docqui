$(document).ready(function(){

    $("#boton-continuar-diagnostico").click(function(){

        var uno = $("#uno").prop("checked");
        var dos = $("#dos").prop("checked");
        var tres = $("#tres").prop("checked");
        var cuatro = $("#cuatro").prop("checked");
        var cinco = $("#cinco").prop("checked");
        var seis = $("#seis").prop("checked");

        var valido = false;

        if(uno && !dos && !tres && !cuatro && !cinco && !seis){
            enviarPaginaResultados("Hernia Inguinal");
            valido = true;
        }

        /* aqui esta orquiepididimitis*/

         if(!uno && dos && !tres && !cuatro && !cinco && !seis){
            enviarPaginaResultados("Epididimitis");
            valido = true;
        }

          if(!uno && !dos && tres && !cuatro && !cinco && !seis){
            enviarPaginaResultados("I.V.U");
            valido = true;
        }

          if(!uno && !dos && !tres && cuatro && !cinco && !seis){
            enviarPaginaResultados("Hernia Inguinal");
            valido = true;
        }

         if(!uno && !dos && !tres && !cuatro && cinco && !seis){
            enviarPaginaResultados("Proporciona mas datos");
            valido = true;
        }

        if(!uno && !dos && !tres && !cuatro && !cinco && seis){
            enviarPaginaResultados("Proporciona mas datos");
            valido = true;
        }

        if(uno && dos && !tres && cuatro && cinco && seis){
            enviarPaginaResultados("Hernia Inguinal");
            valido = true;
        }

        if(!uno && !dos && !tres && !cuatro && cinco && seis){
            enviarPaginaResultados("Hernia Inguinal");
            valido = true;
        }

        if(uno && dos && !tres && !cuatro && !cinco && !seis){
            enviarPaginaResultados("Hernia Inguinal");
            valido = true;
        }

        if(uno && dos && !tres && cuatro && !cinco && !seis){
            enviarPaginaResultados("Hernia Inguinal");
            valido = true;
        }

        if(uno && dos && !tres && !cuatro && !cinco && !seis){
            enviarPaginaResultados("Hernia Inguinal");
            valido = true;
        }

        if(uno && dos && tres && cuatro && cinco && seis){
            enviarPaginaResultados("No hay coincidencias");
            valido = true;
        }

        if(uno && dos && !tres && cuatro && cinco && !seis){
            enviarPaginaResultados("Hernia Inguinal");
            valido = true;
        }

        if(uno && dos && !tres && cuatro && !cinco && !seis){
            enviarPaginaResultados("Hernia Inguinal");
            valido = true;
        }

        if(uno && dos && !tres && !cuatro && cinco && !seis){
            enviarPaginaResultados("Hernia Inguinal");
            valido = true;
        }

        if(uno && !dos && !tres && !cuatro && cinco && seis){
            enviarPaginaResultados("Hernia Inguinal");
            valido = true;
        }

        if(!uno && dos && tres && !cuatro && cinco && seis){
            enviarPaginaResultados("I.V.U");
            valido = true;
        }

         if(!uno && dos && !tres && !cuatro && cinco && seis){
            enviarPaginaResultados("I.V.U");
            valido = true;
        }

    });

    function enviarPaginaResultados(enfermedad){

        window.location.replace("resultadoUno.html?diagnostico=" + enfermedad);

    }

});