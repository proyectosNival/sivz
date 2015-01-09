<form class="form-horizontal " action="" rol="form" id="" method="post">
   <div class="panel panel-default">
     <div class="panel-heading"><span class="glyphicon glyphicon-th"></span> <b> Reportes </b></div>
       <div class="panel-body form-styles">
         <div class="container">
         <div class="col-lg-10 col-md-10 col-sm-11 col-xs-12">
           <div class="form-group col-md-12">
             <label class="col-sm-2 control-label" for='lista_marcas'>Lista de Marcas</label>
             <div class="col-sm-7">               
               <select class="form-control" id='lista_marcas' name="lista_marcas" data-toggle="tooltip" data-original-title="Lista de Productos por código o nombre">
               </select>  
             </div>
             <div class="col-sm-3">               
              <button class="btn btn-primary col-sm-12" id="btn_reporte_marca" type="button">  
              <span class="glyphicon glyphicon-log-in"></span> Reporte</button>
             </div>             
           </div>
            <div class="form-group col-md-12">
             <label class="col-sm-2 control-label" for='fecha_inicial'>Fecha Inicial</label>
             <div class="col-sm-2">               
               <input type="text" class="form-control" id="fecha_inicial" name="fecha_final">
             </div>
             <label class="col-sm-2 control-label" for='fecha_final'>Fecha Final</label>
             <div class="col-sm-3">               
               <input type="text" class="form-control" id="fecha_final" name="fecha_final">
             </div>
             <div class="col-sm-3">               
              <button class="btn btn-primary col-sm-12" id="btn_reporte_venta_diario" type="button">  
              <span class="glyphicon glyphicon-log-in"></span> Reporte</button>
             </div>             
           </div>
         </div>
       </div>
       <div class="panel-footer form-footer">         
       </div>
     </div>
  </div>
 </form>

 