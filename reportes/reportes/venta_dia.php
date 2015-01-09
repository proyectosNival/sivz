<?php
require('../dompdf/dompdf_config.inc.php');
session_start();
    $codigo='<html> 
    <head> 
        <link rel="stylesheet" href="../../css/estilosAgrupados.css" type="text/css" /> 
    </head> 
    <body>
        <header>
            <img src="../../images/icono.jpg" />
            <div id="me">
                <h2 style="text-align:center;border:solid 0px;width:100%;">Calzado Elegancia</h2>
                <h4 style="text-align:center;border:solid 0px;width:100%;">Venta de Zapatos</h4>
                <h4 style="text-align:center;border:solid 0px;width:100%;">Noemi Mesa</h4>
                <h4 style="text-align:center;border:solid 0px;width:100%;">Calle Juan Montalvo y Modesto Jaramillo</h4>
                <h4 style="text-align:center;border:solid 0px;width:100%;">Telf: 2924769 Cel:  0984676950</h4>
            </div>            
    </header>        
    <hr>
    <div id="linea">
        <h3>TOTAL DE VENTAS </h3>
    </div>';
    include '../../servidor/conexion.php';
    conectarse();               
    $fv= 0;
    $fc= 0;
    $total = 0;
    $sql = pg_query("select total from factura_venta where  fecha_venta between '$_GET[fi]' and '$_GET[ff]'");
    while($row = pg_fetch_row($sql)){
        $fv = $fv + $row[0];
    }
    $sql = pg_query("select total from factura_compra where  fecha_factura between '$_GET[fi]' and '$_GET[ff]'");
    while($row = pg_fetch_row($sql)){
        $fc = $fc + $row[0];
    }
    $codigo.= '<table>
    <tr>
    <td style="width:600px;text-align:left;"><b>Total Ventas:</b></td>   
    <td style="width:100px;text-align:left;">$'.$fv.'</td>   
    </tr>
    <tr>
    <td style="width:600px;text-align:left;"><b>Total Compras:</b></td>   
    <td style="width:100px;text-align:left;">$'.$fc.'</td>   
    </tr>
    <tr>    
    </table>';
      
   
    $codigo.='</body></html>';                           
    $codigo=utf8_decode($codigo);

    $dompdf= new DOMPDF();
    $dompdf->load_html($codigo);
    ini_set("memory_limit","100M");
    $dompdf->set_paper("A4","portrait");
    $dompdf->render();
    //$dompdf->stream("reporteRegistro.pdf");
    $dompdf->stream('venta_diaria.pdf',array('Attachment'=>0));
        
    
?>