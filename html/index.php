<?php
session_start();
if (empty($_SESSION['id'])) {
    header('Location: ../index.php');
}
?>
<!DOCTYPE html>
<html lang="es">
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
    <link href="../css/ui.jqgrid.css" rel="stylesheet">
    <script src="../js/jquery-1.11.1.js"></script>
    <script src="../js/jquery-ui.js"></script>
    <script src="../librerias/cargar_pagina.js"></script>
    <script src="../js/prefixfree.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery.jqGrid.min.js"></script>
    <script src="../js/grid.locale-es.js"></script>
    <script src="../librerias/busquedas.js"></script>
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
            <li><a href="../index.php">Cerrar Sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- HEAD -->
    <div class="container-fluid ">
      <div class="row">
        <div class="col-sm-3 sidebar tab_index">
          <ul class="nav nav-pills nav-stacked">
            <li class="active"><a href="#tab_a" >Ingresos</a></li>
            <li><a href="#tab_b" >Ingreso de Productos</a></li>
            <li><a href="#tab_c" >Factura Venta</a></li>
            <li><a href="#tab_d" >Factura Compra</a></li>
            <li><a href="#tab_e" >Inventario</a></li>
            <li><a href="#tab_f" >Reportes</a></li>
          </ul>
        </div><!-- end of container -->
        <div class="col-sm-9 col-sm-offset-3 sidebar" style="background:#FFF;">
          <div class="tab-content content_index">
            <div class="tab-pane active act" id="tab_a">
              <div class="container">
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#tab_ingresosClientes" data-toggle="tab">Ingreso Clientes</a></li>
                  <li><a href="#tab_ingresoProveedores" data-toggle="tab">Ingreso de Proveedores</a></li>
                  <li><a href="#tab_tiposUsuarios" data-toggle="tab">Tipos de Usuarios</a></li>
                  <li><a href="#tab_marcas" data-toggle="tab">Ingreso de Marcas</a></li>
                  <li><a href="#tab_calculoPrecio" data-toggle="tab">Cálculo de Precios</a></li>
                  <li id="tab_user"><a href="#tab_usuarios" data-toggle="tab">Ingreso de usuarios</a></li>
                </ul>
                <div class="tab-content" >
                  <div class="tab-pane active" id="tab_ingresosClientes">
                    <?php 
                      include 'ingresos.php';
                    ?>
                  </div>
                  <div class="tab-pane" id="tab_ingresoProveedores">
                    <?php 
                      include 'form_proveedores.php';
                    ?>
                  </div>
                  <div class="tab-pane" id="tab_tiposUsuarios">
                    <?php 
                      include 'form_tipos_usuarios.php';
                    ?>
                  </div>
                  <div class="tab-pane" id="tab_marcas">
                    <?php 
                      include 'form_marcas.php';
                    ?>
                  </div>
                  <div class="tab-pane" id="tab_calculoPrecio">
                    <?php 
                      include 'form_calculoPrecio.php';
                    ?>
                  </div>
                  <div class="tab-pane" id="tab_usuarios">
                    <?php 
                      include 'form_usuarios.php';
                    ?>
                  </div>
                </div>
              </div>  
            </div>
            <div class="tab-pane act" id="tab_b">
              <?php 
                include 'form_productos.php';
              ?>
            </div>
            <div class="tab-pane act" id="tab_c">
              <?php 
                include 'form_factura_venta.php';
              ?>
            </div>
            <div class="tab-pane act" id="tab_d">
              <?php 
                include 'form_facturaCompra.php';
              ?>
            </div>
            <div class="tab-pane act" id="tab_e">
             <?php
              include 'form_inventario.php';
             ?>
            </div>
            <div class="tab-pane act" id="tab_f">
              <h4>Pane eC</h4>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                      ac turpis egestas.</p>
            </div>

          </div>  
        </div>
      </div> 
    </div>
      <div class="modal" id="modalBusquedas">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h5 class="modal-title"><b>BÚSQUEDA DE REGISTROS</b></h5>
          </div>
          <div class="modal-body">
          <div class="table-responsive" id="busquedasModificar">
          </div>
          </div>
          <div class="modal-footer">
            <a href="#" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove" id="cerrarVentana"></span> Cerrar</a>
          </div>
        </div>
      </div>
      </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
  </body>
</html>
 