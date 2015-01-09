$(document).on("ready", inicio);
/*para cargar la imange*/
$(function(){
    Test = {
        UpdatePreview: function(obj){
            // if IE < 10 doesn't support FileReader
            if(!window.FileReader){
            // don't know how to proceed to assign src to image tag
            } else {
                var reader = new FileReader();
                var target = null;
             
                reader.onload = function(e) {
                    target =  e.target || e.srcElement;
                    $("#foto").prop("src", target.result);
                };
                reader.readAsDataURL(obj.files[0]);
            }
        }
    };
});
/*------------*/

function inicio(){	
	/*----para la imagen----*/
	function getDoc(frame) {
    	var doc = null;     
     	
     	try {
        	if (frame.contentWindow) {
            	doc = frame.contentWindow.document;
         	}
     	} catch(err) {
    	}
	    if (doc) { 
	         return doc;
	    }
	    try { 
	         doc = frame.contentDocument ? frame.contentDocument : frame.document;
	    } catch(err) {
	       
	         doc = frame.document;
	    }
	    return doc;
 	}
 	/*------------*/
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
	/*----------------------*/
	/*formulario de productos */
	$("#tipo_marca").load("../servidor/producto/carga_marca.php");
	$("#btn_guardarProducto").on("click",guardarProducto);
	$("#btn_limpiarProducto").on("click",limpiar_form);
	$("#btn_buscarProducto").on("click",modal);
	/*-----------------------*/
	/*formulario de fc */	
	$("#ci_proveedor_fc").keyup(function (){
		autocompletar("ci_proveedor_fc","nombre_proveedor_fc","id_proveedor_fc","../servidor/factura_compra/buscar_proveedor.php?tipo=0","form_facturaCompra");
	});
	$("#nombre_proveedor_fc").keyup(function (){
		autocompletar("nombre_proveedor_fc","ci_proveedor_fc","id_proveedor_fc","../servidor/factura_compra/buscar_proveedor.php?tipo=1","form_facturaCompra");
	});
	$("#cod_prod_fc").on("keypress",function (e){
		if (e.which === 13 || e.keyCode === 13) {
			autocompletarBarras1($("#cod_prod_fc").val());			
			return false;	
		}		
		
	});	
	$("#nombre_prod_fc").keyup(function (){
		autocompletar("nombre_prod_fc","cod_prod_fc","id_producto_fc","../servidor/factura_compra/buscar_producto.php?tipo=1","form_facturaCompra");
	});
	$(".soloNumeros").keyup(function(event){
	    if((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode == 9) || (event.keyCode == 116) || (event.keyCode == 8) || (event.keyCode >= 96 && event.keyCode <= 105) || (event.keyCode == 110) || (event.keyCode == 190)) {
	        return true;
	    }else{
	    	return false;
	    }
	});
	$("#cod_prod_fc").on("keypress", enter);
	$("#nombre_prod_fc").on("keypress", enter);
	$("#cantidad_fc").on("keypress", enter);
	$("#precio_compra_fc").on("keypress", enter);
	$("#precio_venta_fc").on("keypress", enter);
	$("#cantidad_fc").on("keypress",punto);
	$("#precio_compra_fc").on("keypress",punto);
	$("#precio_venta_fc").on("keypress",punto);
	fc($("#list"));
	$("#btn_guardarFC").on("click",guardarFC);
	$("#btn_limpiarFC").on("click",limpiar_form);
	$("#btn_buscarFC").on("click",modal);
	$('#fecha_factura').datepicker({
        dateFormat: 'yy-mm-dd'
    }).datepicker('setDate', 'today');
	/*--------------*/
	/*factura venta*/
	
	$("#ci_cliente_fv").keyup(function (){
		autocompletar("ci_cliente_fv","nombre_cliente_fv","id_cliente_fv","../servidor/factura_venta/busca_clientes.php?tipo=0","form_facturaVenta");
	});
	$("#nombre_cliente_fv").keyup(function (){
		autocompletar("nombre_cliente_fv","ci_cliente_fv","id_cliente_fv","../servidor/factura_venta/busca_clientes.php?tipo=1","form_facturaVenta");
	});
	$("#cod_prod_fv").on("keypress",function (e){
		if (e.which === 13 || e.keyCode === 13) {
			autocompletarBarras($("#cod_prod_fv").val());			
			return false;	
		}		
		
	});	
	$("#nombre_prod_fv").keyup(function (){
		autocompletar1("nombre_prod_fv","cod_prod_fv","id_producto_fv","../servidor/factura_compra/buscar_producto.php?tipo=1","form_facturaVenta","precio_total_fv");
	});
	$("#cod_prod_fv").on("keypress", enter1);
	$("#nombre_prod_fv").on("keypress", enter1);
	$("#cantidad_fv").on("keypress", enter1);	
	$("#precio_venta_fv").on("keypress", enter1);
	$("#cantidad_fv").on("keypress",punto);	
	$("#precio_venta_fv").on("keypress",punto);
	fv($("#list1"));
	$("#btn_guardarFV").on("click",guardarFV);
	$("#btn_limpiarFV").on("click",limpiar_form);
	$("#btn_buscarFV").on("click",modal);
	$('#fecha_facturaV').datepicker({
        dateFormat: 'yy-mm-dd'
    }).datepicker('setDate', 'today');
	/*-----------*/
	/*inventario*/
		inventario_informacion($("#list2"))
	/*-------*/
	/*reportes*/
	$("#lista_marcas").load("../servidor/producto/carga_marca.php");
	$("#btn_reporte_marca").on("click",function(){
		window.open("../reportes/reportes/lista_marca.php?id="+$("#lista_marcas").val(),'_blank');    
	})
	/*------*/
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
						}else{
							if(form == "form_productos"){
								buscar_productos();
							}else{
								if(form == "form_facturaCompra"){									
									buscar_fc();
								}else{
									if(form == "form_facturaVenta"){									
										buscar_fv();
									}	
								}
							}	
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
	    		$("#tipo_marca").load("../servidor/producto/carga_marca.php");
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
function guardarProducto(){
	if($("#cod_producto").val() != ""){    	    	
		if($("#nombre_producto").val() != ""){ 
			$("#form_productos").on("submit",function (e){		
				var texto=($("#btn_guardarProducto").text()).trim();								
				var formObj = $(this);		
				if(window.FormData !== undefined) {	
					var formData = new FormData(this); 		    					
					if(texto=="Guardar"){		
						datos_producto(formData,"g",e)  		    		    
					}else{
						datos_producto(formData,"m",e)  		    		    
					}
				e.preventDefault();						
				}else{
				    var  iframeId = "unique" + (new Date().getTime());
				    var iframe = $('<iframe src="javascript:false;" name="'+iframeId+'" />');
				    iframe.hide();
				    formObj.attr("target",iframeId);
				    iframe.appendTo("body");
				    iframe.load(function(e) {
				        var doc = getDoc(iframe[0]);
				        var docRoot = doc.body ? doc.body : doc.documentElement;
				        var data = docRoot.innerHTML;
				    });			
				}
			});
			$("#form_productos").submit();		   	    	
		}else{
			alert("Indique un nombre de producto")	
		}	
	}else{
		alert("Indique un código de producto")
	}	
}
function datos_producto(formData,tipo,p){
	$.ajax({
	    url: "../servidor/producto/producto.php?tipo="+tipo,			
	    type: "POST",
	    data:  formData,
	    mimeType:"multipart/form-data",
	    contentType: false,
	    cache: false,
	    processData:false,
	    success: function(data, textStatus, jqXHR)
	    {
	        var res=data;
	        if(res == 0){
	            alert("Datos Guardados Correctamente");
	            location.reload();	               	            
	        } else{
	            alert("Error..... Datos no Guardados La Página se recargara");
	            location.reload();
	        }
	    },
	    error: function(jqXHR, textStatus, errorThrown) 
	    {
	    } 	        
	}); 	
}
function guardarFC(){
	var resp=comprobarCamposRequired("form_facturaCompra");
	if(resp==true){		
		var valores = $("#form_facturaCompra").serialize();
		var texto=($("#btn_guardarFC").text()).trim();	
		if(texto=="Guardar"){		
			datos_fc(valores,"g");
		}else{
			datos_fc(valores,"m");
		}				
	}else{
		alert("Complete todos los campos antes de continuar");
	}
}
function datos_fc(valores,tipo){
	var v1 = new Array();
	var v2 = new Array();
	var v3 = new Array();
	var v4 = new Array();
	var v5 = new Array();
	var string_v1 = "";
	var string_v2 = "";
	var string_v3 = "";
	var string_v4 = "";
	var string_v5 = "";
	var fil = jQuery("#list").jqGrid("getRowData");
	for (var i = 0; i < fil.length; i++) {
	    var datos = fil[i];
	    v1[i] = datos['id_producto_fc'];	    
	    v2[i] = datos['cantidad_fc'];
	    v3[i] = datos['precio_compra_fc'];
	    v4[i] = datos['precio_venta_fc'];
	    v5[i] = datos['total_fc'];
	}
	for (i = 0; i < fil.length; i++) {
	    string_v1 = string_v1 + "|" + v1[i];
	    string_v2 = string_v2 + "|" + v2[i];
	    string_v3 = string_v3 + "|" + v3[i];
	    string_v4 = string_v4 + "|" + v4[i];
	    string_v5 = string_v5 + "|" + v5[i];
	}
	$.ajax({				
		type: "POST",
		data: valores+"&tipo="+tipo + "&campo1=" + string_v1 + "&campo2=" + string_v2 + "&campo3=" + string_v3 + "&campo4=" + string_v4 + "&campo5=" + string_v5,
		url: "../servidor/factura_compra/factura_compra.php",			
	    success: function(data) {	
	    	if( data > 0 ){
	    		alert("Datos enviados Correctamente");
	    		location.reload();
	    		window.open("../reportes/reportes/factura_compra.php?id="+data,'_blank');    
	    	}	    	    	
	    	if( data == 0 ){
	    		alert("Complete todos los campos antes de continuar");	
	    	}
		}
	}); 
}
function guardarFV(){
	var resp=comprobarCamposRequired("form_facturaVenta");
	if(resp==true){		
		var valores = $("#form_facturaVenta").serialize();
		var texto=($("#btn_guardarFV").text()).trim();	
		if(texto=="Guardar"){		
			datos_fv(valores,"g");
		}else{
			datos_fv(valores,"m");
		}				
	}else{
		alert("Complete todos los campos antes de continuar");
	}
}
function datos_fv(valores,tipo){
	var v1 = new Array();
	var v2 = new Array();
	var v3 = new Array();
	var v4 = new Array();	
	var string_v1 = "";
	var string_v2 = "";
	var string_v3 = "";
	var string_v4 = "";	
	var fil = jQuery("#list1").jqGrid("getRowData");
	for (var i = 0; i < fil.length; i++) {
	    var datos = fil[i];
	    v1[i] = datos['id_producto_fv'];	    
	    v2[i] = datos['cantidad_fv'];
	    v3[i] = datos['precio_venta_fv'];
	    v4[i] = datos['total_fv'];	    
	}
	for (i = 0; i < fil.length; i++) {
	    string_v1 = string_v1 + "|" + v1[i];
	    string_v2 = string_v2 + "|" + v2[i];
	    string_v3 = string_v3 + "|" + v3[i];
	    string_v4 = string_v4 + "|" + v4[i];	    
	}
	$.ajax({				
		type: "POST",
		data: valores+"&tipo="+tipo + "&campo1=" + string_v1 + "&campo2=" + string_v2 + "&campo3=" + string_v3 + "&campo4=" + string_v4,
		url: "../servidor/factura_venta/factura_venta.php",			
	    success: function(data) {	
	    	if( data > 0 ){
	    		alert("Datos enviados Correctamente");	    		
	    		location.reload();
	    		window.open("../reportes/reportes/factura_venta.php?id="+data,'_blank');    
	    	}	    		    	
	    	if( data == 0 ){
	    		alert("Complete todos los campos antes de continuar");	
	    	}
		}
	}); 
}
function limpiar_form(e){
	var form;
	if(e.type == "click"){
		$("#"+e.currentTarget.form.id+" input").val("");
		$("#"+e.currentTarget.form.id+" textarea").val("");
		comprobarCamposRequired(e.currentTarget.form.id);		
		form = e.currentTarget.form.id;
	}else{
		$("#"+e.target.id+" input").val("");
		$("#"+e.target.id+" textarea").val("");
		comprobarCamposRequired(e.target.id);		
		form = e.target.id
	}
	$("#stock").val("0");
	$("#stock_minimo").val("0");
	$("#stock_maximo").val("0");
	$("#precio_compra").val("0");
	$("#precio_venta").val("0");
	$("#talla").val("0");
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
						}else{
							if(form == "form_productos"){
								$("#btn_guardarProducto").text("");
								$("#btn_guardarProducto").append("<span class='glyphicon glyphicon-log-in'></span> Guardar");     		
							}else{
								if(form == "form_facturaCompra"){
									$("#btn_guardarFC").text("");
									$("#btn_guardarFC").append("<span class='glyphicon glyphicon-log-in'></span> Guardar");     											
									location.reload();
								}	
							}
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
/*funcion para autocompleta con el campo a mostar el id oculto y la direccion donde se encuentra*/
function autocompletar(campo,campoNombre,campoId,direccion,form){
	$("#"+campo).autocomplete({
        source: direccion,
        minLength:1,
        focus: function( event, ui ) {
	        $( "#"+campoId ).val( ui.item.value );
	        $( "#"+campo ).val( ui.item.label1 );  
	        $( "#"+campoNombre ).val( ui.item.label2 );  
	        return false;
        },
	    select: function( event, ui ) {
	        $( "#"+campoId ).val( ui.item.value );
	        $( "#"+campo ).val( ui.item.label1 );     
	        $( "#"+campoNombre ).val( ui.item.label2 );   
	        comprobarCamposRequired(form);		
	        return false;
        }     
        }).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
        return $( "<li>" )
        .append( "<a>"+ item.label1 + "</a>" )
        .appendTo( ul );
    };
}
function autocompletarBarras(campo){
	$.ajax({				
		type: "POST",
		data: "cod="+campo,
		dataType: 'json',
		url: "../servidor/factura_venta/cargaBarras.php",			
	    success: function(data) {		
	        		
	    	$("#id_producto_fv").val(data[0]);
	    	$("#nombre_prod_fv").val(data[1]);
	    	$("#cantidad_fv").val("1");
	    	$("#precio_venta_fv").val(data[3]);
	    	$("#precio_total_fv").val(data[4]);
	    	

		}
	}); 
}
function autocompletarBarras1(campo){
	$.ajax({				
		type: "POST",
		data: "cod="+campo,
		dataType: 'json',
		url: "../servidor/factura_venta/cargaBarras.php",			
	    success: function(data) {		
	        		
	    	$("#id_producto_fc").val(data[0]);
	    	$("#nombre_prod_fc").val(data[1]);
	    	$("#cantidad_fc").val("1");	    	
	    	

		}
	}); 
}
function autocompletar1(campo,campoNombre,campoId,direccion,form,cp){
	$("#"+campo).autocomplete({
        source: direccion,
        minLength:1,
        focus: function( event, ui ) {
	        $( "#"+campoId ).val( ui.item.value );
	        $( "#"+campo ).val( ui.item.label1 );  
	        $( "#"+campoNombre ).val( ui.item.label2 );  
	        $( "#"+cp ).val( ui.item.label3 );  
	        return false;
        },
	    select: function( event, ui ) {
	        $( "#"+campoId ).val( ui.item.value );
	        $( "#"+campo ).val( ui.item.label1 );     
	        $( "#"+campoNombre ).val( ui.item.label2 );  
	        $( "#"+cp ).val( ui.item.label3 );   
	        comprobarCamposRequired(form);		
	        return false;
        }     
        }).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
        return $( "<li>" )
        .append( "<a>"+ item.label1 + "</a>" )
        .appendTo( ul );
    };
}
/*---------------*/
/*funcion numerico*/
function punto(e){
 	var key;
	if (window.event)
	{
	    key = e.keyCode;
	}
	else if (e.which)
	{
	    key = e.which;
	}

	if (key < 48 || key > 57)
	{
	    if (key === 46 || key === 8)
	    {
	        return true;
	    }
	    else
	    {
	        return false;
	    }
	}
	return true;   
}
/*--------*/
function numeros(e) { 
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla==8) return true;
	patron = /\d/;
	te = String.fromCharCode(tecla);
	return patron.test(te);
}
function enter(e) {
    if (e.which === 13 || e.keyCode === 13) {
        comprobarVacios("cod_prod_fc","nombre_prod_fc","cantidad_fc","precio_compra_fc","precio_venta_fc")
        return false;
    }
    return true;
}
function enter1(e) {
    if (e.which === 13 || e.keyCode === 13) {
        comprobarVacios1("cod_prod_fv","nombre_prod_fv","cantidad_fv","precio_venta_fv")
        return false;
    }
    return true;
}
function comprobarVacios1(id1,id2,id3,id4){
	if($("#"+id1).val() == ""){
		alert("Ingrese un código de producto");
		$("#"+id1).focus();
	}else{
		if($("#"+id2).val() == ""){
			alert("Ingrese un nombre de producto");
			$("#"+id2).focus()
		}else{
			if($("#"+id3).val() == ""){
				alert("Ingrese una cantidad");
				$("#"+id3).focus()
			}else{				
				if($("#"+id4).val() == ""){
					alert("Ingrese un precio de venta");
					$("#"+id4).focus()
				}else{
					var filas = jQuery("#list1").jqGrid("getRowData");
					if (filas.length === 0) {                            
                    	var datarow = {
                            id_producto_fv: $("#id_producto_fv").val(), 
                            cod_prod_fv: $("#cod_prod_fv").val(), 
                            nombre_prod_fv: $("#nombre_prod_fv").val(), 
                            cantidad_fv: $("#cantidad_fv").val(),                             
                            precio_venta_fv: $("#precio_venta_fv").val(),                             
                            total_fv: (parseFloat($("#precio_venta_fv").val() * $("#cantidad_fv").val())).toFixed(2), 
                        };
                        su = jQuery("#list1").jqGrid('addRowData', $("#id_producto_fv").val(), datarow);
                        ////////limpiar///////////
                        $("#id_producto_fv").val("");
                        $("#cod_prod_fv").val("");
                        $("#nombre_prod_fv").val("");
                        $("#cantidad_fv").val("");                        
                        $("#precio_venta_fv").val("");
                        $("#precio_total_fv").val("");
                        $("#cod_prod_fv").focus();
                    }else{                        	
                        var repe = 0;
                        for (var i = 0; i < filas.length; i++) {
                            var id = filas[i];
                            if (id['id_producto_fv'] === $("#id_producto_fv").val()) {
                                repe = 1;
                            }
                        }
                        if (repe === 1) {                               
                        	datarow = {
                                id_producto_fv: $("#id_producto_fv").val(), 
                                cod_prod_fv: $("#cod_prod_fv").val(), 
                                nombre_prod_fv: $("#nombre_prod_fv").val(), 
                                cantidad_fv: $("#cantidad_fv").val(),                                 
                                precio_venta_fv: $("#precio_venta_fv").val(), 
                                total_fv: (parseFloat($("#precio_venta_fv").val() * $("#cantidad_fv").val())).toFixed(2), 
                            };
                            su = jQuery("#list1").jqGrid('setRowData', $("#id_producto_fv").val(), datarow);
                            ////////limpiar///////////
                            $("#id_producto_fv").val("");
                            $("#cod_prod_fv").val("");
                            $("#nombre_prod_fv").val("");
                            $("#cantidad_fv").val("");                        
                            $("#precio_venta_fv").val("");
                            $("#precio_total_fv").val("");
                            $("#cod_prod_fv").focus();                            
                        	///////////////////////////
                        }
                        else {                                
                            datarow = {
                                id_producto_fv: $("#id_producto_fv").val(), 
                                cod_prod_fv: $("#cod_prod_fv").val(), 
                                nombre_prod_fv: $("#nombre_prod_fv").val(), 
                                cantidad_fv: $("#cantidad_fv").val(),                                 
                                precio_venta_fv: $("#precio_venta_fv").val(), 
                                total_fv: (parseFloat($("#precio_venta_fv").val() * $("#cantidad_fv").val())).toFixed(2), 
                            };
                            su = jQuery("#list1").jqGrid('addRowData', $("#id_producto_fv").val(), datarow);
                            ////////limpiar///////////
                            $("#id_producto_fv").val("");
                            $("#cod_prod_fv").val("");
                            $("#nombre_prod_fv").val("");
                            $("#cantidad_fv").val("");                            
                            $("#precio_venta_fv").val("");
                            $("#precio_total_fv").val("");
                            $("#cod_prod_fc").focus();
                        }
                    }
                    /////////////Calcular valores///////////////////
                    var subtotal = 0;
                    var iva = 0;
                    var total = 0;                        
                    var fil = jQuery("#list1").jqGrid("getRowData");                        
                    for (var t = 0; t < fil.length; t++) {
                        dd = fil[t];                            
                        subtotal = (subtotal + parseFloat(dd['total_fv']));                
                    }
                    subtotal = parseFloat(subtotal).toFixed(2);                            
                    iva = parseFloat(subtotal * 0.12).toFixed(2);
                    total = (subtotal - iva).toFixed(2);
                    $("#subtotal_fv").val(total);
                    $("#descuento_fv").val("0");
                    $("#iva_12_fv").val(iva);
                    $("#total_fv").val(subtotal);                  		
				}
			}
		}	
	}
}
function comprobarVacios(id1,id2,id3,id4,id5){
	if($("#"+id1).val() == ""){
		alert("Ingrese un código de producto");
		$("#"+id1).focus();
	}else{
		if($("#"+id2).val() == ""){
			alert("Ingrese un nombre de producto");
			$("#"+id2).focus()
		}else{
			if($("#"+id3).val() == ""){
				alert("Ingrese una cantidad");
				$("#"+id3).focus()
			}else{
				if($("#"+id4).val() == ""){
					alert("Ingrese un precio de compra");
					$("#"+id4).focus()
				}else{
					if($("#"+id5).val() == ""){
						alert("Ingrese un precio de venta");
						$("#"+id5).focus()
					}else{
						var filas = jQuery("#list").jqGrid("getRowData");
						if (filas.length === 0) {                            
                        	var datarow = {
                                id_producto_fc: $("#id_producto_fc").val(), 
                                cod_prod_fc: $("#cod_prod_fc").val(), 
                                nombre_prod_fc: $("#nombre_prod_fc").val(), 
                                cantidad_fc: $("#cantidad_fc").val(), 
                                precio_compra_fc: $("#precio_compra_fc").val(), 
                                precio_venta_fc: $("#precio_venta_fc").val(), 
                                total_fc: (parseFloat($("#precio_compra_fc").val() * $("#cantidad_fc").val())).toFixed(2), 
                            };
                            su = jQuery("#list").jqGrid('addRowData', $("#id_producto_fc").val(), datarow);
                            ////////limpiar///////////
                            $("#id_producto_fc").val("");
                            $("#cod_prod_fc").val("");
                            $("#nombre_prod_fc").val("");
                            $("#cantidad_fc").val("");
                            $("#precio_compra_fc").val("");
                            $("#precio_venta_fc").val("");
                            $("#cod_prod_fc").focus();
                        }else{                        	
                            var repe = 0;
                            for (var i = 0; i < filas.length; i++) {
                                var id = filas[i];
                                if (id['id_producto_fc'] === $("#id_producto_fc").val()) {
                                    repe = 1;
                                }
                            }
                            if (repe === 1) {                               
                            	datarow = {
                                    id_producto_fc: $("#id_producto_fc").val(), 
	                                cod_prod_fc: $("#cod_prod_fc").val(), 
	                                nombre_prod_fc: $("#nombre_prod_fc").val(), 
	                                cantidad_fc: $("#cantidad_fc").val(), 
	                                precio_compra_fc: $("#precio_compra_fc").val(), 
	                                precio_venta_fc: $("#precio_venta_fc").val(), 
	                                total_fc: (parseFloat($("#precio_compra_fc").val() * $("#cantidad_fc").val())).toFixed(2), 
                                };
                                su = jQuery("#list").jqGrid('setRowData', $("#id_producto_fc").val(), datarow);
                                ////////limpiar///////////
                                $("#id_producto_fc").val("");
	                            $("#cod_prod_fc").val("");
	                            $("#nombre_prod_fc").val("");
	                            $("#cantidad_fc").val("");
	                            $("#precio_compra_fc").val("");
	                            $("#precio_venta_fc").val("");
	                            $("#cod_prod_fc").focus();
                            ///////////////////////////
                            }
                            else {                                
                                datarow = {
                                    id_producto_fc: $("#id_producto_fc").val(), 
	                                cod_prod_fc: $("#cod_prod_fc").val(), 
	                                nombre_prod_fc: $("#nombre_prod_fc").val(), 
	                                cantidad_fc: $("#cantidad_fc").val(), 
	                                precio_compra_fc: $("#precio_compra_fc").val(), 
	                                precio_venta_fc: $("#precio_venta_fc").val(), 
	                                total_fc: (parseFloat($("#precio_compra_fc").val() * $("#cantidad_fc").val())).toFixed(2), 
                                };
                                su = jQuery("#list").jqGrid('addRowData', $("#id_producto_fc").val(), datarow);
                                ////////limpiar///////////
                                $("#id_producto_fc").val("");
	                            $("#cod_prod_fc").val("");
	                            $("#nombre_prod_fc").val("");
	                            $("#cantidad_fc").val("");
	                            $("#precio_compra_fc").val("");
	                            $("#precio_venta_fc").val("");
	                            $("#cod_prod_fc").focus();
                            }
                        }
                        /////////////Calcular valores///////////////////
                        var subtotal = 0;
                        var iva = 0;
                        var total = 0;                        
                        var fil = jQuery("#list").jqGrid("getRowData");                        
                        for (var t = 0; t < fil.length; t++) {
                            dd = fil[t];                            
                            subtotal = (subtotal + parseFloat(dd['total_fc']));                
                        }
                        subtotal = parseFloat(subtotal).toFixed(2);                            
                        iva = parseFloat(subtotal * 0.12).toFixed(2);
                        total = (subtotal - iva).toFixed(2);
                        $("#subtotal").val(total);
                        $("#descuento").val("0");
                        $("#iva_12").val(iva);
                        $("#total_fc").val(subtotal);                  		
					}
				}
			}	
		}	
	}
}