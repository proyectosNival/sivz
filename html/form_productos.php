<form class="form-horizontal " action="" rol="form" id="form_productos" method="post">
   <div class="panel panel-default">
     <div class="panel-heading"><span class="glyphicon glyphicon-file"></span> <b> Ingreso de Productos </b></div>
       <div class="panel-body form-styles">
         <div class="container">
           <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='cod_producto'>Cod. Producto</label>
             <div class="col-sm-9 has-error">
               <input type="hidden" class="form-control" id='id_producto' name="id_producto" >  
               <input type="text" class="form-control" id='cod_producto' name="cod_producto" data-toggle="tooltip" data-original-title="Solo Números. Min. 10 carácteres Max. 20 carácteres" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" maxlength="20" minlength="1">  
             </div>
           </div>
           <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='cod_barras'>Cod. Barras</label>
             <div class="col-sm-9">
               <input type="text" class="form-control" id='cod_barras' name="cod_barras" data-toggle="tooltip" data-original-title="Solo Números. Min. 10 carácteres Max. 20 carácteres" >  
             </div>
           </div>
           <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='nombre_producto'>Nombre Prod.</label>
             <div class="col-sm-9 has-error">
               <input type="text" class="form-control" id='nombre_producto' name="nombre_producto" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}">  
             </div>
           </div>
           <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='descripcion_producto'>Descripción</label>
             <div class="col-sm-9">
               <textarea class="form-control" id='descripcion_producto' name="descripcion_producto" ></textarea> 
             </div>
           </div>
           <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='stock'>Stock</label>
             <div class="col-sm-9">
               <input type="text" class="form-control" id='stock' name="stock" data-toggle="tooltip" data-original-title="Solo Números." value="0">  
             </div>
           </div>
           <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='stock_minimo'>Stock Mínimo</label>
             <div class="col-sm-9">
               <input type="text" class="form-control" id='stock_minimo' name="stock_minimo" data-toggle="tooltip" data-original-title="Solo Números." value="0">  
             </div>
           </div>
            <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='stock_maximo'>Stock Máximo</label>
             <div class="col-sm-9">
               <input type="text" class="form-control" id='stock_maximo' name="stock_maximo" data-toggle="tooltip" data-original-title="Solo Números." value="0">  
             </div>
           </div>
            <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='tipo_marca'>Marca</label>
             <div class="col-sm-9">
              <select class="form-control" id="tipo_marca" name="tipo_marca">
                
              </select> 
             </div>
           </div>
            <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='precio_compra'>P. Compra</label>
             <div class="col-sm-9">
               <input type="text" class="form-control" id='precio_compra' name="precio_compra" data-toggle="tooltip" data-original-title="Solo Números." value="0">  
             </div>
           </div>
            <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='precio_venta'>Precio Venta</label>
             <div class="col-sm-9">
               <input type="text" class="form-control" id='precio_venta' name="precio_venta" data-toggle="tooltip" data-original-title="Solo Números." value="0">  
             </div>
           </div>
           <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='talla'>Talla</label>
             <div class="col-sm-9">
               <input type="text" class="form-control" id='talla' name="talla" data-toggle="tooltip" data-original-title="Solo Números." value="0">  
             </div>
           </div>
         </div>
       </div>
       <div class="panel-footer form-footer">
         <div>
           <button class="btn btn-primary" id="btn_guardarProducto" type="submit">  
           <span class="glyphicon glyphicon-log-in"></span> Guardar</button>
         </div>
         <!--<div>
           <button class="btn btn-primary" id="btn_eliminarCliente" type="submit">  
           <span class="glyphicon glyphicon-log-in"></span> Eliminar</button>
         </div>-->
         <div>
           <button class="btn btn-primary" id="btn_limpiarProducto" type="button">  
           <span class="glyphicon glyphicon-edit"></span> Limpiar</button>
         </div>
         <div>
           <button class="btn btn-primary" id="btn_buscarProducto" type="button" data-toggle="modal" >  
           <span class="glyphicon glyphicon-log-in"></span> Buscar</button>
         </div>
       </div>
     </div>
 </form>

 