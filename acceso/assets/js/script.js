$(document).ready(function() {
    
    // Ocultar subpaneles de búsqueda tras la carga inicial de la página.
    $("#subpanel-busqueda-profesor").hide();
    $("#subpanel-busqueda-alumno").hide();

    // Capturamos el año actual para adaptarlo al copyright del footer.
    $("#fechaActual").append((new Date).getFullYear());
    
    /*** MODALES DE REGISTRO ***/
        
    // Comprobamos que la fecha lleve un 0 delante en el día o mes cuando éstos son < 10.
    if((new Date).getDate() < 10 && (new Date).getMonth() < 10){
       $("#fecha-alta-profesor, #fecha-alta-alumno, #fecha-alta-noticiario, #fecha-alta-gestor").
       val("0" + (new Date).getDate() + "/0" + ((new Date).getMonth()+1) + "/" + (new Date).getFullYear()); 
    }else
        if((new Date).getMonth() < 10){
            $("#fecha-alta-profesor, #fecha-alta-alumno, #fecha-alta-noticiario, #fecha-alta-gestor").
            val("0" + (new Date).getDate() + "/" + ((new Date).getMonth()+1) + "/" + (new Date).getFullYear());
        }else 
            if((new Date).getDate() < 10){
                 $("#fecha-alta-profesor, #fecha-alta-alumno, #fecha-alta-noticiario, #fecha-alta-gestor").
                 val((new Date).getDate() + "/0" + ((new Date).getMonth()+1) + "/" + (new Date).getFullYear());
            }
    
            
        
    $("#fecha-nacimiento-profesor, #fecha-nacimiento-alumno").datepicker();
    
    // Cuando boton-collapse que es el botón de menú en dispositivo mobile se abre, no le daremos ninguna funcionalidad
    // a los elementos del body.
    $("#boton-collapse").on("click", function(){
        if ($("#boton-collapse").attr("aria-expanded") === "false"){
            $(".container").css("opacity", 0.2);
            $(".container").css("pointer-events", "none");
            $("body").css("overflow", "hidden");
        }else 
            if($("#boton-collapse").attr("aria-expanded") === "true"){
                $(".container").css("opacity", 1);
                $(".container").css("pointer-events", "auto");
                $("body").css("overflow", "auto");
            }
    });
    
    /*** SUBPANELES DE BÚSQUEDA ***/
    $("#busqueda-profesor").on("click", function(){     
        $(".panel-opciones").hide();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./buscar-elemento.html'> Buscar elemento </a>"+
                                               "/ Búsqueda de profesor </h1>");
        $("#subpanel-busqueda-profesor").show();
    });
    
    $("#busqueda-alumno").on("click", function(){
        $(".panel-opciones").hide();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./buscar-elemento.html'> Buscar elemento </a>"+
                                               "/ Búsqueda de alumno </h1>");
        $("#subpanel-busqueda-alumno").show();
    });
    
    
});
