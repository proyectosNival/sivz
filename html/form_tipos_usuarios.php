<form class="form-horizontal " action="" rol="form" id="form_tipos_usuarios" method="post">
  <div class="panel panel-default">
    <div class="panel-heading"><span class="glyphicon glyphicon-user"></span> <b> Tipos de Usuarios </b></div>
    <div class="panel-body form-styles">
      <div class="container">
        <div class="col-lg-10 col-md-10 col-sm-11 col-xs-12">
          <div class="form-group col-md-6">
            <label class="col-sm-4 control-label" for='nombre_tipo_usuario'>Tipo de Usuario</label>
            <div class="col-sm-8 has-error">
              <input type="hidden" class="form-control" id='id_tipo_usuario' name="id_tipo_usuario" >  
              <input type="text" class="form-control" id='nombre_tipo_usuario' name="nombre_tipo_usuario" data-toggle="tooltip" data-original-title="Tipos de Usuarios" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" >  
            </div>
          </div>
        </div>
      </div>
      <div class="panel-footer form-footer">
        <div>
          <button class="btn btn-primary" id="btn_guardarTipoUsuario" type="submit">  
          <span class="glyphicon glyphicon-log-in"></span> Guardar</button>
        </div>
        <!--<div>
          <button class="btn btn-primary" id="btn_eliminarCliente" type="submit">  
          <span class="glyphicon glyphicon-log-in"></span> Eliminar</button>
        </div>-->
        <div>
          <button class="btn btn-primary" id="btn_limpiarTipoUsuario" type="button">  
          <span class="glyphicon glyphicon-edit"></span> Limpiar</button>
        </div>
        <div>
          <button class="btn btn-primary" id="btn_buscarTipoUsuario" type="button" data-toggle="modal" >  
          <span class="glyphicon glyphicon-log-in"></span> Buscar</button>
        </div>
      </div>
    </div>
  </div>
 </form>

 