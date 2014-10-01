<?php
	error_reporting(0);
	function ingreso($conexion,$user){
		$sql = "select id_usuario from usuario where nick_usuario='$user'";
		$devolver = null;
		$rs = pg_query( $conexion, $sql );
        if( pg_num_rows($rs) > 0 ){
        	while($row = pg_fetch_row($rs))
            	$devolver = $row[0];
         }
        return $devolver;
	}
	function clave($conexion,$id,$pass){

		$sql = "select id_clave from claves where id_usuario='$id' and clave='$pass'";
		$devolver = null;
		$rs = pg_query( $conexion, $sql );
        if( pg_num_rows($rs) > 0 ){
        	while($row = pg_fetch_row($rs))
            	$devolver = $row[0];
         }
        return $devolver;
	}

	function restaurarAcceso($conexion,$user,$pass,$admin){
		$sql = "select * from usuario,claves where usuario.id_usuario=claves.id_usuario and nick_usuario='$admin' and clave='$pass' and tipo_usuario='1'";
		$devolver = null;
		$rs = pg_query( $conexion, $sql );
        if( pg_num_rows($rs) > 0 ){
        	$usuario = ingreso($conexion,$user);
        	$sql = "update claves set clave='$user' where id_usuario='$usuario'";
        	if(pg_query( $conexion, $sql )){
        		$devolver = true;		
        	}else{
        		$devolver = false;
        	}
        }else{
        	$devolver = false;
        }
        return $devolver;	
	}
	

?>