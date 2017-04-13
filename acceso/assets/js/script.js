$(document).ready(function() {
    
    // Ocultar subpaneles de búsqueda, incidencias, ... tras la carga inicial de la página.
    $("#subpanel-busqueda-profesor").hide();
    $("#subpanel-busqueda-alumno").hide();
    $("#subpanel-busqueda-noticiario").hide();
    $("#subpanel-busqueda-gestor").hide();
    $("#subpanel-incidencia-profesor").hide();
    $("#subpanel-incidencia-alumno").hide();

    // Capturamos el año actual para adaptarlo al copyright del footer.
    $("#fechaActual").append((new Date).getFullYear());
    
    /*** MODALES DE REGISTRO ***/
        
    // Comprobamos que la fecha lleve un 0 delante en el día o mes cuando éstos son < 10.
    if((new Date).getDate() < 10 && (new Date).getMonth() < 10){
       $("#fecha-alta-profesor, #fecha-alta-alumno, #fecha-alta-noticiario, #fecha-alta-gestor").
       val("0" + (new Date).getDate() + "/0" + ((new Date).getMonth()+1) + "/" + (new Date).getFullYear()); 
        
        // Fecha (Modificar ver-perfil.html de Gestor)
        $("#alta-modificar-gest-perfil").val
            
       // Aprovechamos la condición para añadir artículo. (Fecha de publicación)
       $("#fecha-publ").append("0" + (new Date).getDate() + "/0" + ((new Date).getMonth()+1) + "/" + (new Date).getFullYear());
        
    }else
        if((new Date).getDate() < 10){
            $("#fecha-alta-profesor, #fecha-alta-alumno, #fecha-alta-noticiario, #fecha-alta-gestor").
            val("0" + (new Date).getDate() + "/" + ((new Date).getMonth()+1) + "/" + (new Date).getFullYear());
            
            // Aprovechamos la condición para añadir artículo. (Fecha de publicación)
            $("#fecha-publ").append("0" + (new Date).getDate() + "/" + ((new Date).getMonth()+1) + "/" + (new Date).getFullYear());
            
        }else 
            if((new Date).getMonth() < 10){
                 $("#fecha-alta-profesor, #fecha-alta-alumno, #fecha-alta-noticiario, #fecha-alta-gestor").
                 val((new Date).getDate() + "/0" + ((new Date).getMonth()+1) + "/" + (new Date).getFullYear());
                
                  // Aprovechamos la condición para añadir artículo. (Fecha de publicación)
                  $("#fecha-publ").append((new Date).getDate() + "/0" + ((new Date).getMonth()+1) + "/" + (new Date).getFullYear());
                
            }            
        
    $("#fecha-nacimiento-profesor, #fecha-nacimiento-alumno, #fnac-modificar-alumn-perfil").datepicker();
    
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
    
    $("#busqueda-noticiario").on("click", function(){
        $(".panel-opciones").hide();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./buscar-elemento.html'> Buscar elemento </a>"+
                                               "/ Búsqueda de noticiario </h1>");
        $("#subpanel-busqueda-noticiario").show();
    });
    
    $("#busqueda-gestor").on("click", function(){
        $(".panel-opciones").hide();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./buscar-elemento.html'> Buscar elemento </a>"+
                                               "/ Búsqueda de gestor </h1>");
        $("#subpanel-busqueda-gestor").show();
    });
    
    /*** SUBPANELES DE INCIDENCIAS ***/
    $("#incidencias-profesor").on("click", function(){     
        $(".panel-opciones").hide();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./ver-incidencias.html'> Tipo de incidencia </a>"+
                                               "/ Incidencias de profesor </h1>");
        $("#subpanel-incidencia-profesor").show();
    });
    
    $("#incidencias-alumno").on("click", function(){     
        $(".panel-opciones").hide();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./ver-incidencias.html'> Tipo de incidencia </a>"+
                                               "/ Incidencias de alumno </h1>");
        $("#subpanel-incidencia-alumno").show();
    });
    
    /*** Añadiendo fecha de publicación de artículo ***/
    
    
    
});
