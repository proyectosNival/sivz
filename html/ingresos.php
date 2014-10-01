<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../assets/ico/favicon.ico">

    <title>Sistema de Integracion para venta de Zapatos</title>

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/jquery-ui.css">

    <!-- Custom styles for this template -->
    <link href="../css/dashboard.css" rel="stylesheet">
    <link href="../css/formularios.css" rel="stylesheet">
    <script src="../js/jquery-1.10.2.js"></script>
    <script src="../js/jquery-ui.js"></script>

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body id="bodyarrglego">
    <h1 id="pagearrglego">Ingresos</h1>
    <div id="tabs">
      <ul>
        <li><a href='#clientes'><span>Ingreso de Clientes</span></a></li>
        <li><a href='#prefacturapendiente'><span>Prefacturas Pendientes</span></a></li>
        <li><a href='#suspencionteporal'><span>Susp. Temporales, Req. Adicionales y Definitivas</span></a></li>
        <li><a href='#ordendesinstalacion'><span>Ordenes de Trabajo</span></a></li>
      </ul>
      <div id='clientes'>
      <div class="panel panel-default">
        <div class="panel-heading"><span class="glyphicon glyphicon-user"></span></span>  Ingreso de Clientes</div>
          <div class="panel-body">
            <div class="container form-styles">
              <form class="form-horizontal " action="" rol="form" id="form_cliente">
                <div class="form-group col-md-6">
                  <label class="col-sm-3 control-label" for='ci_cliente'>CI. Cliente</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id='ci_cliente' name="ci_cliente">  
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label class="col-sm-3 control-label" for='nombre_cliente'>Nombres</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id='nombre_cliente' name="nombre_cliente">  
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label class="col-sm-3 control-label" for='telefono_cliente'>Télefono</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id='telefono_cliente' name="telefono_cliente">  
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label class="col-sm-3 control-label" for='celular_cliente'>Celular</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id='celular_cliente' name="celular_cliente">  
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
              </form>
            </div>
          </div>
          <div class="panel-footer form-footer">
            <div>
              <button class="btn btn-primary" id="btn_loginIngreso" type="submit">  
              <span class="glyphicon glyphicon-log-in"></span> Guardar</button>
            </div>
            <div>
              <button class="btn btn-primary" id="btn_loginIngreso" type="submit">  
              <span class="glyphicon glyphicon-log-in"></span> Eliminar</button>
            </div>
            <div>
              <button class="btn btn-primary" id="btn_loginIngreso" type="submit">  
              <span class="glyphicon glyphicon-log-in"></span> Buscar</button>
            </div>
          </div>
        </div>
      </div>
      <div id='prefacturapendiente'>
      </div>
      <div id='suspencionteporal'>
      </div>
      <div id='ordendesinstalacion'>
      </div>

        </div>
        <script>$('#tabs').tabs();</script>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
  </body>
</html>
