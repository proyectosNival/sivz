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
        <h3>FACTURA COMPRA </h3>
    </div>';
    include '../../servidor/conexion.php';
    conectarse();    
    $sql=pg_query("select id_factura_compra,nro_factura,fecha_factura,nombre_usuario,ci_ruc_proveedor,nombre_proveedor,subtotal,iva,descuento,total from factura_compra,proveedor,usuario where factura_compra.id_proveedor = proveedor.id_proveedor and factura_compra.id_usuario = usuario.id_usuario and id_factura_compra = '$_GET[id]'");    
    while($row=pg_fetch_row($sql)){
        $codigo.='<table border=0>'; 
        $codigo.='<tr>
        <td style="width:100px;text-align:left;"><b>Comprobante:</b></td>   
        <td style="width:130px;text-align:left;">'.$row[1].'</td>   
        <td style="width:100px;text-align:left;"><b>Fecha:</b></td>
        <td style="width:130px;text-align:left;">'.$row[2].'</td>   
        <td style="width:100px;text-align:left;"><b>Usuario:</b></td>
        <td style="width:130px;text-align:left;">'.$row[3].'</td></tr>
        <tr>
            <td style="width:100px;text-align:left;"><b>CI. Proveedor:</b></td>   
            <td style="width:130px;text-align:left;">'.$row[4].'</td>   
            <td style="width:100px;text-align:left;"><b>Nombre Proveedor:</b></td>   
            <td style="width:130px;text-align:left;border:solid 0px;" colspan=3>'.$row[5].'</td>';
        $codigo.='</tr>';                     
        $codigo.='</table>';
    }    
    $sql=pg_query("select detalle_fc.id_producto,cod_producto,nombre_producto,cantidad,precio,total from detalle_fc,producto where id_factura_compra = '$_GET[id]' and detalle_fc.id_producto = producto.id_producto");   
    $codigo.='<br/><table border=0><tr>';  
    $codigo.='<td style="width:100px;text-align:center;border:solid 1px;">Cantidad</td>
    <td style="width:400px;text-align:center;border:solid 1px;">Descripción</td>   
    <td style="width:100px;text-align:center;border:solid 1px;">V. Unitario</td>   
    <td style="width:100px;text-align:center;border:solid 1px;">V. Total</td>';
    while($row=pg_fetch_row($sql)){
        $codigo.='<tr>
        <td style="width:100px;text-align:left;border:solid 1px;">'.$row[3].'</td>   
        <td style="width:400px;text-align:left;border:solid 1px;">'.$row[2].'</td>   
        <td style="width:100px;text-align:left;border:solid 1px;">'.$row[4].'</td>   
        <td style="width:100px;text-align:left;border:solid 1px;">'.$row[5].'</td>   
        </tr>';
    }
    $codigo.='</table></tr>';
    $sql=pg_query("select subtotal,iva,descuento,total from factura_compra,proveedor,usuario where factura_compra.id_proveedor = proveedor.id_proveedor and factura_compra.id_usuario = usuario.id_usuario and id_factura_compra = '$_GET[id]'");    
    $codigo.='<table style="margin-left:385px;">';
    while($row=pg_fetch_row($sql)){
        $codigo.='
        <tr>
        <td style="width:100px;text-align:left;border:solid 1px;">Descuento</td>   
        <td style="width:100px;text-align:left;border:solid 1px;">'.$row[2].'</td>
        </tr>           
        <tr>
        <td style="width:100px;text-align:left;border:solid 1px;">Subtotal</td>  
        <td style="width:100px;text-align:left;border:solid 1px;">'.$row[0].'</td>
        </tr>
        <tr>
        <td style="width:100px;text-align:left;border:solid 1px;">Iva 12%</td>  
        <td style="width:100px;text-align:left;border:solid 1px;">'.$row[1].'</td>
        </tr>   
        <tr>
        <td style="width:100px;text-align:left;border:solid 1px;">Total</td>  
        <td style="width:100px;text-align:left;border:solid 1px;">'.$row[3].'</td>
        </tr>';
    }
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