$(document).on("ready", inicio);
function inicio(){
	 if($('#tab_ingresosClientes').tab('show')){
	 	$("#tab_ingresosClientes").load("ingresos.php"); 
	 }else{
	 	$("#tab_ingresosClientes").empty(); 
	 }
}
