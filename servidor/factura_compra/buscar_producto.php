<?php
	include '../conexion.php';
	include '../funciones_generales.php';
	$data;
	$conexion = conectarse();
	$texto = $_GET['term'];
	$tipo = $_GET['tipo'];
	if($tipo == "0"){
		$sql="select id_producto,cod_barras,nombre_producto,precio_venta from producto where (cod_barras like '%$texto%' or cod_barras like '%$texto%')";	
	}else{
		if($tipo == "1"){
			$sql="select id_producto,nombre_producto,cod_barras,precio_venta from producto where nombre_producto like '$texto%'";	
		}	
	}
	
	busquedas4($conexion,$sql);	
?>