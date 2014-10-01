<?php
	include '../conexion.php';
	include 'funciones_login.php';
	$data;
	$conexion = conectarse();
	if( $_POST['txt_loginUsuario'] && $_POST['txt_loginPass'] ){
		$id = ingreso( $conexion,$_POST['txt_loginUsuario']);
		if( $id ){
			$pass = clave( $conexion,$id,$_POST['txt_loginPass'] );
		}else{
			$data = 2;
		}
		if( isset($pass) ){
			session_start();
			$_SESSION['id']=$id;
			$_SESSION['usuario']=$_POST['txt_loginUsuario'];
			$data = 1;
		}else{
			$data = 2;
		}
	}else{
		$data = 3;
	}
	echo $data;
?>