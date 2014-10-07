<form class="form-horizontal " action="" rol="form" id="form_cliente" method="post">
   <div class="panel panel-default">
     <div class="panel-heading"><span class="glyphicon glyphicon-user"></span> <b> Ingreso de Clientes </b></div>
       <div class="panel-body form-styles">
         <div class="container">
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='ci_cliente'>CI. Cliente</label>
             <div class="col-sm-9 has-error">
               <input type="text" class="form-control" id='ci_cliente' name="ci_cliente" data-toggle="tooltip" data-original-title="Solo Números. Min. 10 carácteres Max. 20 carácteres" required pattern="[0-9]{10,20}" maxlength="20" minlength="10">  
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='nombre_cliente'>Nombres</label>
             <div class="col-sm-9 has-error">
               <input type="text" class="form-control" id='nombre_cliente' name="nombre_cliente" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}">  
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='telefono_cliente'>Télefono</label>
             <div class="col-sm-9">
               <input type="text" class="form-control" id='telefono_cliente' name="telefono_cliente" data-toggle="tooltip" data-original-title="Solo Números." pattern="[0-9]{1,}">  
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='celular_cliente'>Celular</label>
             <div class="col-sm-9">
               <input type="text" class="form-control" id='celular_cliente' name="celular_cliente" data-toggle="tooltip" data-original-title="Solo Números." pattern="[0-9]{1,}">  
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='direccion_cliente'>Dirección</label>
             <div class="col-sm-9">
               <input type="text" class="form-control" id='direccion_cliente' name="direccion_cliente">  
             </div>
           </div>
           <div class="form-group col-md-6">
             <label class="col-sm-3 control-label" for='ciudad_cliente'>Ciudad</label>
             <div class="col-sm-9">
               <input type="text" class="form-control" id='ciudad_cliente' name="ciudad_cliente">  
             </div>
           </div>
         </div>
       </div>
       <div class="panel-footer form-footer">
         <div>
           <button class="btn btn-primary" id="btn_guardarCliente" type="submit">  
           <span class="glyphicon glyphicon-log-in"></span> Guardar</button>
         </div>
         <div>
           <button class="btn btn-primary" id="btn_loginIngreso" type="submit">  
           <span class="glyphicon glyphicon-log-in"></span> Eliminar</button>
         </div>
         <div>
           <button class="btn btn-primary" id="btn_limpiarIngreso" type="button">  
           <span class="glyphicon glyphicon-edit"></span> Limpiar</button>
         </div>
         <div>
           <button class="btn btn-primary" id="btn_buscarCliente" type="button" data-toggle="modal" >  
           <span class="glyphicon glyphicon-log-in"></span> Buscar</button>
         </div>
       </div>
     </div>
 </form>

 