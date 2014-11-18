<?php
	include '../conexion.php';
	include '../funciones_generales.php';
	$data;
	$conexion = conectarse();
	$texto = $_GET['term'];
	$tipo = $_GET['tipo'];
	if($tipo == "0"){
		$sql="select id_proveedor,ci_ruc_proveedor,nombre_proveedor from proveedor where ci_ruc_proveedor like '$texto%'";	
	}else{
		if($tipo == "1"){
			$sql="select id_proveedor,nombre_proveedor,ci_ruc_proveedor from proveedor where nombre_proveedor like '$texto%'";	
		}	
	}
	
	busquedas3($conexion,$sql);	
?>