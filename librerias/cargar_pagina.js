$(document).on("ready", inicio);
function inicio(){
	/*formulario de clientes */
	$("#btn_guardarCliente").on("click",guardarIngresos);
	$("#btn_limpiarIngreso").on("click",limpiar_form);
	$("#btn_buscarCliente").on("click",modal);
	/*-----------------------*/
	/*formulario de proveedores */
	$("#btn_guardarProveedor").on("click",guardarProveedores);
	$("#btn_limpiarProveedor").on("click",limpiar_form);
	$("#btn_buscarProveedor").on("click",modal);
	/*-----------------------*/
	/*formulario de tipos de usuarios */
	$("#btn_guardarTipoUsuario").on("click",guardarTiposUsuarios);
	$("#btn_limpiarTipoUsuario").on("click",limpiar_form);
	$("#btn_buscarTipoUsuario").on("click",modal);
	/*-----------------------*/
	/*formulario de tipos de usuarios */
	$("#btn_guardarMarca").on("click",guardarMarcas);
	$("#btn_limpiarMarca").on("click",limpiar_form);
	$("#btn_buscarMarca").on("click",modal);
	/*-----------------------*/
	/*Incrementos*/
	$("#btn_guardarMedia").on("click",guardarMedia);
	$("#btn_limpiarMedia").on("click",limpiar_form);
	$("#btn_buscarMedia").on("click",modal);
	/*-----------------------*/
	/*Usuarios*/
	$("#form_clave").css("display","block");
	$("#form_usuario").css("display","none");
	$("#btn_ingresarAdmin").on("click",verificarAdmin);	
	$("#tab_user").click(function (e){
		$("#form_clave").css("display","block");
		$("#form_usuario").css("display","none");
		$("#usuario_admin").val("");
		$("#clave_admin").val("");
	});
	$("#tipo_usuario").load("../servidor/tipos_usuarios/cargar_tiposUsuarios.php");
	$("#btn_guardarUsuario").on("click",guardarUsuario);
	$("#btn_limpiarUsuario").on("click",limpiar_form);
	$("#btn_buscarUsuario").on("click",modal);
	/**----------------------/
	/*tooltips en los inputs*/
	$("input").tooltip({
       placement : 'top'
	});
	/*-----------------------*/
	/*validacion del form para todos los input que tengan required y cambios en los tabs*/
	var tab = window.location.hash.substring(1); 
	if(tab){
		$('.tab_index ul li').each(function(){
		    $(this).removeClass("active");
		    var href= $(this).children()[0].href
		    var tab1 = href.split('#').pop();
		    if( tab1 == tab){
		    	$(this).addClass("active");	
		    }
		});
		$('.act').each(function(){
			$(this).removeClass("active");
		});
		$("#"+tab).addClass("active");
	}
	/*activar contenido de las listas*/
	$('.tab_index a').on('click', function(e){
	  	var href = $(this).attr('href');
		var tab = href.split('#').pop();
		$('.tab_index ul li').each(function(){
	    	$(this).removeClass("active");
		});
		$(this).parent().addClass("active");
		$('.act').each(function(){
			$(this).removeClass("active");
		});
		$("#"+tab).addClass("active");
	});
	$("input").on("keyup click",function (e){
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
				}else{
					if(form == "form_calculoPrecio"){
						buscar_media();
					}else{
						if(form == "form_usuarios"){
							buscar_usuario();
						}
					}
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
function guardarMedia(){
	var resp=comprobarCamposRequired("form_calculoPrecio");
	if(resp==true){
		$("#form_calculoPrecio").on("submit",function (e){		
			var valores = $("#form_calculoPrecio").serialize();
			var texto=($("#btn_guardarMedia").text()).trim();	
			if(texto=="Guardar"){		
				datos_media(valores,"g",e);
			}else{
				datos_media(valores,"m",e);
			}
			e.preventDefault();
    		$(this).unbind("submit")
		});
	}
}
function datos_media(valores,tipo,p){
	$.ajax({				
		type: "POST",
		data: valores+"&tipo="+tipo,
		url: "../servidor/media/media.php",			
	    success: function(data) {	
	    	if( data == 0 ){
	    		alert("Datos enviados Correctamente");
	    		limpiar_form(p);
	    	}
	    	if( data == 3 ){
	    		alert("Complete todos los campos antes de continuar");	
	    	}
		}
	}); 
}

function guardarUsuario(){
	var resp=comprobarCamposRequired("form_usuarios");
	if(resp==true){
		$("#form_usuarios").on("submit",function (e){		
			var valores = $("#form_usuarios").serialize();
			var texto=($("#btn_guardarUsuario").text()).trim();	
			if(texto=="Guardar"){		
				datos_usuario(valores,"g",e);
			}else{
				datos_usuario(valores,"m",e);
			}
			e.preventDefault();
    		$(this).unbind("submit")
		});
	}
}
function datos_usuario(valores,tipo,p){
	$.ajax({				
		type: "POST",
		data: valores+"&tipo="+tipo,
		url: "../servidor/usuarios/usuarios.php",			
	    success: function(data) {	
	    	if( data == 0 ){
	    		alert("Datos enviados Correctamente");
	    		limpiar_form(p);
	    	}
	    	if( data == 1 ){
	    		$("#ci_usuario").parent().removeClass('has-success');
	    		$("#ci_usuario").parent().addClass('has-error');
	    		alert("Este número de cédula ya existe ingrese otra");	
	    		$("#ci_usuario").val("");
	    		$("#ci_usuario").focus();
	    	}
	    	if( data == 2 ){
	    		alert("Este valor esta incompleto");	
	    		$("#ci_usuario").val("");
	    		$("#ci_usuario").focus();
	    		$("#ci_usuario").parent().removeClass('has-success');
	    		$("#ci_usuario").parent().addClass('has-error');
	    	}
	    	if( data == 3 ){
	    		alert("Complete todos los campos antes de continuar");	
	    	}
	    	if( data == 4 ){
	    		alert("Este nick ya existe ingrese otro");	
	    		$("#nick_usuario").val("");
	    		$("#nick_usuario").focus();
	    		$("#nick_usuario").parent().removeClass('has-success');
	    		$("#nick_usuario").parent().addClass('has-error');
	    	}
	    	if( data == 5 ){
	    		alert("Este valor esta incompleto");	
	    		$("#nick_usuario").val("");
	    		$("#nick_usuario").focus();
	    		$("#nick_usuario").parent().removeClass('has-success');
	    		$("#nick_usuario").parent().addClass('has-error');
	    	}
		}
	}); 
}

function verificarAdmin(){
	var user =$("#usuario_admin").val();
	var clave =$("#clave_admin").val();
	$.ajax({				
		type: "POST",
		data: "usuario="+user+"&clave="+clave,
		url: "../servidor/login/verifica_admin.php",			
	    success: function(data) {	
	    	if( data == 1 ){
	    		alert("Datos Correctos");
	    		$("#form_clave").css("display","none");
				$("#form_usuario").css("display","block");
	    	}
	    	if( data == 2){
	    		alert("Datos incorrectos vuelva a ingresarlos");
	    		$("#usuario_admin").val("");
	    		$("#usuario_admin").focus();
				$("#clave_admin").val("");
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
				}else{
					if(form == "form_calculoPrecio"){
						$("#btn_guardarMedia").text("");
						$("#btn_guardarMedia").append("<span class='glyphicon glyphicon-log-in'></span> Guardar");     		
					}else{
						if(form == "form_usuarios"){
							$("#btn_guardarUsuario").text("");
							$("#btn_guardarUsuario").append("<span class='glyphicon glyphicon-log-in'></span> Guardar");     		
						}
					}
				}	
			}
		}
	}
}

function comprobarCamposRequired(form){
   	var correcto=true;
   	var campos_text=$('#'+form+' input:required ');
   	$(campos_text).each(function() {
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
