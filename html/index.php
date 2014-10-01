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

  <body>

    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">SIVZ</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="../index.html">Cerrar Sesión</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li><a href="#" onclick="btn_indexFacturacion()">Facturación</a></li>
            <li><a href="#" onclick="btn_indexIngresos()">Ingresos</a></li>
            <li><a href="#" onclick="btn_indexReportes()">Reportes</a></li>
          </ul>
        </div>
        <script>
        function btn_indexFacturacion() 
        {
          var nuevoCodigoHtml = '<h1 class="page-header">Facturación</h1> <div id="tabs">'+
          '<ul>'+
              '<li><a href=#histopagos><span>Historial de Pagos</span></a></li>'+
              '<li><a href=#prefacturapendiente><span>Prefacturas Pendientes</span></a></li>'+
              '<li><a href=#suspencionteporal><span>Susp. Temporales, Req. Adicionales y Definitivas</span></a></li>'+
              '<li><a href=#ordendesinstalacion><span>Ordenes de Trabajo</span></a></li>'+
            '</ul>'+
            '<div id=histopagos>'+
            '</div>'+
            '<div id=prefacturapendiente>'+
            '</div>'+
            '<div id=suspencionteporal>'+
            '</div>'+
            '<div id=ordendesinstalacion>'+
            '</div>'+
            '</div>';

          document.getElementById("tablas").innerHTML=nuevoCodigoHtml;
          /*$('#tabs').tabs();
          "<ul>
              <li><a href='#histopagos'><span>Historial de Pagos</span></a></li>
              <li><a href='#prefacturapendiente'><span>Prefacturas Pendientes</span></a></li>
              <li><a href='#suspencionteporal'><span>Susp. Temporales, Req. Adicionales y Definitivas</span></a></li>
              <li><a href='#ordendesinstalacion'><span>Ordenes de Trabajo</span></a></li>
            </ul>
            <div id='histopagos'>
            </div>
            <div id='prefacturapendiente'>
            </div>
            <div id='suspencionteporal'>
            </div>
            <div id='ordendesinstalacion'>
            </div>";*/
        }
        function btn_indexIngresos() 
        {
          document.getElementById("tablas").innerHTML='<iframe src="ingresos.php" frameborder="0" width="100%" height="1000px;"></iframe>';
        }
        function btn_indexReportes() 
        {
          document.getElementById("tablas").innerHTML='<iframe src="reportes.php" frameborder="0" width="100%" height="1240px"></iframe>';
        }
        </script>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <div id="tablas">
          
          </div>

        </div>
        <script>$('#tabs').tabs();</script>
      </div>
    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
  </body>
</html>
