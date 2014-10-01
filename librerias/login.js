$(document).on("ready",inicio);
function inicio(){
	$("#btn_loginIngreso").on("click",ingresoLogin);
	$("#btn_cerrarRecuperar").on("click",limpiar);
	$("#btn_restautarAcceso").on("click",restaurarAcceso);
}
function ingresoLogin(){
	if($("#txt_loginUsuario").val()!="" && $("#txt_loginPass").val()!=""){
		$("#form_loginUsuario").on("submit",function (e){		
			var valores = $("#form_loginUsuario").serialize();
			comprobar(valores);
			e.preventDefault();
    		$(this).unbind("submit")
		});
	}
}
function comprobar(valores){
	$.ajax({				
		type: "POST",
		data: valores,
		url: "servidor/login/login.php",			
	    success: function(data) {	
	    	if(data==1){
	    		alert("Bienvenido");
	    		location.href='html/index.php';
	    	}
	    	else{
	    		if(data==2){
	    			alert("Usuario o clave incorrectas vuelva a ingresar");
	    			$("#txt_loginPass").val("");
	    			$("#txt_loginPass").focus();
	    		}else{
	    			if(data==3){
		    			alert("Complete todos los campos para poder continuar")
		    			$("#txt_loginUsuario").val("");
		    			$("#txt_loginPass").val("");
		    			$("#txt_loginUsuario").focus();
	    			}
	    		}
	    	}
		}
	}); 
}
function limpiar(){
	$("#txt_loginUsuarioAdmin").val("");
	$("#txt_loginPassRestaurar").val("");
	$("#txt_loginUsuarioCambio").val("");
}
function restaurarAcceso(){
	if( $("#txt_loginUsuarioAdmin").val()!="" && $("#txt_loginPassRestaurar").val()!="" && $("#txt_loginUsuarioCambio").val()!="" ){
		$.ajax({				
			type: "POST",
			data: "admin=" + $("#txt_loginUsuarioAdmin").val() + "&pass=" + $("#txt_loginPassRestaurar").val() +"&user=" + $("#txt_loginUsuarioCambio").val(),
			url: "servidor/login/restaurar.php",			
		    success: function(data) {	
		    	if(data == 1){
		    		alert("Datos actualizados correctamente. \n Recuerde que nueva clave es su usuario");
		    		limpiar();
		    	}
		    	if(data == 2){
		    		alert("Ocurrio un error al momento de actualizar los datos. Datos incorectos");
		    	}
		    	if(data == 3){
		    		alert("Error llene los datos antes de continuar");
		    	}
			}
		}); 	
	}else{
		alert("Complete todos los campos antes de continuar");
	}
}