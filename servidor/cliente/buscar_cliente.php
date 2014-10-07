<?php
	include '../conexion.php';
	$lista = array();
	$conexion = conectarse();
	$sql="select id_cliente,ci_ruc_cliente,nombres_cliente,telefono_cliente,celular_cliente,direccion_cliente from clientes order by id_cliente asc offset 0 limit 10";
	$devolver = null;
	$rs = pg_query( $conexion, $sql );
	while($row = pg_fetch_row($rs)){
		$lista[]=$row[0];  
		$lista[]=$row[1];                       
		$lista[]=$row[2];                                                    
		$lista[]=$row[3];           
		$lista[]=$row[4];         
		$lista[]=$row[5];         
	}
	echo $lista=json_encode($lista); 
?>