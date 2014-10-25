<form class="form-horizontal " action="" rol="form" id="form_calculoPrecio" method="post">
   <div class="panel panel-default">
     <div class="panel-heading"><span class="glyphicon glyphicon-usd"></span> <b> Cálculo de Precios </b></div>
       <div class="panel-body form-styles">
         <div class="container">
           <div class="form-group col-md-5">
             <label class="col-sm-3 control-label" for='precio_inicial'>Desde:</label>
             <div class="col-sm-9">
                <div class="input-group has-error">
                  <span class="input-group-addon">$</span>
                  <input type="hidden" class="form-control" id='id_media' name="id_media" >  
                  <input type="number" class="form-control" id='precio_inicial' name="precio_inicial" data-toggle="tooltip" data-original-title="Indique el precio inicial" required pattern="[0-9]{1,}" min="0">  
                </div>
             </div>
           </div>
           <div class="form-group col-md-5">
              <label class="col-sm-3 control-label" for='precio_final'>Hasta:</label>
                <div class="col-sm-9">
                  <div class="input-group has-error">
                    <span class="input-group-addon">$</span>
                    <input type="number" class="form-control" id='precio_final' name="precio_final" data-toggle="tooltip" data-original-title="Indique el precio final" required pattern="[0-9]{1,}" min="0">  
                  </div>
              </div>
           </div>
           <div class="form-group col-md-5">
              <label class="col-sm-3 control-label" for='incremento'>Incremento:</label>
              <div class="col-sm-9">
                <div class="input-group has-error">
                  <span class="input-group-addon">$</span>
                  <input type="number" class="form-control" id='incremento' name="incremento" data-toggle="tooltip" data-original-title="Valor a incrementar" required pattern="[0-9]{1,}" min="0" >  
                </div>                  
             </div>
           </div>
         </div>
       </div>
       <div class="panel-footer form-footer">
         <div>
           <button class="btn btn-primary" id="btn_guardarMedia" type="submit">  
           <span class="glyphicon glyphicon-log-in"></span> Guardar</button>
         </div>
         <!--<div>
           <button class="btn btn-primary" id="btn_eliminarCliente" type="submit">  
           <span class="glyphicon glyphicon-log-in"></span> Eliminar</button>
         </div>-->
         <div>
           <button class="btn btn-primary" id="btn_limpiarMedia" type="button">  
           <span class="glyphicon glyphicon-edit"></span> Limpiar</button>
         </div>
         <div>
           <button class="btn btn-primary" id="btn_buscarMedia" type="button" data-toggle="modal" >  
           <span class="glyphicon glyphicon-log-in"></span> Buscar</button>
         </div>
       </div>
     </div>
 </form>

 