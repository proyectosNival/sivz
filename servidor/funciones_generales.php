<?php
	function id_tabla($conexion,$tabla,$id){
		$cont=0;
		$sql="select max($id) from $tabla";
		$rs = pg_query( $conexion, $sql );
	    while($row=pg_fetch_row($rs)){
	    	$cont=$row[0];
	    }
	    $cont++;
	    return $cont;
	}
	function busquedas3($conexion, $sql){
		$resp =true;
		$sql = pg_query( $conexion, $sql );
		if($sql){
			while ($row = pg_fetch_row($sql)) {
			    $data[] = array(
			        'value' => $row[0],
			        'label1' => $row[1],
			        'label2' => $row[2],			        
			    );
			}
			echo $data = json_encode($data);
		}
	}
	function busquedas4($conexion, $sql){
		$resp =true;
		$sql = pg_query( $conexion, $sql );
		if($sql){
			while ($row = pg_fetch_row($sql)) {
			    $data[] = array(
			        'value' => $row[0],
			        'label1' => $row[1],
			        'label2' => $row[2],			        
			        'label3' => $row[3],
			    );
			}
			echo $data = json_encode($data);
		}
	}
	function busquedaBarras($conexion, $sql){
		$lista = array();
		$sql=pg_query($sql);   
		while($row=pg_fetch_row($sql)){							
			$lista[]=$row[0];															
			$lista[]=$row[1];																
			$lista[]=$row[2];																
			$lista[]=$row[3];																
			$lista[]=$row[4];																
		}	
    	echo $lista=json_encode($lista); 
	}
?>