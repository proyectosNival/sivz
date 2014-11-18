<?php
	include '../conexion.php';
	$data;
	$conexion = conectarse();
	$cont=0;
	$consulta = pg_query("select id_marca,nombre_marca from marca order by id_marca asc ");   
	while ($row = pg_fetch_row($consulta)) {
		echo "<option value='$row[0]'>$row[1]</option>";
	}
?>