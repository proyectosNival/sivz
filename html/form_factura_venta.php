<form class="form-horizontal " action="" rol="form" id="form_facturaVenta" method="post">
  <div class="panel panel-default">
    <div class="panel-heading"><span class="glyphicon glyphicon-th"></span> <b> Factura Venta </b></div>
    <div class="panel-body form-styles">
      <div class="container">
        <div class="col-lg-10 col-md-10 col-sm-11 col-xs-12" >       
          <div class="form-group col-md-6">
            <label class="col-sm-3 control-label" for='nro_facturaV'>Nro. Factura</label>
            <div class="col-sm-9 has-error">
              <input type="hidden" class="form-control" id='id_factura_venta' name="id_factura_venta" >  
              <input type="text" class="form-control" id='nro_facturaV' name="nro_facturaV" data-toggle="tooltip" data-original-title="Nro de factura" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" >  
            </div>
          </div>
          <div class="form-group col-md-6">
            <label class="col-sm-3 control-label" for='ci_cliente_fv'>CI /RUC CLI.</label>
            <div class="col-sm-9 has-error">
              <input type="hidden" class="form-control" id='id_cliente_fv' name="id_cliente_fv" >  
              <input type="text" class="form-control" id='ci_cliente_fv' name="ci_cliente_fv" data-toggle="tooltip" data-original-title="RUC CI Cliente" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" >  
            </div>
          </div>
          <div class="form-group col-md-6">
            <label class="col-sm-3 control-label" for='nombre_cliente_fv'>Nombre Cli.</label>
            <div class="col-sm-9 has-error">
              <input type="text" class="form-control" id='nombre_cliente_fv' name="nombre_cliente_fv" data-toggle="tooltip" data-original-title="Nombre Cliente" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" >  
            </div>
          </div>
          <div class="form-group col-md-6">
            <label class="col-sm-3 control-label" for='fecha_facturaV'>Fecha</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id='fecha_facturaV' name="fecha_facturaV" >  
            </div>
          </div>          
          <div class="col-sm-2">
          <input type="hidden" class="form-control" id='id_producto_fv' name="id_producto_fv" >  
            <input type="text" class="form-control" id='cod_prod_fv' placeholder="Código Prod. Barras" name="cod_prod_fv">  
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id='nombre_prod_fv' name="nombre_prod_fv" placeholder="Nombre Prod." >  
          </div>
          <div class="col-sm-2">
            <input type="text" class="form-control" id='cantidad_fv' name="cantidad_fv" placeholder="Cantidad" >  
          </div>
          <div class="col-sm-2">
            <input type="text" class="form-control" id='precio_venta_fv' name="precio_venta_fv" placeholder="P. Venta" >  
          </div>
          <div class="col-sm-2">
            <input type="text" readonly class="form-control" id='precio_total_fv' name="precio_total_fv" placeholder="Precio Venta" >  
          </div>         
          <div class="col-sm-12" id="list_fv">
            <br />
            <table id="list1" class="" align="center" ></table>
          </div>
          <div class="form-group col-md-12" style="margin-top:0px;margin-bottom:0px;" >
            <div class="col-sm-7">              
            </div>
            <div class="col-sm-2">
              <label class="col-sm-12 control-label">Subtotal</label>
            </div>
            <div class="col-sm-2">
              <input type="text" class="form-control" id='subtotal_fv' readonly placeholder="Subtotal_fv" name="subtotal_fv" value="0.00">  
            </div>
          </div>
          <div class="form-group col-md-12" style="margin-top:0px;margin-bottom:0px;">
            <div class="col-sm-7">              
            </div>
            <div class="col-sm-2">
              <label class="col-sm-12 control-label">Iva 12%</label>
            </div>
            <div class="col-sm-2">
              <input type="text" class="form-control" id='iva_12_fv' readonly placeholder="Iva 12%" name="iva_12_fv" value="0.00">  
            </div>
          </div>
          <div class="form-group col-md-12" style="margin-top:0px;margin-bottom:0px;">
            <div class="col-sm-7">              
            </div>
            <div class="col-sm-2">
              <label class="col-sm-12 control-label">Descuento</label>
            </div>
            <div class="col-sm-2">
              <input type="text" class="form-control" id='descuento_fv' readonly placeholder="Descuento" name="descuento_fv" value="0.00" >  
            </div>
          </div>
          <div class="form-group col-md-12" style="margin-top:0px;margin-bottom:0px;">
            <div class="col-sm-7">              
            </div>
            <div class="col-sm-2">
              <label class="col-sm-12 control-label">Total</label>
            </div>
            <div class="col-sm-2">
              <input type="text" class="form-control" id='total_fv' readonly placeholder="Total" name="total_fv" value="0.00">  
            </div>
          </div>
        </div>
      </div>
      <div class="panel-footer form-footer">
        <div>
          <button class="btn btn-primary" id="btn_guardarFV" type="button">  
          <span class="glyphicon glyphicon-log-in"></span> Guardar</button>
        </div>
        <!--<div>
          <button class="btn btn-primary" id="btn_eliminarCliente" type="submit">  
          <span class="glyphicon glyphicon-log-in"></span> Eliminar</button>
        </div>-->
        <div>
          <button class="btn btn-primary" id="btn_limpiarFV" type="button">  
          <span class="glyphicon glyphicon-edit"></span> Limpiar</button>
        </div>
        <div>
          <button class="btn btn-primary" id="btn_buscarFV" type="button" data-toggle="modal" >  
          <span class="glyphicon glyphicon-log-in"></span> Buscar</button>
        </div>
      </div>
    </div>
  </div>
</form>

 