$(document).ready(function(){

    $("#boton-continuar-diagnostico").click(function(){

        var uno = $("#uno").prop("checked");
        var dos = $("#dos").prop("checked");
        var tres = $("#tres").prop("checked");
        var cuatro = $("#cuatro").prop("checked");
        var cinco = $("#cinco").prop("checked");

        var valido = false;

        if(uno && !dos && !tres && !cuatro && !cinco){
            enviarPaginaResultados("Tumor testicular");
            valido = true;
        }

        /* aqui esta orquiepididimitis*/

         if(uno && dos && tres && !cuatro && !cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

         if(uno && dos && tres && cuatro && !cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

        if(uno && dos && tres && cuatro && cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

        if(uno && dos && !tres && cuatro && cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

        if(uno && !dos && !tres && cuatro && cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

         if(uno && dos && tres && !cuatro && cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }



        /* aqui esta varicocele*/

        if( !uno && dos && tres && !cuatro && !cinco){
            enviarPaginaResultados("Varicocele");
            valido = true;
        }


        if(!uno && dos && !tres && cuatro && !cinco){
            enviarPaginaResultados("Varicocele");
            valido = true;
        }

        if(!uno && dos && tres && cuatro && !cinco){
            enviarPaginaResultados("Varicocele");
            valido = true;
        }

        if(!uno && !dos && !tres && cuatro && cinco){
            enviarPaginaResultados("Varicocele");
            valido = true;
        }

        /* aqui esta hidrocele */

        if(uno && !dos && !tres && cuatro && !cinco){
            enviarPaginaResultados("Hidrocele");
            valido = true;
        }


        /* CASOS ESPECIALES*/
        /* aqui esta fiebre */

        

        if(!uno && !dos && tres && !cuatro && !cinco){
            enviarPaginaResultados("Proporciona mas información");
            valido = true;
        }

        if(!uno && !dos && !tres && cuatro && !cinco){
            enviarPaginaResultados("Proporciona mas información");
            valido = true;
        }

        if(!uno && !dos && !tres && !cuatro && cinco){
            enviarPaginaResultados("Proporciona mas información");
            valido = true;
        }


        if(!valido){
            enviarPaginaResultados("No registrado");
        }

        // aqui los nuevos que agregue 

        // ***** VARICOCELE *****

        // agergue dolor en esl testiculo solamente

        if(!uno && dos && !tres && !cuatro && !cinco){
            enviarPaginaResultados("Varicocele");
            valido = true;
        }

        // Dolor e inflamacion

        if(!uno && dos && tres && !cuatro && !cinco){
            enviarPaginaResultados("Varicocele");
            valido = true;
        }

        // ***** ORQUIEPIDIDIMITIS *****

        // agregue otro de orquiepidimitis sin sensbilidad

        if(uno && dos && tres && !cuatro && cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

        // 

        // agregue otro de orquiepidimitis sin volumen

        if(!uno && dos && tres && cuatro && cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

        //

        // agregue otro de orquiepidimitis sin inflamación

        if(uno && dos && !tres && cuatro && cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

        //

        // agregue otro de orquiepidimitis sin volumen e inflamación

        if(uno && dos && tres && !cuatro && cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

        // quitando volumen y sensibilidad

        if(!uno && dos && tres && !cuatro && cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

        if(!uno && !dos && tres && !cuatro && cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

        // solo los 3 primeros 

        if(uno && dos && tres && !cuatro && !cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

        //

        // 1, 2 y 5 

        if(uno && dos && !tres && !cuatro && cinco){
            enviarPaginaResultados("Orquiepididimitis");
            valido = true;
        }

        //


        //

    });

    function enviarPaginaResultados(enfermedad){

        window.location.replace("resultadoUno.html?diagnostico=" + enfermedad);

    }

});