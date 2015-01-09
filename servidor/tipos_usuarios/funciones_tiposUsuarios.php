<?php
	//error_reporting(0);
	function verificar_nombre($conexion,$nombre){
		if(strlen($nombre) >= 1)
		{
			$sql="select id_tipo_usuario from tipos_usuario where nombre_usuario ='$nombre'";
			
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
	function verificar_nombre_mod($conexion,$nombre,$id){
		if(strlen($nombre) >= 1)
		{
			$sql="select id_tipo_usuario from tipos_usuario where id_tipo_usuario not in ('$id') and nombre_tipo_usuario='$nombre'";
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