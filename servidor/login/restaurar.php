<?php
	include '../conexion.php';
	include 'funciones_login.php';
	$data;
	$conexion = conectarse();
	if( $_POST['user'] && $_POST['pass'] ){
		$data = restaurarAcceso( $conexion,$_POST['user'],$_POST['pass'],$_POST['admin']);
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