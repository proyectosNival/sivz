<?php
	include '../conexion.php';
	include '../funciones_generales.php';
	$data;
	$conexion = conectarse();
	if($_POST['tipo'] == "g"){
		if( $_POST['precio_inicial'] && $_POST['precio_final'] && $_POST['incremento'] && is_numeric($_POST['precio_inicial']) && is_numeric($_POST['precio_final']) && is_numeric($_POST['incremento']) ){
			$cont=id_tabla($conexion,"media","id_media");
			$sql="insert into media values('$cont','$_POST[precio_inicial]','$_POST[precio_final]','$_POST[incremento]')";
				pg_query( $conexion, $sql );
				$data = 0;
		}else{
			$data = 3;
		}
	}else{
		if($_POST['tipo'] == "m"){
			if( $_POST['precio_inicial'] && $_POST['precio_final'] && $_POST['incremento'] && is_numeric($_POST['precio_inicial']) && is_numeric($_POST['precio_final']) && is_numeric($_POST['incremento']) ){
				$sql = "update media set id_media='".$_POST['id_media']."',precio_inicial='".$_POST['precio_inicial']."', precio_final='".$_POST['precio_final']."',incremento='".$_POST['incremento']."' where id_media = '".$_POST['id_media']."'";
				pg_query( $conexion, $sql );
				$data = 0;
			}else{
				$data = 3;
			}
		}
	}
	echo $data;
?>