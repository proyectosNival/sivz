<form class="form-horizontal " action="" rol="form" id="form_marcas" method="post">
   <div class="panel panel-default">
     <div class="panel-heading"><span class="glyphicon glyphicon-th"></span> <b> Ingresos de Marcas </b></div>
       <div class="panel-body form-styles">
         <div class="container">
           <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='nombre_marca'>Marcas</label>
             <div class="col-sm-9 has-error">
               <input type="hidden" class="form-control" id='id_marca' name="id_marca" >  
               <input type="text" class="form-control" id='nombre_marca' name="nombre_marca" data-toggle="tooltip" data-original-title="Tipos de Usuarios" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" >  
             </div>
           </div>
         </div>
       </div>
       <div class="panel-footer form-footer">
         <div>
           <button class="btn btn-primary" id="btn_guardarMarca" type="submit">  
           <span class="glyphicon glyphicon-log-in"></span> Guardar</button>
         </div>
         <!--<div>
           <button class="btn btn-primary" id="btn_eliminarCliente" type="submit">  
           <span class="glyphicon glyphicon-log-in"></span> Eliminar</button>
         </div>-->
         <div>
           <button class="btn btn-primary" id="btn_limpiarMarca" type="button">  
           <span class="glyphicon glyphicon-edit"></span> Limpiar</button>
         </div>
         <div>
           <button class="btn btn-primary" id="btn_buscarMarca" type="button" data-toggle="modal" >  
           <span class="glyphicon glyphicon-log-in"></span> Buscar</button>
         </div>
       </div>
     </div>
 </form>

 