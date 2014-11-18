<?php
	include '../conexion.php';
	include 'funciones_productos.php';
	include '../funciones_generales.php';
	$data;
	$conexion = conectarse();
	if($_POST['tipo'] == "g"){
		if( $_POST['cod_producto']){
			$data=verificar_cod($conexion,$_POST['cod_producto']);
			if( $data == 0 ){
				$cont=id_tabla($conexion,"producto","id_producto");
				$sql="insert into producto values('$cont','$_POST[cod_producto]','$_POST[descripcion_producto]','$_POST[stock]','$_POST[stock_minimo]','$_POST[stock_maximo]','1','$_POST[tipo_marca]','$_POST[cod_barras]','$_POST[precio_compra]','$_POST[precio_venta]','$_POST[talla]','$_POST[nombre_producto]')";
				pg_query( $conexion, $sql );
			}
		}else{
			$data = 3;
		}
	}else{
		if($_POST['tipo'] == "m"){
			if( $_POST['cod_producto']){
				$data=verificar_cod_mod($conexion,$_POST['cod_producto'],$_POST['id_producto']);
				if( $data == 0 ){
					$sql="update producto set cod_producto='$_POST[cod_producto]',descripcion_producto='$_POST[descripcion_producto]',stock='$_POST[stock]',stock_minimo='$_POST[stock_minimo]',stock_maximo='$_POST[stock_maximo]',estado_producto='1',id_marca='$_POST[tipo_marca]',cod_barras='$_POST[cod_barras]',precio_compra='$_POST[precio_compra]',precio_venta='$_POST[precio_venta]',talla='$_POST[talla]',nombre_producto='$_POST[nombre_producto]' where id_producto ='$_POST[id_producto]'";
					pg_query( $conexion, $sql );
				}
			}else{
				$data = 3;
			}
		}
	}
	echo $data;
?>