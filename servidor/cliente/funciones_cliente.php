<?php
	//error_reporting(0);
	function verificar_ci($conexion,$ci){
		if(strlen($ci) >= 10)
		{
			$sql="select id_cliente from clientes where ci_ruc_cliente ='$ci'";
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
	function verificar_ci_mod($conexion,$ci,$id){
		if(strlen($ci) >= 10)
		{
			$sql="select id_cliente from clientes where id_cliente not in ('$id') and ci_ruc_cliente='$ci'";
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