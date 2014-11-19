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
	$campo5 = $_POST['campo5'];

	$arreglo1 = explode('|', $campo1);
	$arreglo2 = explode('|', $campo2);
	$arreglo3 = explode('|', $campo3);
	$arreglo4 = explode('|', $campo4);
	$arreglo5 = explode('|', $campo5);

	$nelem = count($arreglo1);
	if($_POST['tipo'] == "g"){
		$cont=id_tabla($conexion,"factura_compra","id_factura_compra");
		$sql="insert into factura_compra values('$cont','$_POST[fecha_factura]','$_POST[id_proveedor_fc]','$_POST[subtotal]','$_POST[descuento]','$_POST[iva_12]','$_POST[total_fc]','$_POST[nro_factura]','0','$_SESSION[id]')";
		pg_query( $conexion, $sql );	
		
		for ($i = 1; $i < $nelem; $i++) {			
			/*detalles compra*/
			$id_detalle = id_tabla($conexion, "detalle_fc","id_detalle_fc");
			$sql = "insert into detalle_fc values ('$id_detalle','$cont','$arreglo1[$i]','$arreglo2[$i]','$arreglo3[$i]','$arreglo5[$i]')";
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
	        $stock = $arreglo2[$i] + $c_t;	       

	        $t_precio_compra = $t_t +$arreglo5[$i];

	        $precio_compra = $t_precio_compra / $stock;
	        $precio_compra = number_format($precio_compra,2, '.', '');

	        if($pv == 0){
	        	$precio_venta = ($pv + $arreglo4[$i]);
	    	}else{
	    		$precio_venta = ($pv + $arreglo4[$i]) / 2;
	    	}
	        $precio_venta = number_format($precio_venta,2, '.', '');

	        $cont_kardex=id_tabla($conexion,"kardex_producto","id_kardex_producto");
	        pg_query("insert into kardex_producto values ('$cont_kardex','$arreglo1[$i]','$arreglo2[$i]','$arreglo3[$i]','$arreglo5[$i]','','','','$stock','$precio_compra','$t_precio_compra','$fecha')");
	        pg_query("update producto set stock = '$stock', precio_compra = '$precio_compra', precio_venta = '$precio_venta' where id_producto = '$arreglo1[$i]'");
	        /**/
		}				
		$data = 0;
	}else{
		
	}
	echo $data;
?>