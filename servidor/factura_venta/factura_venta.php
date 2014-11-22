<?php
	include '../conexion.php';
	include '../funciones_generales.php';
	$data;
	session_start();
	$conexion = conectarse();
	date_default_timezone_set('America/Guayaquil');
    $fecha=date('Y-m-d H:i:s', time());   
	$campo1 = $_POST['campo1'];
	$campo2 = $_POST['campo2'];
	$campo3 = $_POST['campo3'];
	$campo4 = $_POST['campo4'];	

	$arreglo1 = explode('|', $campo1);
	$arreglo2 = explode('|', $campo2);
	$arreglo3 = explode('|', $campo3);
	$arreglo4 = explode('|', $campo4);	

	$nelem = count($arreglo1);
	if($_POST['tipo'] == "g"){
		$cont=id_tabla($conexion,"factura_venta","id_factura_venta");
		$sql="insert into factura_venta values('$cont','$_POST[id_cliente_fv]','$_POST[fecha_facturaV]','$_POST[subtotal_fv]','$_POST[descuento_fv]','$_POST[iva_12_fv]','$_POST[total_fv]','$_POST[nro_facturaV]','0','$_SESSION[id]')";
		pg_query( $conexion, $sql );	
		
		for ($i = 1; $i < $nelem; $i++) {			
			/*detalles compra*/
			$id_detalle = id_tabla($conexion, "detalle_fv","id_detalle_fv");
			$sql = "insert into detalle_fv values ('$id_detalle','$cont','$arreglo1[$i]','$arreglo2[$i]','$arreglo3[$i]','$arreglo4[$i]')";
			pg_query( $conexion, $sql);   
			$sql = pg_query("select stock,precio_compra,precio_venta from producto where id_producto = '$arreglo1[$i]'");		
			while ($row = pg_fetch_row($sql)) {
	            $stock = $row[0];
	            $pc = $row[1];
	            $pv = $row[2];
	        }	        	     
	        /*kardex*/
	        $sql = pg_query("select id_kardex from kardex where id_producto = '$arreglo1[$i]'");
	        while ($row = pg_fetch_row($sql)) {
	            $id_kardex = $row[0];
	        }
	        $sql = pg_query("select c_t,p_t,t_t from kardex_producto where id_kardex = '$arreglo1[$i]' order by id_kardex_producto asc");
	        while($row = pg_fetch_row($sql)){
	        		$c_t = $row[0];
	        		$p_t = $row[1];
	        		$t_t = $row[2];
	        }	        
	        $stock = $c_t - $arreglo2[$i] ;	       

	        $t_compra = $arreglo2[$i] * $p_t;
	       	$t_compra = number_format($t_compra,2, '.', '');

	       	$t_total = $t_t - $t_compra;
			$t_total = number_format($t_total,2, '.', '');	        

			$t_precio_compra = $t_total / $stock; 
			$t_precio_compra = number_format($t_precio_compra,2, '.', '');	        

	        $cont_kardex=id_tabla($conexion,"kardex_producto","id_kardex_producto");
	        pg_query("insert into kardex_producto values ('$cont_kardex','$arreglo1[$i]','','','','$arreglo2[$i]','$p_t','$t_compra','$stock','$t_precio_compra','$t_total','$fecha','Por medio de factura venta','Factura venta','$cont')");
	        pg_query("update producto set stock = '$stock', precio_compra = '$t_precio_compra' where id_producto = '$arreglo1[$i]'");
	        /**/
		}				
		$data = $cont;
	}else{
		
	}
	echo $data;
?>