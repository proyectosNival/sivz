<?php
	include '../conexion.php';
	include 'funciones_usuarios.php';
	include '../funciones_generales.php';
	$data;
	date_default_timezone_set('UTC');
    $fecha=date("Y-m-d");
	$conexion = conectarse();
	if($_POST['tipo'] == "g"){
		if( $_POST['ci_usuario'] && $_POST['nombre_usuario'] && $_POST['nick_usuario'] && $_POST['clave'] ){
			$data=verificar_ci($conexion,$_POST['ci_usuario']);
			if( $data == 0 ){
				$data=verificar_nick($conexion,strtolower($_POST['nick_usuario']));
				if( $data == 0 ){
					$cont=id_tabla($conexion,"usuario","id_usuario");
					$sql="insert into usuario values('$cont','$_POST[nombre_usuario]','$_POST[ci_usuario]','$_POST[direccion_usuario]','$_POST[telefono_usuario]','$_POST[celular_usuario]','$fecha','$_POST[tipo_usuario]','".strtolower($_POST['nick_usuario'])."','1')";
					pg_query( $conexion, $sql );
					$cont1=id_tabla($conexion,"claves","id_clave");
					$sql="insert into claves values('$cont1','$cont','$_POST[clave]','1')";
					pg_query( $conexion, $sql );
				}
			}
		}else{
			$data = 3;
		}
	}else{
		if($_POST['tipo'] == "m"){
			if( $_POST['ci_usuario'] && $_POST['nombre_usuario'] && $_POST['nick_usuario'] && $_POST['clave'] ){
				$data=verificar_ci_mod($conexion,$_POST['ci_usuario'],$_POST['id_usuario']);
				if( $data == 0 ){
					$data=verificar_nick_mod($conexion,strtolower($_POST['nick_usuario']),$_POST['id_usuario']);
					if($data == 0){
						$sql = "update usuario set id_usuario='$_POST[id_usuario]',nombre_usuario='$_POST[nombre_usuario]',ci_usuario='$_POST[ci_usuario]',direccion_usuario='$_POST[direccion_usuario]',telefono_usuario='$_POST[telefono_usuario]',celular_usuario='$_POST[celular_usuario]',fecha_registro='$fecha',tipo_usuario='$_POST[tipo_usuario]',nick_usuario='$_POST[nick_usuario]' where id_usuario='$_POST[id_usuario]'";
						pg_query( $conexion, $sql );
						$sql = "update claves set clave = '$_POST[clave]' where id_usuario = '$_POST[id_usuario]'";
						pg_query( $conexion, $sql );
					}
				}
			}else{
				$data = 3;
			}
		}
	}
	echo $data;
?>