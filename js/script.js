$(document).ready(function() {
	
$("#modal_a1").hide();
$("#modal_a2").hide();
$("#modal_b1").hide();
$("#modal_b2").hide();
$("#modal_c1").hide();
$("#modal_c2").hide();

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

	$("#info_a2").on("click", function(){
		$("#modal_a2").dialog({
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

	$("#info_b1").on("click", function(){
		$("#modal_b1").dialog({
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

	$("#info_b2").on("click", function(){
		$("#modal_b2").dialog({
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

	$("#info_c1").on("click", function(){
		$("#modal_c1").dialog({
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

	$("#info_c2").on("click", function(){
		$("#modal_c2").dialog({
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
