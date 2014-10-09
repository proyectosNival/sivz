<?php
	error_reporting(0);
	function ingreso($conexion,$user){
		$sql = "select id_usuario from usuario where nick_usuario='".strtolower ($user)."'";
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
		$sql = "select * from usuario,claves where usuario.id_usuario=claves.id_usuario and nick_usuario='".strtolower($admin)."' and clave='$pass' and tipo_usuario='1'";
		$devolver = null;
		$rs = pg_query( $conexion, $sql );
        if( pg_num_rows($rs) > 0 ){
        	$usuario = ingreso($conexion,$user);
        	$sql = "update claves set clave='".strtolower($user)."' where id_usuario='".strtolower($usuario)."'";
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

    function verifica_admin($conexion,$user,$clave){
        $sql = "select * from usuario,claves where usuario.id_usuario=claves.id_usuario and tipo_usuario='1' and nick_usuario='".strtolower($user)."' and clave='".strtolower($clave)."'";
        $devolver = null;
        $rs = pg_query( $conexion, $sql );
        if( pg_num_rows($rs) > 0 ){
            $devolver = true;
        }else{
            $devolver = false;
        }
        return $devolver;   
    }
	

?>