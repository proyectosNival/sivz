<?php
	include '../conexion.php';
	include 'funciones_login.php';
	$data;
	$conexion = conectarse();
	if( $_POST['usuario'] && $_POST['clave'] ){
		$data = verifica_admin( $conexion,$_POST['usuario'],$_POST['clave']);
		if($data == true){
			$data = 1;
		}else{
			$data = 2;
		}
	}else{
		$data = 3;
	}
	echo $data;
?>