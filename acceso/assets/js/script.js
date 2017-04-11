$(document).ready(function() {
    
    // Ocultar subpaneles de búsqueda, incidencias, ... tras la carga inicial de la página.
    $("#subpanel-busqueda-profesor").hide();
    $("#subpanel-busqueda-alumno").hide();
    $("#subpanel-busqueda-noticiario").hide();
    $("#subpanel-busqueda-gestor").hide();
    $("#subpanel-busqueda-curso").hide();
    $("#subpanel-busqueda-curso").hide();
    $("#subpanel-eliminar-profesor").hide();
    $("#subpanel-eliminar-alumno").hide();
    $("#subpanel-eliminar-noticiario").hide();
    $("#subpanel-eliminar-curso").hide();
    $("#subpanel-eliminar-gestor").hide();
    $("#subpanel-incidencia-alumno").hide();
    $("#subpanel-incidencia-profesor").hide();
    

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
        $(".panel-opciones").slideToggle();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./buscar-elemento.html'> Buscar elemento </a>"+
                                               "/ Búsqueda de profesor </h1>");
        $("#subpanel-busqueda-profesor").slideToggle();
    });
    
    $("#busqueda-alumno").on("click", function(){
        $(".panel-opciones").slideToggle();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./buscar-elemento.html'> Buscar elemento </a>"+
                                               "/ Búsqueda de alumno </h1>");
        $("#subpanel-busqueda-alumno").slideToggle();
    });
    
    $("#busqueda-noticiario").on("click", function(){
        $(".panel-opciones").slideToggle();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./buscar-elemento.html'> Buscar elemento </a>"+
                                               "/ Búsqueda de noticiario </h1>");
        $("#subpanel-busqueda-noticiario").slideToggle();
    });
    
    $("#busqueda-gestor").on("click", function(){
        $(".panel-opciones").slideToggle();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./buscar-elemento.html'> Buscar elemento </a>"+
                                               "/ Búsqueda de gestor </h1>");
        $("#subpanel-busqueda-gestor").slideToggle();
    });
    
    /*** SUBPANELES DE INCIDENCIAS ***/
    $("#incidencias-profesor").on("click", function(){     
        $(".panel-opciones").slideToggle();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./ver-incidencias.html'> Tipo de incidencia </a>"+
                                               "/ Incidencias de profesor </h1>");
        $("#subpanel-incidencia-profesor").slideToggle();
    });
    
    $("#incidencias-alumno").on("click", function(){     
        $(".panel-opciones").slideToggle();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./ver-incidencias.html'> Tipo de incidencia </a>"+
                                               "/ Incidencias de alumno </h1>");
        $("#subpanel-incidencia-alumno").slideToggle();
    });
    
    /*** SUBPANELES DE BÚSQUEDA ***/
    $("#busqueda-curso").on("click", function(){     
        $(".panel-opciones").slideToggle();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./buscar-elemento.html'> Buscar elemento </a>"+
                                               "/ Búsqueda de curso </h1>");
        $("#subpanel-busqueda-curso").slideToggle();
    });
    
    /*** SUBPANELES DE ELIMINAR ***/
    $("#eliminar-profesor").on("click", function(){     
        $(".panel-opciones").slideToggle();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./eliminar-elemento.html'> Eliminar Elemento </a>"+
                                               "/ Eliminar profesor </h1>");
        $("#subpanel-eliminar-profesor").slideToggle();
    });
    
    $("#eliminar-alumno").on("click", function(){     
        $(".panel-opciones").slideToggle();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./eliminar-elemento.html'> Eliminar Elemento </a>"+
                                               "/ Eliminar alumno </h1>");
        $("#subpanel-eliminar-alumno").slideToggle();
    });
    
    $("#eliminar-curso").on("click", function(){     
        $(".panel-opciones").slideToggle();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./eliminar-elemento.html'> Eliminar Elemento </a>"+
                                               "/ Eliminar curso </h1>");
        $("#subpanel-eliminar-curso").slideToggle();
    });
    
    $("#eliminar-noticiario").on("click", function(){     
        $(".panel-opciones").slideToggle();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./eliminar-elemento.html'> Eliminar Elemento </a>"+
                                               "/ Eliminar noticiario </h1>");
        $("#subpanel-eliminar-noticiario").slideToggle();
    });
    
    $("#eliminar-gestor").on("click", function(){     
        $(".panel-opciones").slideToggle();
        $(".panel-principal > h1").replaceWith("<h1><a href='../principal-gestor.html'>Panel Principal</a> "+
                                               "/ <a href='./eliminar-elemento.html'> Eliminar Elemento </a>"+
                                               "/ Eliminar gestor </h1>");
        $("#subpanel-eliminar-gestor").slideToggle();
    });
     
    
    
});
