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
    <script src="../librerias/cargar_pagina.js"></script>


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

    <div class="container-fluid tab_index">
      <div class="row">
        <div class="col-sm-2 sidebar">
          <ul class="nav nav-pills nav-stacked">
            <li class="active"><a href="#tab_a" data-toggle="pill">Ingresos</a></li>
            <li><a href="#tab_b" data-toggle="pill">Pill B</a></li>
            <li><a href="#tab_c" data-toggle="pill">Pill C</a></li>
            <li><a href="#tab_d" data-toggle="pill">Pill D</a></li>
          </ul>
        </div><!-- end of container -->
        <div class="col-sm-10 col-sm-offset-2 sidebar">
          <div class="tab-content">
          <div class="tab-pane active" id="tab_a">
            <!-- tab lateral-->
            <div class="container">
              <ul class="nav nav-tabs">
                <li class="active"><a href="#tab_ingresosClientes" data-toggle="tab">Ingreso Clientes</a></li>
                <li><a href="#tab_bb" data-toggle="tab">Tab B</a></li>
                <li><a href="#tab_cc" data-toggle="tab">Tab C</a></li>
                <li><a href="#tab_dd" data-toggle="tab">Tab D</a></li>
              </ul>
              <div class="tab-content" >
                <div class="tab-pane active" id="tab_ingresosClientes">
                <?php 
                  include 'ingresos.php';
                ?>
                </div>
                <div class="tab-pane fade" id="tab_bb">
                    <h4>Pane B</h4>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                </div>
                <div class="tab-pane fade" id="tab_cc">
                    <h4>Pane C</h4>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas.</p>
                </div>
                <div class="tab-pane fade" id="tab_dd">
                    <h4>Pane D</h4>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas.</p>
                </div>
              </div><!-- tab content -->
            </div><!-- end of container -->
            <!-- -->
          </div>
          <div class="tab-pane" id="tab_b">
            <h4>Pane B</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas.</p>
          </div>
          <div class="tab-pane" id="tab_c">
            <h4>Pane C</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas.</p>
          </div>
          <div class="tab-pane" id="tab_d">
            <h4>Pane D</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas.</p>
          </div>
        </div><!-- tab content -->
        </div><!-- end of container -->
      </div>  
    </div>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
  </body>
</html>
 