<?php
	//error_reporting(0);
	function verificar_ci($conexion,$ci){
		if(strlen($ci) >= 10)
		{
			$sql="select id_usuario from usuario where ci_usuario ='$ci'";
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
			$sql="select id_usuario from usuario where id_usuario not in ('$id') and ci_usuario='$ci'";
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
	function verificar_nick($conexion,$nick){
		if(strlen($nick) > 1)
		{
			$sql="select id_usuario from usuario where nick_usuario ='$nick'";
			$devolver = null;
			$rs = pg_query( $conexion, $sql );
	        if( pg_num_rows($rs) > 0 ){
	        	$devolver=4;
	        }
	        else{
	         	$devolver=0;
	        }
		}
		else{
			$devolver=5;
		}
		return $devolver;
	}
	function verificar_nick_mod($conexion,$nick,$id){
		if(strlen($nick) > 1)
		{
			$sql="select id_usuario from usuario where id_usuario not in ('$id') and nick_usuario='$nick'";
			$devolver = null;
			$rs = pg_query( $conexion, $sql );
	        if( pg_num_rows($rs) > 0 ){
	        	$devolver=4;
	         }
	         else{
	         	$devolver=0;
	         }
		}
		else{
			$devolver=5;
		}
		return $devolver;
	}
?>