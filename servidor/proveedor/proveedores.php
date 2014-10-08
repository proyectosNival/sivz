<?php
	include '../conexion.php';
	include 'funciones_proveedor.php';
	include '../funciones_generales.php';
	$data;
	$conexion = conectarse();
	if($_POST['tipo'] == "g"){
		if( $_POST['ci_ruc_proveedor'] && $_POST['nombre_proveedor'] && $_POST['telefono_proveedor'] ){
			$data=verificar_ci($conexion,$_POST['ci_ruc_proveedor']);
			if( $data == 0 ){
				$cont=id_tabla($conexion,"proveedor","id_proveedor");
				$sql="insert into proveedor values('$cont','$_POST[nombre_proveedor]','$_POST[ci_ruc_proveedor]','$_POST[telefono_proveedor]','$_POST[direccion_proveedor]','1')";
				pg_query( $conexion, $sql );
			}
		}else{
			$data = 3;
		}
	}else{
		if($_POST['tipo'] == "m"){
			if( $_POST['ci_ruc_proveedor'] && $_POST['nombre_proveedor'] ){
				$data=verificar_ci_mod($conexion,$_POST['ci_ruc_proveedor'],$_POST['id_proveedor']);
				if( $data == 0 ){
					$sql = "update proveedor set id_proveedor='".$_POST['id_proveedor']."',nombre_proveedor='".$_POST['nombre_proveedor']."',ci_ruc_proveedor='".$_POST['ci_ruc_proveedor']."',telefono_proveedor='".$_POST['telefono_proveedor']."',direccion_proveedor='".$_POST['direccion_proveedor']."' where id_proveedor = '".$_POST['id_proveedor']."'";
					pg_query( $conexion, $sql );
				}
			}else{
				$data = 3;
			}
		}
	}
	echo $data;
?>