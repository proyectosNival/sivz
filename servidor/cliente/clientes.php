<?php
	include '../conexion.php';
	include 'funciones_cliente.php';
	$data;
	$conexion = conectarse();
	if($_POST['tipo'] == "g"){
		if( $_POST['ci_cliente'] && $_POST['nombre_cliente'] ){
			$data=verificar_ci($conexion,$_POST['ci_cliente']);
			if( $data == 0 ){
				$cont=id_tabla($conexion,"clientes","id_cliente");
				$sql="insert into clientes values('$cont','$_POST[nombre_cliente]','$_POST[ci_cliente]','$_POST[telefono_cliente]','$_POST[celular_cliente]','$_POST[direccion_cliente]','1','$_POST[ciudad_cliente]')";
				pg_query( $conexion, $sql );
			}
		}else{
			$data = 3;
		}
	}
	echo $data;
?>