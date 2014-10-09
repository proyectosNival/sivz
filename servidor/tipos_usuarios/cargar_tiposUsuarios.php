<?php
	include '../conexion.php';
	$data;
	$conexion = conectarse();
	$cont=0;
	$consulta = pg_query("select id_tipo_usuario,nombre_tipo_usuario from tipos_usuario where id_tipo_usuario not in ('1') order by id_tipo_usuario asc ");   
	while ($row = pg_fetch_row($consulta)) {
		echo "<option value='$row[0]'>$row[1]</option>";
	}
?>