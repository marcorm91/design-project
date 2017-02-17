$(document).ready(function() {
	
$("#modal_a1").hide();

	$("#info_a1").on("click", function(){
	 
		$("#modal_a1").dialog({
					closeOnEscape: false,
					open: function(event, ui) 
						{ 
							$(".ui-dialog-titlebar-close", ui.dialog).hide(); 
						},
				    modal: true,
				    draggable: false,
				    resizable: false,
				    show: { effect: "blind", duration: 800 },
    				hide: 'blind',
				    width: $(window).width()-20,
				    height: $(window).height()-20,
				    buttons: {
		        		"CERRAR": function() {
		        			$("body").css("overflow", "auto");
		            		$(this).dialog("close");
		        		}
		    		}
		});

		$("body").css("overflow", "hidden");

	});

});
