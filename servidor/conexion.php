<?php
    function conectarse()
    {
    	$conexion = null;
        try
        {
         //$conexion = pg_connect("dbname=daje5fnc2ou1co host=ec2-184-72-238-68.compute-1.amazonaws.com port=5432 user=xtocfivszednnm password=t1gO5WAORLMKWh7iGFJ394MeGW sslmode=require");
         $conexion = pg_connect("host=localhost dbname=sivz port=5432 user=postgres password=root");
         if( $conexion == false )
                 throw new Exception( "Error PostgreSQL ".pg_last_error() );
        }
        catch( Exception $e )
        {
          throw $e;
        }
        return $conexion;
    }
?>