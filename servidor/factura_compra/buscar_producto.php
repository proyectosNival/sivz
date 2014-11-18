<?php
	include '../conexion.php';
	include '../funciones_generales.php';
	$data;
	$conexion = conectarse();
	$texto = $_GET['term'];
	$tipo = $_GET['tipo'];
	if($tipo == "0"){
		$sql="select id_producto,cod_producto,nombre_producto from producto where cod_producto like '$texto%'";	
	}else{
		if($tipo == "1"){
			$sql="select id_producto,nombre_producto,cod_producto from producto where nombre_producto like '$texto%'";	
		}	
	}
	
	busquedas3($conexion,$sql);	
?>