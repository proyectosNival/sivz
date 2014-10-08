<form class="form-horizontal " action="" rol="form" id="form_proveedores" method="post">
   <div class="panel panel-default">
     <div class="panel-heading"><span class="glyphicon glyphicon-user"></span> <b> Ingreso de Proveedores </b></div>
       <div class="panel-body form-styles">
         <div class="container">
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='ci_ruc_proveedor'>CI. Cliente</label>
             <div class="col-sm-9 has-error">
               <input type="hidden" class="form-control" id='id_proveedor' name="id_proveedor" >  
               <input type="text" class="form-control" id='ci_ruc_proveedor' name="ci_ruc_proveedor" data-toggle="tooltip" data-original-title="Solo Números. Min. 10 carácteres Max. 20 carácteres" required pattern="[0-9]{10,20}" maxlength="20" minlength="10">  
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='nombre_proveedor'>Nombres</label>
             <div class="col-sm-9 has-error">
               <input type="text" class="form-control" id='nombre_proveedor' name="nombre_proveedor" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}">  
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='telefono_proveedor'>Télefono</label>
             <div class="col-sm-9 has-error">
               <input type="text" class="form-control" id='telefono_proveedor' name="telefono_proveedor" data-toggle="tooltip" data-original-title="Solo Números." pattern="[0-9]{1,}" required>  
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='direccion_proveedor'>Dirección</label>
             <div class="col-sm-9">
               <input type="text" class="form-control" id='direccion_proveedor' name="direccion_proveedor" data-toggle="tooltip" data-original-title="Solo Números." pattern="[0-9]{1,}">  
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

 