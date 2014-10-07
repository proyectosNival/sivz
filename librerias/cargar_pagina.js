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
	$("#tabla_busquedas").click(function (e){
		var cont=0;
		$("#tabla_busquedas tbody tr").each(function (index) {                                                                 
			$(this).children("td").each(function (index) {                               
				switch (index) {                                            
					case 0:
	    				alert( $(this).text());                                       
					break;      	                                                                                                                    
					case 1:
	    				alert( $(this).text());                                       
					break;
					case 2:
	    				alert( $(this).text());                                       
					break;
					case 3:
	    				alert( $(this).text());                                       
					break;
					case 4:
	    				alert( $(this).text());                                       
					break;
					case 5:
	    				alert( $(this).text());                                       
					break;      	                                                                                                                    					
				}                                          
			});               
		});
	});
}
function modal(e){
	$('#modalBusquedas').modal('show');
	$("#tabla_busquedas").html("");
	$("#tabla_busquedas").append("<thead><tr><th class='warning'>ID</th><th class='warning'>CI</th><th class='warning'>Nombres</th><th class='warning'>Celular</th><th class='warning'>Télefono</th><th class='warning'>Dirección</th></tr></thead><tbody><tr></tr></tbody>");
	if(e.currentTarget.form.id == "form_cliente"){
		cargar_cliente();
	}
}
function guardarIngresos(){
	var resp=comprobarCamposRequired("form_cliente");
	if(resp==true){
		$("#form_cliente").on("submit",function (e){		
			var valores = $("#form_cliente").serialize();
			datos_cliente(valores,"g",e);
			e.preventDefault();
    		$(this).unbind("submit")
		});
	}
}
function datos_cliente(valores,tipo,p){
	$.ajax({				
		type: "POST",
		data: valores+"&tipo="+"g",
		url: "../servidor/cliente/clientes.php",			
	    success: function(data) {	
	    	if( data == 0 ){
	    		alert("Datos Guardados Correctamente");
	    		limpiar_form(p);
	    	}
	    	if( data == 1 ){
	    		alert("Este nro de cédula ya existe ingrese otro");	
	    		$("#ci_cliente").val("");
	    		$("#ci_cliente").focus();
	    		$(this).parent().removeClass('has-success');
	    		$(this).parent().addClass('has-error');
	    	}
	    	if( data == 2 ){
	    		alert("El nro de cédula esta incompleto como mínimo 10 carácteres");	
	    		$("#ci_cliente").val("");
	    		$("#ci_cliente").focus();
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
function cargar_cliente(){
	$.ajax({        
        type: "POST",
        dataType: 'json',
        url: "../servidor/cliente/buscar_cliente.php",        
        success: function(response) {     
            var cont=1;
            for (var i = 0; i < response.length; i=i+6) {
                $("#tabla_busquedas tbody").append( "<tr><td>" + response[i] + "</td>" + "<td>" + response[i+1] + "</td>" + "<td>" + response[i+2] + "</td>" + "<td>" + response[i+3] + "</td>" + "<td>" + response[i+4] + "</td>" + "<td>" + response[i+5] + "</td><tr>");        
            }
        }                   
    });
}