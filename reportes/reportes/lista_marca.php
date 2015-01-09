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
        <h3>LISTA MARCAS </h3>
    </div>';
    include '../../servidor/conexion.php';
    conectarse();    
    $sql=pg_query("SELECT cod_barras,nombre_producto,stock,precio_venta,precio_compra,foto,nombre_marca from producto,marca where producto.id_marca = marca.id_marca and marca.id_marca = '$_GET[id]'");    
   
    $codigo.='<table><tr>';
    $codigo.='
    <td style="width:150px;text-align:left;border:solid 0px;">IMAGEN</td>   
    <td style="width:120px;text-align:center;border:solid 0px;">COD BARRAS</td>
    <td style="width:150px;text-align:left;border:solid 0px;">NOMBRE</td>   
    <td style="width:80px;text-align:center;border:solid 0px;">STOCK</td>   
    <td style="width:80px;text-align:center;border:solid 0px;">PRECIO V</td>
    <td style="width:80px;text-align:center;border:solid 0px;">PRECIO C</td>
    <td style="width:80px;text-align:center;border:solid 0px;">MARCA</td></tr>';
    while($row=pg_fetch_row($sql)){
        $codigo.="<tr>
        <td style='width:150px;text-align:left;border:solid 0px;''> <img  style='width:50px;' src='../../fotos/$row[5]' /></td>   
        <td style='width:120px;text-align:left;border:solid 0px;'>".$row[0]."</td>   
        <td style='width:150px;text-align:left;border:solid 0px;'>".$row[1]."</td>   
        <td style='width:80px;text-align:center;border:solid 0px;'>".$row[2]."</td>   
        <td style='width:80px;text-align:center;border:solid 0px;'>".$row[3]."</td>   
        <td style='width:80px;text-align:center;border:solid 0px;'>".$row[4]."</td>   
        <td style='width:80px;text-align:left;border:solid 0px;'>".$row[6]."</td>   
        </tr>";
    }
    $codigo.='</tr>';
    
    $codigo.='</table>';  
   
    
      
   
    $codigo.='</body></html>';                           
    $codigo=utf8_decode($codigo);

    $dompdf= new DOMPDF();
    $dompdf->load_html($codigo);
    ini_set("memory_limit","100M");
    $dompdf->set_paper("A4","portrait");
    $dompdf->render();
    //$dompdf->stream("reporteRegistro.pdf");
    $dompdf->stream('factura_compra.pdf',array('Attachment'=>0));
    
?>