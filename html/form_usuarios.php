<form class="form-horizontal " action="" rol="form" id="form_usuarios" method="post">
  <div class="panel panel-default" id="form_clave">
    <div class="panel-heading"><span class="glyphicon glyphicon-eye-close"></span> <b> Verificar Usuario </b></div>
    <div class="panel-body form-styles">
      <div class="container">
        <div class="col-lg-10 col-md-10 col-sm-11 col-xs-12">
          <div class="form-group col-md-10">
            <label class="col-sm-3 control-label"></label>
            <label class="col-sm-2 control-label" for='usuario_admin'>Usuario Admin</label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id='usuario_admin' name="usuario_admin" data-toggle="tooltip" data-original-title="Tipos de Usuarios"  pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" >  
            </div>
          </div>
          <div class="form-group col-md-10">
            <label class="col-sm-3 control-label"></label>
            <label class="col-sm-2 control-label" for='clave_admin'>Clave Admin</label>
            <div class="col-sm-5">
              <input type="password" class="form-control" id='clave_admin' name="clave_admin" data-toggle="tooltip" data-original-title="Tipos de Usuarios"  pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" >  
            </div>
          </div>
        </div>
      </div>
      <div class="panel-footer form-footer">
        <div>
          <button class="btn btn-primary" id="btn_ingresarAdmin" type="button">  
          <span class="glyphicon glyphicon-eye-close"></span> Ingresar</button>
        </div>
      </div>
    </div>
  </div>
  <div class="panel panel-default" id="form_usuario">
    <div class="panel-heading"><span class="glyphicon glyphicon-th"></span> <b> Ingreso de Usuarios </b></div>
    <div class="panel-body form-styles">
      <div class="container">
        <div class="col-lg-10 col-md-10 col-sm-11 col-xs-12">
          <div class="form-group col-md-6">
            <label class="col-sm-3 control-label" for='ci_usuario'>CI.</label>
            <div class="col-sm-9 has-error">
              <input type="hidden" class="form-control" id='id_usuario' name="id_usuario" >  
              <input type="text" class="form-control" id='ci_usuario' name="ci_usuario" data-toggle="tooltip" data-original-title="Solo Números. Min. 10 carácteres Max. 20 carácteres" required pattern="[0-9]{10,20}">  
            </div>
          </div>
          <div class="form-group col-md-6">
            <label class="col-sm-3 control-label" for='nombre_usuario'>Nombres</label>
            <div class="col-sm-9 has-error">
              <input type="text" class="form-control" id='nombre_usuario' name="nombre_usuario" data-toggle="tooltip" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9 ]{1,}" >  
            </div>
          </div>
          <div class="form-group col-md-6">
            <label class="col-sm-3 control-label" for='direccion_usuario'>Dirección</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id='direccion_usuario' name="direccion_usuario" data-toggle="tooltip" pattern="[A-Za-záéíóúÁÉÍÓÚ0-9 ]{1,}" >  
            </div>
          </div>
          <div class="form-group col-md-6">
            <label class="col-sm-3 control-label" for='telefono_usuario'>Télefono</label>
            <div class="col-sm-9 ">
              <input type="text" class="form-control" id='telefono_usuario' name="telefono_usuario" data-toggle="tooltip" >  
            </div>
          </div>
          <div class="form-group col-md-6">
            <label class="col-sm-3 control-label" for='celular_usuario'>Celular</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id='celular_usuario' name="celular_usuario" data-toggle="tooltip" >  
            </div>
          </div>
          <div class="form-group col-md-6">
            <label class="col-sm-3 control-label" for='tipo_usuario'>Tipo Usuario</label>
            <div class="col-sm-9">
              <select class="form-control" id="tipo_usuario" name="tipo_usuario">
                
              </select> 
            </div>
          </div>
          <div class="form-group col-md-6">
            <label class="col-sm-3 control-label" for='nick_usuario'>Nick</label>
            <div class="col-sm-9 has-error">
              <input type="text" class="form-control" id='nick_usuario' name="nick_usuario" data-toggle="tooltip" data-original-title="Nombre de usuario" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" >  
            </div>
          </div>
          <div class="form-group col-md-6">
            <label class="col-sm-3 control-label" for='clave'>Clave</label>
            <div class="col-sm-9 has-error">
              <input type="password" class="form-control" id='clave' name="clave" data-toggle="tooltip" data-original-title="Nombre de usuario" required pattern="[A-Za-záéíóúÁÉÍÓÚ0-9]{1,}" >  
            </div>
          </div>
        </div>
      </div>
      <div class="panel-footer form-footer">
        <div>
          <button class="btn btn-primary" id="btn_guardarUsuario" type="submit">  
          <span class="glyphicon glyphicon-log-in"></span> Guardar</button>
        </div>
        <!--<div>
          <button class="btn btn-primary" id="btn_eliminarCliente" type="submit">  
          <span class="glyphicon glyphicon-log-in"></span> Eliminar</button>
        </div>-->
        <div>
          <button class="btn btn-primary" id="btn_limpiarUsuario" type="button">  
          <span class="glyphicon glyphicon-edit"></span> Limpiar</button>
        </div>
        <div>
          <button class="btn btn-primary" id="btn_buscarUsuario" type="button" data-toggle="modal" >  
          <span class="glyphicon glyphicon-log-in"></span> Buscar</button>
        </div>
      </div>
    </div>
  </div>
</form>

 