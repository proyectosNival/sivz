<?php
	include '../conexion.php';
	include 'funciones_marcas.php';
	include '../funciones_generales.php';
	$data;
	$conexion = conectarse();
	if($_POST['tipo'] == "g"){
		if( $_POST['nombre_marca']){
			$data=verificar_nombre($conexion,$_POST['nombre_marca']);
			if( $data == 0 ){
				$cont=id_tabla($conexion,"marca","id_marca");
				$sql="insert into marca values('$cont','$_POST[nombre_marca]','1')";
				pg_query( $conexion, $sql );
			}
		}else{
			$data = 3;
		}
	}else{
		if($_POST['tipo'] == "m"){
			if( $_POST['nombre_marca']){
				$data=verificar_nombre_mod($conexion,$_POST['nombre_marca'],$_POST['id_marca']);
				if( $data == 0 ){
					$sql = "update marca set id_marca='".$_POST['id_marca']."',nombre_marca='".$_POST['nombre_marca']."' where id_marca = '".$_POST['id_marca']."'";
					pg_query( $conexion, $sql );
				}
			}else{
				$data = 3;
			}
		}
	}
	echo $data;
?>