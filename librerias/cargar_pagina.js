$(document).on("ready", inicio);
function inicio(){
	$("#btn_guardarCliente").on("click",guardarIngresos);
	$("#btn_limpiarIngreso").on("click",limpiar_form);
	$("#btn_buscarCliente").on("click",modal)
	$("input").tooltip({
       placement : 'top'
	});
	$("input").keyup(function (e){
		comprobarCamposRequired(e.currentTarget.form.id)
	});
}
function modal(e){
	$('#modalBusquedas').modal('show');
	buscar_clientes();
	$("#tabla_busquedas").trigger('reloadGrid');
}
function guardarIngresos(){
	var resp=comprobarCamposRequired("form_cliente");
	if(resp==true){
		$("#form_cliente").on("submit",function (e){		
			var valores = $("#form_cliente").serialize();
			var texto=$("#btn_guardarCliente").text();	
			if(texto==" Guardar"){		
				datos_cliente(valores,"g",e);
			}else{
				datos_cliente(valores,"m",e);
			}
			e.preventDefault();
    		$(this).unbind("submit")
		});
	}
}
function datos_cliente(valores,tipo,p){
	$.ajax({				
		type: "POST",
		data: valores+"&tipo="+tipo,
		url: "../servidor/cliente/clientes.php",			
	    success: function(data) {	
	    	if( data == 0 ){
	    		alert("Datos enviados Correctamente");
	    		limpiar_form(p);
	    	}
	    	if( data == 1 ){
	    		alert("Este nro de cédula ya existe ingrese otro");	
	    		$("#ci_ruc_cliente").val("");
	    		$("#ci_ruc_cliente").focus();
	    		$(this).parent().removeClass('has-success');
	    		$(this).parent().addClass('has-error');
	    	}
	    	if( data == 2 ){
	    		alert("El nro de cédula esta incompleto como mínimo 10 carácteres");	
	    		$("#ci_ruc_cliente").val("");
	    		$("#ci_ruc_cliente").focus();
	    		$(this).parent().removeClass('has-success');
	    		$(this).parent().addClass('has-error');
	    	}
	    	if( data == 3 ){
	    		alert("Complete todos los campos antes de continuar");	
	    	}
		}
	}); 
}
function limpiar_form(e){
	if(e.type == "click"){
		$("#"+e.currentTarget.form.id+" input").val("");
		comprobarCamposRequired(e.currentTarget.form.id)		
	}else{
		$("#"+e.target.id+" input").val("");
		comprobarCamposRequired(e.target.id)		
	}
	$("#btn_guardarCliente").text("");
    $("#btn_guardarCliente").append("<span class='glyphicon glyphicon-log-in'></span> Guardar");     
}

function comprobarCamposRequired(form){
   	var correcto=true;
   	var campos=$('#'+form+' input[type="text"]:required');
   	$(campos).each(function() {
	   	var pattern = new RegExp("^" + $(this)[0].pattern + "$");
      	if($(this).val() != '' && pattern.test($(this).val())){
	        $(this).parent().removeClass('has-error');
    	  	$(this).parent().addClass('has-success');
	      }else{
    	  	correcto=false;
        	$(this).parent().addClass('has-error');
      	}
   	});
   	return correcto;
}
