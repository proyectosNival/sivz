$(document).on("ready",inicio);
function inicio(){
	$("#btn_loginIngreso").on("click",ingresoLogin);
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
	    			alert("Datos Incorrectos");
	    			$("$txt_loginPass").val("");
	    			$("$txt_loginPass").focus();
	    		}else{
	    			if(data==3){
		    			alert("Complete todos los campos para poder continuar")
		    			$("$txt_loginUsuario").val("");
		    			$("$txt_loginPass").val("");
		    			$("$txt_loginUsuario").focus();
	    			}
	    		}
	    	}
		}
	}); 
}