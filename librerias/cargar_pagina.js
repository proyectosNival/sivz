$(document).on("ready", inicio);
function inicio(){
	/*formulario de clientes */
	$("#btn_guardarCliente").on("click",guardarIngresos);
	$("#btn_limpiarIngreso").on("click",limpiar_form);
	$("#btn_buscarCliente").on("click",modal)
	/*-----------------------*/
	/*formulario de proveedores */
	$("#btn_guardarProveedor").on("click",guardarProveedores);
	$("#btn_limpiarProveedor").on("click",limpiar_form);
	$("#btn_buscarProveedor").on("click",modal)
	/*-----------------------*/
	/*formulario de tipos de usuarios */
	$("#btn_guardarTipoUsuario").on("click",guardarTiposUsuarios);
	$("#btn_limpiarTipoUsuario").on("click",limpiar_form);
	$("#btn_buscarTipoUsuario").on("click",modal)
	/*-----------------------*/
	/*formulario de tipos de usuarios */
	$("#btn_guardarMarca").on("click",guardarMarcas);
	$("#btn_limpiarMarca").on("click",limpiar_form);
	$("#btn_buscarMarca").on("click",modal)
	/*-----------------------*/
	/*tooltips en los inputs*/
	$("input").tooltip({
       placement : 'top'
	});
	/*-----------------------*/
	/*validacion del form para todos los input que tengan required*/
	$("input").keyup(function (e){
		comprobarCamposRequired(e.currentTarget.form.id)
	});
	/*-----------------------*/

}
function modal(e){
	$("#busquedasModificar").html("");
	$("#busquedasModificar").append("<table id='tabla_busquedas'></table><div id='pager'></div>");
	$("#pager").html("");
	$('#modalBusquedas').modal('show');
	var form;
	if(e.type == "click"){
		form = e.currentTarget.form.id;
	}else{
		form = e.target.id
	}
	//////////////
	if(form == "form_cliente"){
		buscar_clientes();	
	}else{
		if(form == "form_proveedores"){
			buscar_proveedor();
		}else{
			if(form == "form_tipos_usuarios"){
				buscar_tiposUsuarios();
			}else{
				if(form == "form_marcas"){
					buscar_marcas();
				}	
			}
		}
	}
	$("#tabla_busquedas").trigger('reloadGrid');

}
function guardarIngresos(){
	var resp=comprobarCamposRequired("form_cliente");
	if(resp==true){
		$("#form_cliente").on("submit",function (e){		
			var valores = $("#form_cliente").serialize();
			var texto=($("#btn_guardarCliente").text()).trim();	
			if(texto=="Guardar"){		
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
	    		$("#ci_ruc_cliente").parent().removeClass('has-success');
	    		$("#ci_ruc_cliente").parent().addClass('has-error');
	    	}
	    	if( data == 2 ){
	    		alert("El nro de cédula esta incompleto como mínimo 10 carácteres");	
	    		$("#ci_ruc_cliente").val("");
	    		$("#ci_ruc_cliente").focus();
	    		$("#ci_ruc_cliente").parent().removeClass('has-success');
	    		$("#ci_ruc_cliente").parent().addClass('has-error');
	    	}
	    	if( data == 3 ){
	    		alert("Complete todos los campos antes de continuar");	
	    	}
		}
	}); 
}
function guardarProveedores(){
	var resp=comprobarCamposRequired("form_proveedores");
	if(resp==true){
		$("#form_proveedores").on("submit",function (e){		
			var valores = $("#form_proveedores").serialize();
			var texto=($("#btn_guardarProveedor").text()).trim();	
			if(texto=="Guardar"){		
				datos_proveedor(valores,"g",e);
			}else{
				datos_proveedor(valores,"m",e);
			}
			e.preventDefault();
    		$(this).unbind("submit")
		});
	}
}
function datos_proveedor(valores,tipo,p){
	$.ajax({				
		type: "POST",
		data: valores+"&tipo="+tipo,
		url: "../servidor/proveedor/proveedores.php",			
	    success: function(data) {	
	    	if( data == 0 ){
	    		alert("Datos enviados Correctamente");
	    		limpiar_form(p);
	    	}
	    	if( data == 1 ){
	    		alert("Este nro de cédula ya existe ingrese otro");	
	    		$("#ci_ruc_proveedor").val("");
	    		$("#ci_ruc_proveedor").focus();
	    		$("#ci_ruc_proveedor").parent().removeClass('has-success');
	    		$("#ci_ruc_proveedor").parent().addClass('has-error');
	    	}
	    	if( data == 2 ){
	    		alert("El nro de cédula esta incompleto como mínimo 10 carácteres");	
	    		$("#ci_ruc_proveedor").val("");
	    		$("#ci_ruc_proveedor").focus();
	    		$("#ci_ruc_proveedor").parent().removeClass('has-success');
	    		$("#ci_ruc_proveedor").parent().addClass('has-error');
	    	}
	    	if( data == 3 ){
	    		alert("Complete todos los campos antes de continuar");	
	    	}
		}
	}); 
}
function guardarTiposUsuarios(){
	var resp=comprobarCamposRequired("form_tipos_usuarios");
	if(resp==true){
		$("#form_tipos_usuarios").on("submit",function (e){		
			var valores = $("#form_tipos_usuarios").serialize();
			var texto=($("#btn_guardarTipoUsuario").text()).trim();	
			if(texto=="Guardar"){		
				datos_tiposUsuarios(valores,"g",e);
			}else{
				datos_tiposUsuarios(valores,"m",e);
			}
			e.preventDefault();
    		$(this).unbind("submit")
		});
	}
}
function datos_tiposUsuarios(valores,tipo,p){
	$.ajax({				
		type: "POST",
		data: valores+"&tipo="+tipo,
		url: "../servidor/tipos_usuarios/tiposUsuarios.php",			
	    success: function(data) {	
	    	if( data == 0 ){
	    		alert("Datos enviados Correctamente");
	    		limpiar_form(p);
	    	}
	    	if( data == 1 ){
	    		$("#nombre_tipo_usuario").parent().removeClass('has-success');
	    		$("#nombre_tipo_usuario").parent().addClass('has-error');
	    		alert("Este tipo de usuario ya existe ingrese otro");	
	    		$("#nombre_tipo_usuario").val("");
	    		$("#nombre_tipo_usuario").focus();
	    	}
	    	if( data == 2 ){
	    		alert("El tipo de usuario ya existe ingrese otro ");	
	    		$("#nombre_tipo_usuario").val("");
	    		$("#nombre_tipo_usuario").focus();
	    		$("#nombre_tipo_usuario").parent().removeClass('has-success');
	    		$("#nombre_tipo_usuario").parent().addClass('has-error');
	    	}
	    	if( data == 3 ){
	    		alert("Complete todos los campos antes de continuar");	
	    	}
		}
	}); 
}
function guardarMarcas(){
	var resp=comprobarCamposRequired("form_marcas");
	if(resp==true){
		$("#form_marcas").on("submit",function (e){		
			var valores = $("#form_marcas").serialize();
			var texto=($("#btn_guardarMarca").text()).trim();	
			if(texto=="Guardar"){		
				datos_marcas(valores,"g",e);
			}else{
				datos_marcas(valores,"m",e);
			}
			e.preventDefault();
    		$(this).unbind("submit")
		});
	}
}
function datos_marcas(valores,tipo,p){
	$.ajax({				
		type: "POST",
		data: valores+"&tipo="+tipo,
		url: "../servidor/marcas/marcas.php",			
	    success: function(data) {	
	    	if( data == 0 ){
	    		alert("Datos enviados Correctamente");
	    		limpiar_form(p);
	    	}
	    	if( data == 1 ){
	    		$("#nombre_marca").parent().removeClass('has-success');
	    		$("#nombre_marca").parent().addClass('has-error');
	    		alert("Esta marca ya existe ingrese otra");	
	    		$("#nombre_marca").val("");
	    		$("#nombre_marca").focus();
	    	}
	    	if( data == 2 ){
	    		alert("Esta marca ya existe ingrese otra");	
	    		$("#nombre_marca").val("");
	    		$("#nombre_marca").focus();
	    		$("#nombre_marca").parent().removeClass('has-success');
	    		$("#nombre_marca").parent().addClass('has-error');
	    	}
	    	if( data == 3 ){
	    		alert("Complete todos los campos antes de continuar");	
	    	}
		}
	}); 
}
function limpiar_form(e){
	var form;
	if(e.type == "click"){
		$("#"+e.currentTarget.form.id+" input").val("");
		comprobarCamposRequired(e.currentTarget.form.id);		
		form = e.currentTarget.form.id;
	}else{
		$("#"+e.target.id+" input").val("");
		comprobarCamposRequired(e.target.id);		
		form = e.target.id
	}
	if(form == "form_cliente"){
		$("#btn_guardarCliente").text("");
		$("#btn_guardarCliente").append("<span class='glyphicon glyphicon-log-in'></span> Guardar");     
	}else{
		if(form == "form_proveedores"){
			$("#btn_guardarProveedor").text("");
			$("#btn_guardarProveedor").append("<span class='glyphicon glyphicon-log-in'></span> Guardar");     		
		}else{
			if(form == "form_tipos_usuarios"){
				$("#btn_guardarTipoUsuario").text("");
				$("#btn_guardarTipoUsuario").append("<span class='glyphicon glyphicon-log-in'></span> Guardar");     		
			}else{
				if(form == "form_marcas"){
					$("#btn_guardarMarca").text("");
					$("#btn_guardarMarca").append("<span class='glyphicon glyphicon-log-in'></span> Guardar");     		
				}	
			}
		}
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
