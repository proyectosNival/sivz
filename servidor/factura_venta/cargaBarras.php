<?php
	include '../conexion.php';
	include '../funciones_generales.php';
	$data;
	$conexion = conectarse();
	$sql = "select id_producto,nombre_producto,stock,precio_venta,precio_compra from producto where cod_barras = '$_POST[cod]'";	
	busquedaBarras($conexion,$sql);	
?>