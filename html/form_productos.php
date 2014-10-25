<form class="form-horizontal " action="" rol="form" id="form_productos" method="post">
   <div class="panel panel-default">
     <div class="panel-heading"><span class="glyphicon glyphicon-user"></span> <b> Ingreso de Proveedores </b></div>
       <div class="panel-body form-styles">
         <div class="container">
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='cod_producto'>Código Producto</label>
             <div class="col-sm-7">
               <input type="hidden" class="form-control" id='id_producto' name="id_producto" >  
               <input type="text" class="form-control" id='cod_producto' name="cod_producto" readonly>  
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='descripcion_producto'>Descripción</label>
             <div class="col-sm-7 has-error">
               <textarea  style="width:100%" class="form-control" id='descripcion_producto' name="descripcion_producto" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}"></textarea> 
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='stock'>Stock</label>
             <div class="col-sm-7 has-error">
               <input type="number" class="form-control" id='stock' name="stock" data-toggle="tooltip" data-original-title="Indique el precio inicial" required pattern="[0-9]{1,}" min="0">  
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='stock_minimo'>Stock Mínimo</label>
             <div class="col-sm-7 has-error">
               <input type="number" class="form-control" id='stock_minimo' name="stock_minimo" data-toggle="tooltip" data-original-title="Indique el precio inicial" required pattern="[0-9]{1,}" min="0">  
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='stock_maximo'>Stock Máximo</label>
             <div class="col-sm-7 has-error">
               <input type="number" class="form-control" id='stock_maximo' name="stock_maximo" data-toggle="tooltip" data-original-title="Indique el precio inicial" required pattern="[0-9]{1,}" min="0">  
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='direccion_proveedor'>Marca</label>
             <div class="col-sm-7">
               <select class="form-control" id="marca_producto" name="marca_producto">
                
              </select> 
             </div>
           </div>
            <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='stock_maximo'>Stock Máximo</label>
             <div class="col-sm-7 has-error">
               <input type="number" class="form-control" id='stock_maximo' name="stock_maximo" data-toggle="tooltip" data-original-title="Indique el precio inicial" required pattern="[0-9]{1,}" min="0">  
             </div>
           </div>
            <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='stock_maximo'>Color</label>
             <div class="col-sm-7 has-error">
               <input type="text" class="form-control" id="color" placeholder="Color">
             </div>
           </div>
            <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='stock_maximo'>Precio Compra</label>
             <div class="col-sm-7 has-error">
               <input type="text" class="form-control" id="precio_compra" placeholder="Precio compra">
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='stock_maximo'>Precio Venta</label>
             <div class="col-sm-7 has-error">
               <input type="text" class="form-control" id="precio_venta" placeholder="Precio venta">
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='stock_maximo'>Talla</label>
             <div class="col-sm-7 has-error">
               <input type="number" class="form-control" id="talla" placeholder="Talla">
             </div>
           </div>
            <div class="form-group col-sm-6">
             <div class="form-inline" id="agregar_productos">
                
                <input type="email" class="form-control" id="cod_barras" placeholder="Código de Barras">
                <button class="btn btn-primary" id="btn_productosAgregar" type="button" data-toggle="modal" >  
                <span class="glyphicon glyphicon-plus"></span> Agregar</button>
             </div>
           </div>
           
         </div>
       </div>
       <div class="panel-footer form-footer">
         <div>
           <button class="btn btn-primary" id="btn_guardarProveedor" type="submit">  
           <span class="glyphicon glyphicon-log-in"></span> Guardar</button>
         </div>
         <!--<div>
           <button class="btn btn-primary" id="btn_eliminarCliente" type="submit">  
           <span class="glyphicon glyphicon-log-in"></span> Eliminar</button>
         </div>-->
         <div>
           <button class="btn btn-primary" id="btn_limpiarProveedor" type="button">  
           <span class="glyphicon glyphicon-edit"></span> Limpiar</button>
         </div>
         <div>
           <button class="btn btn-primary" id="btn_buscarProveedor" type="button" data-toggle="modal" >  
           <span class="glyphicon glyphicon-log-in"></span> Buscar</button>
         </div>
       </div>
     </div>
 </form>

 