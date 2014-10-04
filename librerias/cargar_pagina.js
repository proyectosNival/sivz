$(document).on("ready", inicio);
function inicio(){
	
	$("#btn_guardarCliente").on("click",guardarIngresos);
	$("input").tooltip({
       placement : 'bottom'
	});
}

function guardarIngresos(){

	if($("#ci_cliente").val()!="" && $("#nombre_cliente").val()!=""){
		$("#form_cliente").on("submit",function (e){		
			var valores = $("#form_cliente").serialize();
			datos_cliente(valores,"g");
			e.preventDefault();
    		$(this).unbind("submit")
		});
	}
}
function datos_cliente(valores,tipo){
	$.ajax({				
		type: "POST",
		data: valores+"&tipo="+"g",
		url: "../servidor/cliente/clientes.php",			
	    success: function(data) {	
	    	if( data == 0 ){
	    		alert("Datos Guardados Correctamente");
	    		limpiar_form("form_cliente");
	    	}
	    	if( data == 1 ){
	    		alert("Este nro de cédula ya existe ingrese otro");	
	    		$("#ci_cliente").val("");
	    		$("#ci_cliente").focus();
	    	}
	    	if( data == 2 ){
	    		alert("El nro de cédula esta incompleto como mínimo 10 carácteres");	
	    		$("#ci_cliente").val("");
	    		$("#ci_cliente").focus();
	    	}
	    	if( data == 3 ){
	    		alert("Complete todos los campos antes de continuar");	
	    	}
		}
	}); 
}
function limpiar_form(id_formulario){

	$("#"+id_formulario+" input").val("");
}