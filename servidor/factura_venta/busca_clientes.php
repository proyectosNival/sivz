<?php
	include '../conexion.php';
	include '../funciones_generales.php';
	$data;
	$conexion = conectarse();
	$texto = $_GET['term'];
	$tipo = $_GET['tipo'];
	if($tipo == "0"){
		$sql="select id_cliente,ci_ruc_cliente,nombres_cliente from clientes where ci_ruc_cliente like '$texto%'";	
	}else{
		if($tipo == "1"){
			$sql="select id_cliente,nombres_cliente,ci_ruc_cliente from clientes where nombres_cliente like '$texto%'";
		}	
	}
	
	busquedas3($conexion,$sql);	
?>