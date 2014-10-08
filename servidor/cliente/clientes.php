<?php
	include '../conexion.php';
	include 'funciones_cliente.php';
	$data;
	$conexion = conectarse();
	if($_POST['tipo'] == "g"){
		if( $_POST['ci_ruc_cliente'] && $_POST['nombres_cliente'] ){
			$data=verificar_ci($conexion,$_POST['ci_ruc_cliente']);
			if( $data == 0 ){
				$cont=id_tabla($conexion,"clientes","id_cliente");
				$sql="insert into clientes values('$cont','$_POST[nombres_cliente]','$_POST[ci_ruc_cliente]','$_POST[telefono_cliente]','$_POST[celular_cliente]','$_POST[direccion_cliente]','1','$_POST[ciudad_cliente]')";
				pg_query( $conexion, $sql );
			}
		}else{
			$data = 3;
		}
	}else{
		if($_POST['tipo'] == "m"){
			if( $_POST['ci_ruc_cliente'] && $_POST['nombres_cliente'] ){
				$data=verificar_ci_mod($conexion,$_POST['ci_ruc_cliente'],$_POST['id_cliente']);
				if( $data == 0 ){
					$sql = "update clientes set id_cliente='".$_POST['id_cliente']."',nombres_cliente='".$_POST['nombres_cliente']."',ci_ruc_cliente='".$_POST['ci_ruc_cliente']."',telefono_cliente='".$_POST['telefono_cliente']."',celular_cliente='".$_POST['celular_cliente']."',direccion_cliente='".$_POST['direccion_cliente']."',ciudad_cliente='".$_POST['ciudad_cliente']."' where id_cliente = '".$_POST['id_cliente']."'";
					pg_query( $conexion, $sql );
				}
			}else{
				$data = 3;
			}
		}
	}
	echo $data;
?>