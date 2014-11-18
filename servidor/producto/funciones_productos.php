<?php
	//error_reporting(0);
	function verificar_cod($conexion,$nombre){
		if(strlen($nombre) >= 1)
		{
			$sql="select id_producto from producto where cod_producto ='$nombre'";
			$devolver = null;
			$rs = pg_query( $conexion, $sql );
	        if( pg_num_rows($rs) > 0 ){
	        	$devolver=1;
	         }
	         else{
	         	$devolver=0;
	         }
		}
		else{
			$devolver=2;
		}
		return $devolver;
	}
	function verificar_cod_mod($conexion,$nombre,$id){
		if(strlen($nombre) >= 1)
		{
			$sql="select id_producto from producto where id_producto not in ('$id') and cod_producto='$nombre'";
			$devolver = null;
			$rs = pg_query( $conexion, $sql );
	        if( pg_num_rows($rs) > 0 ){
	        	$devolver=1;
	         }
	         else{
	         	$devolver=0;
	         }
		}
		else{
			$devolver=2;
		}
		return $devolver;
	}
?>