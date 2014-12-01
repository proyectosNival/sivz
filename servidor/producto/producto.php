<?php
	include '../conexion.php';
	include 'funciones_productos.php';
	include '../funciones_generales.php';
	$data;
	date_default_timezone_set('America/Guayaquil');
    $fecha=date('Y-m-d H:i:s', time());   
	$conexion = conectarse();
	///////////////valores imagen//////////
	$extension = explode(".", $_FILES["archivo"]["name"]);
	$extension = end($extension);
	$type = $_FILES["archivo"]["type"];
	$tmp_name = $_FILES["archivo"]["tmp_name"];
	$size = $_FILES["archivo"]["size"];	
	$nombre = basename($_FILES["archivo"]["name"], "." . $extension);				
	if($_GET['tipo'] == "g"){
		if( $_POST['cod_producto']){
			$data=verificar_cod($conexion,$_POST['cod_producto']);
			if( $data == 0 ){
				$cont=id_tabla($conexion,"producto","id_producto");
				$cont_kardex=id_tabla($conexion,"kardex","id_kardex");
				$cont_kardex_p=id_tabla($conexion,"kardex_producto","id_kardex_producto");
				if ($nombre == "") {
					$sql="insert into producto values('$cont','$_POST[cod_producto]','$_POST[descripcion_producto]','$_POST[stock]','$_POST[stock_minimo]','$_POST[stock_maximo]','1','$_POST[tipo_marca]','$_POST[cod_barras]','$_POST[precio_compra]','$_POST[precio_venta]','$_POST[talla]','$_POST[nombre_producto]','')";
				}else{
					$foto = $cont . '.' . $extension;					
					move_uploaded_file($_FILES["archivo"]["tmp_name"], "../../fotos/" . $foto);	
					$sql="insert into producto values('$cont','$_POST[cod_producto]','$_POST[descripcion_producto]','$_POST[stock]','$_POST[stock_minimo]','$_POST[stock_maximo]','1','$_POST[tipo_marca]','$_POST[cod_barras]','$_POST[precio_compra]','$_POST[precio_venta]','$_POST[talla]','$_POST[nombre_producto]','$foto')";
				}
				pg_query( $conexion, $sql );
				$sql="insert into kardex values('$cont_kardex','$cont','$fecha')";
				pg_query( $conexion, $sql );
				$sql="insert into kardex_producto values('$cont_kardex_p','$cont_kardex','$_POST[stock]','$_POST[precio_compra]','".$_POST['precio_compra'] * $_POST['stock']."','','','','$_POST[stock]','$_POST[precio_compra]','".$_POST['precio_compra'] * $_POST['stock']."','$fecha','Ingreso por inventario','Ingreso por formulario','')";
				pg_query( $conexion, $sql );
			}
		}else{
			$data = 3;
		}
	}else{
		if($_GET['tipo'] == "m"){
			if( $_POST['cod_producto']){
				$data=verificar_cod_mod($conexion,$_POST['cod_producto'],$_POST['id_producto']);
				if( $data == 0 ){
					if ($nombre == "") {
						$sql="update producto set cod_producto='$_POST[cod_producto]',descripcion_producto='$_POST[descripcion_producto]',stock='$_POST[stock]',stock_minimo='$_POST[stock_minimo]',stock_maximo='$_POST[stock_maximo]',estado_producto='1',id_marca='$_POST[tipo_marca]',cod_barras='$_POST[cod_barras]',precio_compra='$_POST[precio_compra]',precio_venta='$_POST[precio_venta]',talla='$_POST[talla]',nombre_producto='$_POST[nombre_producto]' where id_producto ='$_POST[id_producto]'";
						pg_query( $conexion, $sql );
					}else{
						$foto = $_POST['id_producto'] . '.' . $extension;												
						move_uploaded_file($_FILES["archivo"]["tmp_name"], "../../fotos/" . $foto);		
						$sql="update producto set cod_producto='$_POST[cod_producto]',descripcion_producto='$_POST[descripcion_producto]',stock='$_POST[stock]',stock_minimo='$_POST[stock_minimo]',stock_maximo='$_POST[stock_maximo]',estado_producto='1',id_marca='$_POST[tipo_marca]',cod_barras='$_POST[cod_barras]',precio_compra='$_POST[precio_compra]',precio_venta='$_POST[precio_venta]',talla='$_POST[talla]',nombre_producto='$_POST[nombre_producto]',foto='$foto' where id_producto ='$_POST[id_producto]'";
						pg_query($conexion, $sql)						;
					}
				}
			}else{
				$data = 3;
			}
		}
	}
	echo $data;
?>