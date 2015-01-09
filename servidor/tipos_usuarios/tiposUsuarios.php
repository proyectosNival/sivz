<?php
	include '../conexion.php';
	include 'funciones_tiposUsuarios.php';
	include '../funciones_generales.php';
	$data;
	$conexion = conectarse();
	if($_POST['tipo'] == "g"){		
		if( $_POST['nombre_tipo_usuario']){
			$data=verificar_nombre($conexion,$_POST['nombre_tipo_usuario']);
			if( $data == 0 ){
				$cont=id_tabla($conexion,"tipos_usuario","id_tipo_usuario");
				$sql="insert into tipos_usuario values('$cont','$_POST[nombre_tipo_usuario]','1')";
				
				pg_query( $conexion, $sql );
			}
		}else{
			$data = 3;
		}
	}else{
		if($_POST['tipo'] == "m"){
			if( $_POST['nombre_tipo_usuario']){
				$data=verificar_nombre_mod($conexion,$_POST['nombre_tipo_usuario'],$_POST['id_tipo_usuario']);
				if( $data == 0 ){
					$sql = "update tipos_usuario set id_tipo_usuario='".$_POST['id_tipo_usuario']."',nombre_tipo_usuario='".$_POST['nombre_tipo_usuario']."' where id_tipo_usuario = '".$_POST['id_tipo_usuario']."'";
					pg_query( $conexion, $sql );
				}
			}else{
				$data = 3;
			}
		}
	}
	echo $data;
?>