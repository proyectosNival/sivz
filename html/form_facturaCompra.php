<form class="form-horizontal " action="" rol="form" id="form_facturaCompra" method="post">
   <div class="panel panel-default">
     <div class="panel-heading"><span class="glyphicon glyphicon-th"></span> <b> Factura Compra </b></div>
       <div class="panel-body form-styles">
         <div class="container">
           <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='nro_factura'>Nro. Factura</label>
             <div class="col-sm-9 has-error">
               <input type="hidden" class="form-control" id='id_factura_compra' name="id_factura_compra" >  
               <input type="text" class="form-control" id='nro_factura' name="nro_factura" data-toggle="tooltip" data-original-title="Nro de factura" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" >  
             </div>
           </div>
           <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='ci_proveedor_fc'>CI /RUC Pro.</label>
             <div class="col-sm-9 has-error">
                <input type="hidden" class="form-control" id='id_proveedor_fc' name="id_proveedor_fc" >  
                <input type="text" class="form-control" id='ci_proveedor_fc' name="ci_proveedor_fc" data-toggle="tooltip" data-original-title="RUC CI Proveedor" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" >  
             </div>
           </div>
           <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='nombre_proveedor_fc'>Nombre Pro.</label>
             <div class="col-sm-9 has-error">
               <input type="text" class="form-control" id='nombre_proveedor_fc' name="nombre_proveedor_fc" data-toggle="tooltip" data-original-title="RUC CI Proveedor" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" >  
             </div>
           </div>
            <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='fecha_factura'>Fecha</label>
             <div class="col-sm-9">
               <input type="date" class="form-control" id='fecha_factura' name="fecha_factura" data-toggle="tooltip" data-original-title="RUC CI Proveedor" >  
             </div>
           </div>
           <div class="form-group col-md-10" >
             <div class="col-sm-3">
             <input type="hidden" class="form-control" id='id_producto_fc' name="id_producto_fc" >  
               <input type="text" class="form-control" id='cod_prod_fc' placeholder="Código Prod. Barras" name="cod_prod_fc" data-toggle="tooltip" data-original-title="RUC CI Proveedor" >  
             </div>
             <div class="col-sm-2">
               <input type="text" class="form-control" id='nombre_prod_fc' name="nombre_prod_fc" placeholder="Nombre Prod." data-toggle="tooltip" data-original-title="RUC CI Proveedor" >  
             </div>
             <div class="col-sm-2">
               <input type="text" class="form-control" id='cantidad_fc' name="cantidad_fc" placeholder="Cantidad" data-toggle="tooltip" data-original-title="RUC CI Proveedor" >  
             </div>
             <div class="col-sm-2">
               <input type="text" class="form-control" id='precio_compra_fc' name="precio_compra_fc" placeholder="P. Compra" data-toggle="tooltip" data-original-title="RUC CI Proveedor" >  
             </div>
             <div class="col-sm-2">
               <input type="text" class="form-control" id='precio_venta_fc' name="precio_venta_fc" placeholder="P. Venta" data-toggle="tooltip" data-original-title="RUC CI Proveedor" >  
             </div>
           </div>
           <div class="form-group col-md-10" >

           </div>
           <div class="form-group col-md-10" style="margin-top:0px;margin-bottom:0px;" >
            <div class="col-sm-9">
            </div>
            <div class="col-sm-2">
               <input type="text" class="form-control" id='cod_prod_fc' placeholder="Subtotal" name="cod_prod_fc" data-toggle="tooltip" data-original-title="RUC CI Proveedor" >  
             </div>
           </div>
           <div class="form-group col-md-10" style="margin-top:0px;margin-bottom:0px;">
            <div class="col-sm-9">
            </div>
            <div class="col-sm-2">
               <input type="text" class="form-control" id='cod_prod_fc' placeholder="Iva 12%" name="cod_prod_fc" data-toggle="tooltip" data-original-title="RUC CI Proveedor" >  
             </div>
           </div>
           <div class="form-group col-md-10" style="margin-top:0px;margin-bottom:0px;">
            <div class="col-sm-9">
            </div>
            <div class="col-sm-2">
               <input type="text" class="form-control" id='cod_prod_fc' placeholder="Descuento" name="cod_prod_fc" data-toggle="tooltip" data-original-title="RUC CI Proveedor" >  
             </div>
           </div>
           <div class="form-group col-md-10" style="margin-top:0px;margin-bottom:0px;">
            <div class="col-sm-9">
            </div>
            <div class="col-sm-2">
               <input type="text" class="form-control" id='cod_prod_fc' placeholder="Total" name="cod_prod_fc" data-toggle="tooltip" data-original-title="RUC CI Proveedor" >  
             </div>
           </div>
         </div>
       </div>
       <div class="panel-footer form-footer">
         <div>
           <button class="btn btn-primary" id="btn_guardarFC" type="submit">  
           <span class="glyphicon glyphicon-log-in"></span> Guardar</button>
         </div>
         <!--<div>
           <button class="btn btn-primary" id="btn_eliminarCliente" type="submit">  
           <span class="glyphicon glyphicon-log-in"></span> Eliminar</button>
         </div>-->
         <div>
           <button class="btn btn-primary" id="btn_limpiarFC" type="button">  
           <span class="glyphicon glyphicon-edit"></span> Limpiar</button>
         </div>
         <div>
           <button class="btn btn-primary" id="btn_buscarFC" type="button" data-toggle="modal" >  
           <span class="glyphicon glyphicon-log-in"></span> Buscar</button>
         </div>
       </div>
     </div>
 </form>

 