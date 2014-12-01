function buscar_clientes(){
	jQuery("#tabla_busquedas").jqGrid({
        datatype: "xml",
        url: '../servidor/cliente/xml_cliente.php',        
        colNames: ['Id','CI','Nombres','Teléfono','Celular','Dirección','Estado','Ciudad'],
        colModel:[      
            {name:'id_cliente',index:'id_cliente',frozen:true,align:'left',width:50,search:false},
            {name:'ci_ruc_cliente',index:'ci_ruc_cliente',frozen : true,align:'left',search:true},
            {name:'nombres_cliente',index:'nombres_cliente',frozen : true,align:'left',search:true},
            {name:'telefono_cliente',index:'telefono_cliente',frozen : false,align:'left',search:false},
            {name:'celular_cliente',index:'celular_cliente',frozen : false,align:'left',search:false},
            {name:'direccion_cliente',index:'direccion_cliente',frozen : false,align:'left',search:false},
            {name:'estado_cliente',index:'estado_cliente',frozen : false,align:'left',search:false},
            {name:'ciudad_cliente',index:'ciudad_cliente',frozen : false,align:'left',search:false},
        ],          
        rowNum: 10,
        autowidth: true, 
        width: '100%', 
        shrinkToFit: false,
        height:200,
        rowList: [10,20,30],
        pager: jQuery('#pager'),        
        sortname: 'id_cliente',
        shrinkToFit: false,
        sortordezr: 'asc',
        caption: 'Lista de Clientes',
        viewrecords: true,            
        ondblClickRow: function(rowid) {     
            var gsr = jQuery("#tabla_busquedas").jqGrid('getGridParam','selrow');         
            jQuery("#tabla_busquedas").jqGrid('GridToForm',gsr,"#form_cliente");  
            $('#modalBusquedas').modal('hide');
            comprobarCamposRequired("form_cliente");  
            $("#btn_guardarCliente").text("");
            $("#btn_guardarCliente").append("<span class='glyphicon glyphicon-log-in'></span> Modificar");     
            
        }
    }).jqGrid('navGrid','#pager',{
            add:false,
            edit:false,
            del:false,           
            refresh:true,
            search:true,
            view:false        
    },
    {
        recreateForm: true, closeAfterEdit: true, checkOnUpdate: true, reloadAfterSubmit: true, closeOnEscape: true,
    },
    {
        reloadAfterSubmit: true, closeAfterAdd: true, checkOnUpdate: true, closeOnEscape: true,
    },
    {
        closeOnEscape: true
    },
    {
        closeOnEscape: true,        
        multipleSearch: false, overlay: false

    },
    {
    },
    {
        closeOnEscape: true
    }
    ); 
    jQuery("#tabla_busquedas").jqGrid('hideCol', "id_cliente");
    jQuery("#tabla_busquedas").jqGrid('hideCol', "estado_cliente");
    //jQuery("#tabla_busquedas").jqGrid('setFrozenColumns');
}

function buscar_proveedor(){
    jQuery("#tabla_busquedas").jqGrid({
        datatype: "xml",
        url: '../servidor/proveedor/xml_proveedor.php',        
        colNames: ['Id','CI','Nombres','Teléfono','Dirección','Estado'],
        colModel:[      
            {name:'id_proveedor',index:'id_proveedor',frozen:true,align:'left',width:50,search:false},
            {name:'ci_ruc_proveedor',index:'ci_ruc_proveedor',frozen : true,align:'left',search:true},
            {name:'nombre_proveedor',index:'nombre_proveedor',frozen : true,align:'left',search:true},
            {name:'telefono_proveedor',index:'telefono_proveedor',frozen : false,align:'left',search:false},
            {name:'direccion_proveedor',index:'direccion_proveedor',frozen : false,align:'left',search:false},
            {name:'estado_proveedor',index:'estado_proveedor',frozen : false,align:'left',search:false},
        ],          
        rowNum: 10,
        autowidth: true, 
        width: '100%', 
        shrinkToFit: false,
        height:200,
        rowList: [10,20,30],
        pager: jQuery('#pager'),        
        sortname: 'id_proveedor',
        shrinkToFit: false,
        sortordezr: 'asc',
        caption: 'Lista de Proveedores',
        viewrecords: true,            
        ondblClickRow: function(rowid) {     
            var gsr = jQuery("#tabla_busquedas").jqGrid('getGridParam','selrow');         
            jQuery("#tabla_busquedas").jqGrid('GridToForm',gsr,"#form_proveedores");  
            $('#modalBusquedas').modal('hide');
            comprobarCamposRequired("form_proveedores");  
            $("#btn_guardarProveedor").text("");
            $("#btn_guardarProveedor").append("<span class='glyphicon glyphicon-log-in'></span> Modificar");     
            
        }
    }).jqGrid('navGrid','#pager',{
            add:false,
            edit:false,
            del:false,           
            refresh:true,
            search:true,
            view:false        
    },
    {
        recreateForm: true, closeAfterEdit: true, checkOnUpdate: true, reloadAfterSubmit: true, closeOnEscape: true
    },
    {
        reloadAfterSubmit: true, closeAfterAdd: true, checkOnUpdate: true, closeOnEscape: true,
    },
    {
        closeOnEscape: true
    },
    {
        closeOnEscape: true,        
        multipleSearch: false, overlay: false

    },
    {
    },
    {
        closeOnEscape: true
    }
    ); 
    jQuery("#tabla_busquedas").jqGrid('hideCol', "id_proveedor");
    jQuery("#tabla_busquedas").jqGrid('hideCol', "estado_proveedor");
    //jQuery("#tabla_busquedas").jqGrid('setFrozenColumns');
}

function buscar_tiposUsuarios(){
    jQuery("#tabla_busquedas").jqGrid({
        datatype: "xml",
        url: '../servidor/tipos_usuarios/xml_tiposUsuarios.php',        
        colNames: ['Id','Tipo Usuario','Estado'],
        colModel:[      
            {name:'id_tipo_usuario',index:'id_tipo_usuario',frozen:true,align:'left',search:false},
            {name:'nombre_tipo_usuario',index:'nombre_tipo_usuario',frozen : false,align:'left',search:true},
            {name:'estado_tipo',index:'estado_tipo',frozen : false,align:'left',search:false},
        ],          
        rowNum: 10,
        autowidth: true, 
        width: '100%', 
        height:200,
        rowList: [10,20,30],
        pager: jQuery('#pager'),        
        sortname: 'id_tipo_usuario',
        shrinkToFit: false,
        sortordezr: 'asc',
        caption: 'Lista de Tipos de Usuarios',
        viewrecords: true,            
        ondblClickRow: function(rowid) {     
            var gsr = jQuery("#tabla_busquedas").jqGrid('getGridParam','selrow');         
            jQuery("#tabla_busquedas").jqGrid('GridToForm',gsr,"#form_tipos_usuarios");  
            $('#modalBusquedas').modal('hide');
            comprobarCamposRequired("form_tipos_usuarios");  
            $("#btn_guardarTipoUsuario").text("");
            $("#btn_guardarTipoUsuario").append("<span class='glyphicon glyphicon-log-in'></span> Modificar");     
            
        }
    }).jqGrid('navGrid','#pager',{
            add:false,
            edit:false,
            del:false,           
            refresh:true,
            search:true,
            view:false        
    },
    {
        recreateForm: true, closeAfterEdit: true, checkOnUpdate: true, reloadAfterSubmit: true, closeOnEscape: true
    },
    {
        reloadAfterSubmit: true, closeAfterAdd: true, checkOnUpdate: true, closeOnEscape: true,
    },
    {
        closeOnEscape: true
    },
    {
        closeOnEscape: true,        
        multipleSearch: false, overlay: false

    },
    {
    },
    {
        closeOnEscape: true
    }
    ); 
    jQuery("#tabla_busquedas").jqGrid('hideCol', "estado_tipo");
    //jQuery("#tabla_busquedas").jqGrid('setFrozenColumns');
}

function buscar_marcas(){
    jQuery("#tabla_busquedas").jqGrid({
        datatype: "xml",
        url: '../servidor/marcas/xml_marcas.php',        
        colNames: ['Id','Marca','Estado'],
        colModel:[      
            {name:'id_marca',index:'id_marca',frozen:true,align:'left',search:false},
            {name:'nombre_marca',index:'nombre_marca',frozen : false,align:'left',search:true},
            {name:'estado_marca',index:'estado_marca',frozen : false,align:'left',search:false},
        ],          
        rowNum: 10,
        autowidth: true, 
        width: '100%', 
        height:200,
        rowList: [10,20,30],
        pager: jQuery('#pager'),        
        sortname: 'id_marca',
        shrinkToFit: false,
        sortordezr: 'asc',
        caption: 'Lista de Tipos de Marca',
        viewrecords: true,            
        ondblClickRow: function(rowid) {     
            var gsr = jQuery("#tabla_busquedas").jqGrid('getGridParam','selrow');         
            jQuery("#tabla_busquedas").jqGrid('GridToForm',gsr,"#form_marcas");  
            $('#modalBusquedas').modal('hide');
            comprobarCamposRequired("form_marcas");  
            $("#btn_guardarMarca").text("");
            $("#btn_guardarMarca").append("<span class='glyphicon glyphicon-log-in'></span> Modificar");     
            
        }
    }).jqGrid('navGrid','#pager',{
            add:false,
            edit:false,
            del:false,           
            refresh:true,
            search:true,
            view:false        
    },
    {
        recreateForm: true, closeAfterEdit: true, checkOnUpdate: true, reloadAfterSubmit: true, closeOnEscape: true
    },
    {
        reloadAfterSubmit: true, closeAfterAdd: true, checkOnUpdate: true, closeOnEscape: true,
    },
    {
        closeOnEscape: true
    },
    {
        closeOnEscape: true,        
        multipleSearch: false, overlay: false

    },
    {
    },
    {
        closeOnEscape: true
    }
    ); 
    jQuery("#tabla_busquedas").jqGrid('hideCol', "estado_marca");
    //jQuery("#tabla_busquedas").jqGrid('setFrozenColumns');
}

function buscar_media(){
    jQuery("#tabla_busquedas").jqGrid({
        datatype: "xml",
        url: '../servidor/media/xml_media.php',        
        colNames: ['Id','Precio Inicial','Precio Final','Valor a Incrementar'],
        colModel:[      
            {name:'id_media',index:'id_media',frozen:true,align:'left',search:false,width:100},
            {name:'precio_inicial',index:'precio_inicial',frozen : false,align:'left',search:true},
            {name:'precio_final',index:'precio_final',frozen : false,align:'left',search:false},
            {name:'incremento',index:'incremento',frozen : false,align:'left',search:false},
        ],          
        rowNum: 10,
        autowidth: true, 
        width: '100%', 
        height:200,
        rowList: [10,20,30],
        pager: jQuery('#pager'),        
        sortname: 'id_media',
        shrinkToFit: false,
        sortordezr: 'asc',
        caption: 'Lista de precios',
        viewrecords: true,            
        ondblClickRow: function(rowid) {     
            var gsr = jQuery("#tabla_busquedas").jqGrid('getGridParam','selrow');         
            jQuery("#tabla_busquedas").jqGrid('GridToForm',gsr,"#form_calculoPrecio");  
            $('#modalBusquedas').modal('hide');
            comprobarCamposRequired("form_calculoPrecio");  
            $("#btn_guardarMedia").text("");
            $("#btn_guardarMedia").append("<span class='glyphicon glyphicon-log-in'></span> Modificar");     
            
        }
    }).jqGrid('navGrid','#pager',{
            add:false,
            edit:false,
            del:false,           
            refresh:true,
            search:true,
            view:false        
    },
    {
        recreateForm: true, closeAfterEdit: true, checkOnUpdate: true, reloadAfterSubmit: true, closeOnEscape: true
    },
    {
        reloadAfterSubmit: true, closeAfterAdd: true, checkOnUpdate: true, closeOnEscape: true,
    },
    {
        closeOnEscape: true
    },
    {
        closeOnEscape: true,        
        multipleSearch: false, overlay: false

    },
    {
    },
    {
        closeOnEscape: true
    }
    ); 
    //jQuery("#tabla_busquedas").jqGrid('setFrozenColumns');
}

function buscar_usuario(){
    jQuery("#tabla_busquedas").jqGrid({
        datatype: "xml",
        url: '../servidor/usuarios/xml_usuarios.php',        
        colNames: ['Id','CI','Nombres','Dirección','Télefono','Celular','Registro','tipo_usuario','Tipo Usuario','Nick','clave'],
        colModel:[      
            {name:'id_usuario',index:'id_usuario',frozen:true,align:'left',search:false,width:100},
            {name:'ci_usuario',index:'ci_usuario',frozen : false,align:'left',search:true},
            {name:'nombre_usuario',index:'nombre_usuario',frozen : false,align:'left',search:false},
            {name:'direccion_usuario',index:'direccion_usuario',frozen : false,align:'left',search:false},
            {name:'telefono_usuario',index:'telefono_usuario',frozen : false,align:'left',search:false},
            {name:'celular_usuario',index:'celular_usuario',frozen : false,align:'left',search:false},
            {name:'fecha_registro',index:'fecha_registro',frozen : false,align:'left',search:false},
            {name:'tipo_usuario',index:'tipo_usuario',frozen : false,align:'left',search:false},
            {name:'nombre_tipo_usuario',index:'nombre_tipo_usuario',frozen : false,align:'left',search:false},
            {name:'nick_usuario',index:'nick_usuario',frozen : false,align:'left',search:false},
            {name:'clave',index:'clave',frozen : false,align:'left',search:false},
        ],          
        rowNum: 10,
        autowidth: true, 
        width: '100%', 
        height:200,
        rowList: [10,20,30],
        pager: jQuery('#pager'),        
        sortname: 'id_usuario',
        shrinkToFit: false,
        sortordezr: 'asc',
        caption: 'Lista de usuarios',
        viewrecords: true,            
        ondblClickRow: function(rowid) {     
            var gsr = jQuery("#tabla_busquedas").jqGrid('getGridParam','selrow');         
            jQuery("#tabla_busquedas").jqGrid('GridToForm',gsr,"#form_usuarios");  
            $('#modalBusquedas').modal('hide');
            comprobarCamposRequired("form_usuarios");  
            $("#btn_guardarUsuario").text("");
            $("#btn_guardarUsuario").append("<span class='glyphicon glyphicon-log-in'></span> Modificar");     
            
        }
    }).jqGrid('navGrid','#pager',{
            add:false,
            edit:false,
            del:false,           
            refresh:true,
            search:true,
            view:false        
    },
    {
        recreateForm: true, closeAfterEdit: true, checkOnUpdate: true, reloadAfterSubmit: true, closeOnEscape: true
    },
    {
        reloadAfterSubmit: true, closeAfterAdd: true, checkOnUpdate: true, closeOnEscape: true,
    },
    {
        closeOnEscape: true
    },
    {
        closeOnEscape: true,        
        multipleSearch: false, overlay: false

    },
    {
    },
    {
        closeOnEscape: true
    }
    ); 
    jQuery("#tabla_busquedas").jqGrid('hideCol', "id_usuario");
    jQuery("#tabla_busquedas").jqGrid('hideCol', "tipo_usuario");
    jQuery("#tabla_busquedas").jqGrid('hideCol', "clave");
    //jQuery("#tabla_busquedas").jqGrid('setFrozenColumns');
}

function buscar_productos(){
    jQuery("#tabla_busquedas").jqGrid({
        datatype: "xml",
        url: '../servidor/producto/xml_producto.php',        
        colNames: ['Id','Código','Descripción','Stock','Stock Mínimo','Stock máximo','estado','id_marca','Marca','Cod. Barras','Precio Compra','Precio Venta','Talla','Nombre Producto','imagen'],
        colModel:[      
            {name:'id_producto',index:'id_producto',frozen:true,align:'left',search:false},
            {name:'cod_producto',index:'cod_producto',frozen : false,align:'left',search:true},
            {name:'descripcion_producto',index:'descripcion_producto',frozen : false,align:'left',search:true},
            {name:'stock',index:'stock',frozen : false,align:'left',search:false},
            {name:'stock_minimo',index:'stock_minimo',frozen : false,align:'left',search:false},
            {name:'stock_maximo',index:'stock_maximo',frozen : false,align:'left',search:false},
            {name:'estado_producto',index:'estado_producto',frozen : false,align:'left',search:false},
            {name:'tipo_marca',index:'tipo_marca',frozen : false,align:'left',search:false},
            {name:'marca_prod',index:'marca_prod',frozen : false,align:'left',search:false},
            {name:'cod_barras',index:'cod_barras',frozen : false,align:'left',search:true},
            {name:'precio_compra',index:'precio_compra',frozen : false,align:'left',search:false},
            {name:'precio_venta',index:'precio_venta',frozen : false,align:'left',search:false},
            {name:'talla',index:'talla',frozen : false,align:'left',search:true},
            {name:'nombre_producto',index:'nombre_producto',frozen : false,align:'left',search:true},
            {name:'imagen',index:'imagen',frozen : false,align:'left',search:true},
        ],          
        rowNum: 10,
        autowidth: true, 
        width: '100%', 
        height:200,
        rowList: [10,20,30],
        pager: jQuery('#pager'),        
        sortname: 'id_producto',
        shrinkToFit: false,
        sortordezr: 'asc',
        caption: 'Lista de Productos',
        viewrecords: true,            
        ondblClickRow: function(rowid) {     
            var gsr = jQuery("#tabla_busquedas").jqGrid('getGridParam','selrow');         
            jQuery("#tabla_busquedas").jqGrid('GridToForm',gsr,"#form_productos");  
            var ret = jQuery("#tabla_busquedas").jqGrid('getRowData',gsr);                        
            $("#foto").attr("src","../fotos/"+ret.imagen);
            $('#modalBusquedas').modal('hide');
            comprobarCamposRequired("form_productos");  
            $("#btn_guardarProducto").text("");
            $("#btn_guardarProducto").append("<span class='glyphicon glyphicon-log-in'></span> Modificar");     
            
        }
    }).jqGrid('navGrid','#pager',{
            add:false,
            edit:false,
            del:false,           
            refresh:true,
            search:true,
            view:false        
    },
    {
        recreateForm: true, closeAfterEdit: true, checkOnUpdate: true, reloadAfterSubmit: true, closeOnEscape: true
    },
    {
        reloadAfterSubmit: true, closeAfterAdd: true, checkOnUpdate: true, closeOnEscape: true,
    },
    {
        closeOnEscape: true
    },
    {
        closeOnEscape: true,        
        multipleSearch: false, overlay: false

    },
    {
    },
    {
        closeOnEscape: true
    }
    ); 
    jQuery("#tabla_busquedas").jqGrid('hideCol', "id_producto");
    jQuery("#tabla_busquedas").jqGrid('hideCol', "id_marca");
    jQuery("#tabla_busquedas").jqGrid('hideCol', "imagen");
    //jQuery("#tabla_busquedas").jqGrid('setFrozenColumns');
}
function fc (){
    jQuery("#list").jqGrid({
        datatype: "local",
        colNames: ['', 'ID', 'Código', 'Detalle', 'Cantidad', 'Precio. U', 'Precio V', 'Total'],
        colModel: [
            {name: 'myac', width: 50, fixed: true, sortable: false, resize: false, formatter: 'actions',
                formatoptions: {keys: false, delbutton: true, editbutton: false}
            },
            {name: 'id_producto_fc', index: 'id_producto_fc', editable: false, search: false, hidden: true, editrules: {edithidden: false}, align: 'center', frozen: true, width: 50},
            {name: 'cod_prod_fc', index: 'cod_prod_fc', editable: false, search: false, hidden: false, editrules: {edithidden: false}, align: 'center', frozen: true, width: 100},
            {name: 'nombre_prod_fc', index: 'nombre_prod_fc', editable: false, frozen: true, editrules: {required: true}, align: 'center', width: 290},
            {name: 'cantidad_fc', index: 'cantidad_fc', editable: true, frozen: true, editrules: {required: true}, align: 'center', width: 70, editoptions:{maxlength: 10, size:15,dataInit: function(elem){$(elem).bind("keypress", function(e) {return numeros(e)})}}}, 
            {name: 'precio_compra_fc', index: 'precio_compra_fc', editable: true, search: false, frozen: true, editrules: {required: true}, align: 'center', width: 110, editoptions:{maxlength: 10, size:15,dataInit: function(elem){$(elem).bind("keypress", function(e) {return punto(e)})}}}, 
            {name: 'precio_venta_fc', index: 'precio_venta_fc', editable: true, frozen: true, editrules: {required: true}, align: 'center', width: 70,editoptions:{maxlength: 10, size:15,dataInit: function(elem){$(elem).bind("keypress", function(e) {return punto(e)})}}},            
            {name: 'total_fc', index: 'total_fc', editable: false, frozen: true, editrules: {required: true}, align: 'center', width: 70},            
        ],
        rowNum: 30,
        width:830,
        shrinkToFit: true,        
        sortable: true,
        rowList: [10, 20, 30],
        pager: jQuery('#pager'),
        sortname: 'id_producto_fc',
        sortorder: 'asc',
        viewrecords: true,
        cellEdit: true,
        cellsubmit: 'clientArray',
        delOptions: {
            modal: true,
            jqModal: true,
            onclickSubmit: function(rp_ge, rowid) {
                var id = jQuery("#list").jqGrid('getGridParam', 'selrow');
                jQuery('#list').jqGrid('restoreRow', id);
                var ret = jQuery("#list").jqGrid('getRowData', id);
                rp_ge.processing = true;
                var su = jQuery("#list").jqGrid('delRowData', rowid);                                
                var total = 0;
                var iva = 0 ;
                var subtotal = 0;                
                if (su === true) {                                                                
                    total = ($("#total_fc").val() - ret.total_fc).toFixed(2);                    
                    iva = parseFloat(total * 0.12).toFixed(2);                    
                    subtotal = parseFloat(total - iva).toFixed(2);                                        
                    $("#total_fc").val(total);                    
                    $("#iva_12").val(iva);
                    $("#subtotal").val(subtotal);
                }
                $(".ui-icon-closethick").trigger('click');
                //$("#delmodlist").hide();
                return true;
            },
            processing: true
        },
        afterSaveCell : function(rowid,name,val,iRow,iCol) {
            var subtotal = 0;
            var iva = 0;
            var total = 0;            
            var id = jQuery("#list").jqGrid('getGridParam', 'selrow');
            jQuery('#list').jqGrid('restoreRow', id);
            var ret = jQuery("#list").jqGrid('getRowData', id);

            if(name == 'cantidad_fc') {
               var precio_fc = jQuery("#list").jqGrid('getCell',rowid,iCol+1);               
               var operacion = (parseFloat(val) * parseFloat(precio_fc)).toFixed(2); 
               jQuery("#list").jqGrid('setRowData',rowid,{total_fc: operacion });
               
                                   
                var fil = jQuery("#list").jqGrid("getRowData");                        
                for (var t = 0; t < fil.length; t++) {
                    dd = fil[t];                            
                    subtotal = (subtotal + parseFloat(dd['total_fc']));                
                }                
                subtotal = parseFloat(subtotal).toFixed(2);                            
                iva = parseFloat(subtotal * 0.12).toFixed(2);
                total = (subtotal - iva).toFixed(2);
                $("#subtotal").val(total);
                $("#descuento").val("0.00");
                $("#iva_12").val(iva);
                $("#total_fc").val(subtotal);               
              
            }else{
                if(name == 'precio_compra_fc') {
                   var cantidad = jQuery("#list").jqGrid('getCell',rowid,iCol-1);                   
                   var operacion = (parseFloat(val) * parseFloat(cantidad)).toFixed(2); 
                   jQuery("#list").jqGrid('setRowData',rowid,{total_fc: operacion });                                                          
                    var fil = jQuery("#list").jqGrid("getRowData");                        
                    for (var t = 0; t < fil.length; t++) {
                        dd = fil[t];                            
                        subtotal = (subtotal + parseFloat(dd['total_fc']));                
                    }
                    subtotal = parseFloat(subtotal).toFixed(2);                            
                    iva = parseFloat(subtotal * 0.12).toFixed(2);
                    total = (subtotal - iva).toFixed(2);
                    $("#subtotal").val(total);
                    $("#descuento").val("0.00");
                    $("#iva_12").val(iva);
                    $("#total_fc").val(subtotal);               
                  
                }else{
                    if(name == 'precio_compra_fc') {
                       var cantidad = jQuery("#list").jqGrid('getCell',rowid,iCol-1);                   
                       var operacion = (parseFloat(val) * parseFloat(cantidad)).toFixed(2); 
                       jQuery("#list").jqGrid('setRowData',rowid,{total_fc: operacion });                                                          
                        var fil = jQuery("#list").jqGrid("getRowData");                        
                        for (var t = 0; t < fil.length; t++) {
                            dd = fil[t];                            
                            subtotal = (subtotal + parseFloat(dd['total_fc']));                
                        }
                        subtotal = parseFloat(subtotal).toFixed(2);                            
                        iva = parseFloat(subtotal * 0.12).toFixed(2);
                        total = (subtotal - iva).toFixed(2);
                        $("#subtotal").val(total);
                        $("#descuento").val("0.00");
                        $("#iva_12").val(iva);
                        $("#total_fc").val(subtotal);               
                      
                    }    
                }
            }
        }
    });
    var resize = $('#list_fc').width() - 50;
        if(resize < 0 ){
            resize = 800;
        }   
        jQuery("#list").setGridWidth(830);          
}
function fv (){
    jQuery("#list1").jqGrid({
        datatype: "local",
        colNames: ['', 'ID', 'Código', 'Detalle', 'Cantidad', 'Precio. U', 'Total'],
        colModel: [
            {name: 'myac', width: 50, fixed: true, sortable: false, resize: false, formatter: 'actions',
                formatoptions: {keys: false, delbutton: true, editbutton: false}
            },
            {name: 'id_producto_fv', index: 'id_producto_fv', editable: false, search: false, hidden: true, editrules: {edithidden: false}, align: 'center', frozen: true, width: 50},
            {name: 'cod_prod_fv', index: 'cod_prod_fv', editable: false, search: false, hidden: false, editrules: {edithidden: false}, align: 'center', frozen: true, width: 100},
            {name: 'nombre_prod_fv', index: 'nombre_prod_fv', editable: false, frozen: true, editrules: {required: true}, align: 'center', width: 290},
            {name: 'cantidad_fv', index: 'cantidad_fv', editable: true, frozen: true, editrules: {required: true}, align: 'center', width: 70, editoptions:{maxlength: 10, size:15,dataInit: function(elem){$(elem).bind("keypress", function(e) {return numeros(e)})}}},             
            {name: 'precio_venta_fv', index: 'precio_venta_fv', editable: true, frozen: true, editrules: {required: true}, align: 'center', width: 70,editoptions:{maxlength: 10, size:15,dataInit: function(elem){$(elem).bind("keypress", function(e) {return punto(e)})}}},            
            {name: 'total_fv', index: 'total_fv', editable: false, frozen: true, editrules: {required: true}, align: 'center', width: 70},            
        ],
        rowNum: 30,
        shrinkToFit: true,
        width:830,
        sortable: true,
        rowList: [10, 20, 30],
        pager: jQuery('#pager'),
        sortname: 'id_producto_fv',
        sortorder: 'asc',
        viewrecords: true,
        cellEdit: true,
        cellsubmit: 'clientArray',
        delOptions: {
            modal: true,
            jqModal: true,
            onclickSubmit: function(rp_ge, rowid) {
                var id = jQuery("#list1").jqGrid('getGridParam', 'selrow');
                jQuery('#list1').jqGrid('restoreRow', id);
                var ret = jQuery("#list1").jqGrid('getRowData', id);
                rp_ge.processing = true;
                var su = jQuery("#list1").jqGrid('delRowData', rowid);                                
                var total = 0;
                var iva = 0 ;
                var subtotal = 0;                
                if (su === true) {                                                                
                    total = ($("#total_fv").val() - ret.total_fv).toFixed(2);                    
                    iva = parseFloat(total * 0.12).toFixed(2);                    
                    subtotal = parseFloat(total - iva).toFixed(2);                                        
                    $("#total_fv").val(total);                    
                    $("#iva_12_fv").val(iva);
                    $("#subtotal_fv").val(subtotal);
                }
                $(".ui-icon-closethick").trigger('click');
                //$("#delmodlist").hide();
                return true;
            },
            processing: true
        },
        afterSaveCell : function(rowid,name,val,iRow,iCol) {
            var subtotal = 0;
            var iva = 0;
            var total = 0;            
            var id = jQuery("#list1").jqGrid('getGridParam', 'selrow');
            jQuery('#list1').jqGrid('restoreRow', id);
            var ret = jQuery("#list1").jqGrid('getRowData', id);

            if(name == 'cantidad_fv') {
               var precio_fv = jQuery("#list1").jqGrid('getCell',rowid,iCol+1);               
               var operacion = (parseFloat(val) * parseFloat(precio_fv)).toFixed(2); 
               jQuery("#list1").jqGrid('setRowData',rowid,{total_fv: operacion });
               
                                   
                var fil = jQuery("#list1").jqGrid("getRowData");                        
                for (var t = 0; t < fil.length; t++) {
                    dd = fil[t];                            
                    subtotal = (subtotal + parseFloat(dd['total_fv']));                
                }                
                subtotal = parseFloat(subtotal).toFixed(2);                            
                iva = parseFloat(subtotal * 0.12).toFixed(2);
                total = (subtotal - iva).toFixed(2);
                $("#subtotal_fv").val(total);
                $("#descuento_fv").val("0.00");
                $("#iva_12").val(iva);
                $("#total_fv").val(subtotal);               
              
            }else{
                if(name == 'precio_venta_fv') {
                   var cantidad = jQuery("#list1").jqGrid('getCell',rowid,iCol-1);                   
                   var operacion = (parseFloat(val) * parseFloat(cantidad)).toFixed(2); 
                   jQuery("#list1").jqGrid('setRowData',rowid,{total_fv: operacion });                                                          
                    var fil = jQuery("#list1").jqGrid("getRowData");                        
                    for (var t = 0; t < fil.length; t++) {
                        dd = fil[t];                            
                        subtotal = (subtotal + parseFloat(dd['total_fv']));                
                    }
                    subtotal = parseFloat(subtotal).toFixed(2);                            
                    iva = parseFloat(subtotal * 0.12).toFixed(2);
                    total = (subtotal - iva).toFixed(2);
                    $("#subtotal_fv").val(total);
                    $("#descuento_fv").val("0.00");
                    $("#iva_12").val(iva);
                    $("#total_fv").val(subtotal);                           
                }
            }
        }
    });
    var resize = $('#list_fv').width() - 50;
    if(resize < 0 ){
        resize = 800;
    }   
    jQuery("#list1").setGridWidth(830);          

}
function buscar_fc(){
    jQuery("#tabla_busquedas").jqGrid({
        url: '../servidor/factura_compra/xml_facturaCompra.php',
        datatype: 'xml',
        colNames: ['ID','Fecha Factura','id_prov','Proveedor','id_usu','Usuario','Subtotal','Descuento','Iva','Total'],
        colModel: [
            {name: 'id_factura_compra', index: 'id_factura_compra',frozen:true,align:'left',search:false},
            {name: 'fecha_factura', index: 'fecha_factura',frozen:true,align:'left',search:false},
            {name: 'id_proveedor', index: 'id_proveedor',frozen:true,align:'left',search:false},
            {name: 'nombre_proveedor', index: 'nombre_proveedor',frozen:true,align:'left',search:false},
            {name: 'id_usuario', index: 'id_usuario',frozen:true,align:'left',search:false},
            {name: 'nombre_usuario', index: 'nombre_usuario',frozen:true,align:'left',search:false},
            {name: 'subtotal', index: 'subtotal',frozen:true,align:'left',search:false},
            {name: 'descuento', index: 'descuento',frozen:true,align:'left',search:false},
            {name: 'iva', index: 'iva',frozen:true,align:'left',search:false},
            {name: 'total', index: 'total',frozen:true,align:'left',search:false},
            
        ],
        rowNum: 10,
        autowidth:true,
        width: '100%',
        rowList: [10, 20, 30],
        pager: jQuery('#pager'),
        sortname: 'id_factura_compra',
        shrinkToFit: false,
        sortorder: 'asc',
        caption: 'Facturas Compras',        
        viewrecords: true,         
    }).jqGrid('navGrid', '#pager',
    {
        add: false,
        edit: false,
        del: false,
        refresh: true,
        search: true,
        view: false,
    },
    {
        recreateForm: true, closeAfterEdit: true, checkOnUpdate: true, reloadAfterSubmit: true, closeOnEscape: true
    },
    {
        reloadAfterSubmit: true, closeAfterAdd: true, checkOnUpdate: true, closeOnEscape: true,
        bottominfo: "Todos los campos son obligatorios son obligatorios"
    },
    {
        width: 300, closeOnEscape: true
    },
    {
        closeOnEscape: true,
        multipleSearch: false, overlay: false
    },
    {
    },
    {
        closeOnEscape: true
    });
    jQuery("#tabla_busquedas").jqGrid('hideCol', "id_factura_compra");
    jQuery("#tabla_busquedas").jqGrid('hideCol', "id_proveedor");      
    jQuery("#tabla_busquedas").jqGrid('hideCol', "id_usuario");      
    
    jQuery("#tabla_busquedas").jqGrid('navButtonAdd', '#pager', {caption: "PDF",
        onClickButton: function() {
            var id = jQuery("#tabla_busquedas").jqGrid('getGridParam', 'selrow');
            window.open("../reportes/reportes/factura_compra.php?id="+ret.id_factura_compra,'_blank');    
            if (id) {
            jQuery('#tabla_busquedas').jqGrid('restoreRow', id);   
            var ret = jQuery("#tabla_busquedas").jqGrid('getRowData', id);            
            } else {
                alert("Seleccione un fila");
            }

        }
    });

}
function buscar_fv(){
    jQuery("#tabla_busquedas").jqGrid({
        url: '../servidor/factura_venta/xml_facturaVenta.php',
        datatype: 'xml',
        colNames: ['ID','Fecha Factura','id_clic','Cliente','id_usu','Usuario','Subtotal','Descuento','Iva','Total'],
        colModel: [
            {name: 'id_factura_venta', index: 'id_factura_venta',frozen:true,align:'left',search:false},
            {name: 'fecha_factura', index: 'fecha_factura',frozen:true,align:'left',search:false},
            {name: 'id_cliente_fv', index: 'id_cliente_fv',frozen:true,align:'left',search:false},
            {name: 'nombre_cliente_fv', index: 'nombre_cliente_fv',frozen:true,align:'left',search:false},
            {name: 'id_usuario', index: 'id_usuario',frozen:true,align:'left',search:false},
            {name: 'nombre_usuario', index: 'nombre_usuario',frozen:true,align:'left',search:false},
            {name: 'subtotal', index: 'subtotal',frozen:true,align:'left',search:false},
            {name: 'descuento', index: 'descuento',frozen:true,align:'left',search:false},
            {name: 'iva', index: 'iva',frozen:true,align:'left',search:false},
            {name: 'total', index: 'total',frozen:true,align:'left',search:false},
            
        ],
        rowNum: 10,
        autowidth:true,
        width: '100%',
        rowList: [10, 20, 30],
        pager: jQuery('#pager'),
        sortname: 'id_factura_venta',
        shrinkToFit: false,
        sortorder: 'asc',
        caption: 'Facturas Ventas',        
        viewrecords: true,         
    }).jqGrid('navGrid', '#pager',
    {
        add: false,
        edit: false,
        del: false,
        refresh: true,
        search: true,
        view: false,
    },
    {
        recreateForm: true, closeAfterEdit: true, checkOnUpdate: true, reloadAfterSubmit: true, closeOnEscape: true
    },
    {
        reloadAfterSubmit: true, closeAfterAdd: true, checkOnUpdate: true, closeOnEscape: true,
        bottominfo: "Todos los campos son obligatorios son obligatorios"
    },
    {
        width: 300, closeOnEscape: true
    },
    {
        closeOnEscape: true,
        multipleSearch: false, overlay: false
    },
    {
    },
    {
        closeOnEscape: true
    });
    jQuery("#tabla_busquedas").jqGrid('hideCol', "id_factura_venta");
    jQuery("#tabla_busquedas").jqGrid('hideCol', "id_cliente_fv");      
    jQuery("#tabla_busquedas").jqGrid('hideCol', "id_usuario");      
    
    jQuery("#tabla_busquedas").jqGrid('navButtonAdd', '#pager', {caption: "PDF",
        onClickButton: function() {
            var id = jQuery("#tabla_busquedas").jqGrid('getGridParam', 'selrow');
            if (id) {
            jQuery('#tabla_busquedas').jqGrid('restoreRow', id);   
            var ret = jQuery("#tabla_busquedas").jqGrid('getRowData', id);                   
            window.open("../reportes/reportes/factura_venta.php?id="+ret.id_factura_venta,'_blank');    
            } else {
                alert("Seleccione un fila");
            }

        }
    });

}

function inventario_informacion (){
    jQuery("#list2").jqGrid({        
        url:'../servidor/inventario/xml_inventario.php',
        datatype:'xml',             
        colNames: ['id_prod_inv','Código','Nombre Producto','Stock','Stock Maximo','Stock Mínimo','Precio Compra','Precio Venta','Marca'],
        colModel:[
            {name:'id_producto_inv',index:'id_producto_inv',align:'center',frozen:true,width:100},
            {name:'codigo_producto_inv',index:'codigo_producto_inv',align:'center',width:185},
            {name:'nombre_producto_inv',index:'nombre_producto_inv',align:'center',width:185},            
            {name:'stock_inv',index:'stock_inv',align:'center',width:110},
            {name:'max',index:'max',align:'center',width:110},                      
            {name:'min',index:'min',align:'center',width:110},            
            {name:'precio_compra_inv',index:'precio_compra_inv',align:'center',width:110},                        
            {name:'precio_venta_inv',index:'precio_venta_inv',align:'center',width:110},                        
            {name:'marca_inv',index:'marca_inv',align:'center',width:110},                        
            
        ],          
        loadComplete: function(data) {          
              var rowData = $("#list2").getDataIDs();
              var fil = $("#list2").getRowData(); 
              for (var i = 0; i < rowData.length; i++) 
              {
                var dd=fil[i];
                if(parseInt(dd['min'])>parseInt(dd['stock_inv']))
                {
                    $("#list2").jqGrid('setRowData', rowData[i], false, {color:'red'});
                    $("#list2").jqGrid('setRowData', rowData[i], false, {'font-size':'12px'});
                }                
                if(parseInt(dd['stock_inv'])>=parseInt(dd['min']) && parseInt(dd['stock_inv'])<=parseInt(dd['max']))
                {
                    $("#list2").jqGrid('setRowData', rowData[i], false, {color:'green'});
                    $("#list2").jqGrid('setRowData', rowData[i], false, {'font-size':'12px'});
                }
                if(parseInt(dd['stock_inv'])>parseInt(dd['max']))
                {                    
                    $("#list2").jqGrid('setRowData', rowData[i], false, {color:'blue'});
                    $("#list2").jqGrid('setRowData', rowData[i], false, {'font-size':'12px'});
                }
                
                
              }
        },   
        rowNum: 10,                
        width: 850, 
        height:300,
        rowList: [10, 20, 30],
        pager: jQuery('#pager2'),
        sortname: 'id_producto',
        shrinkToFit: false,
        sortorder: 'asc',
        caption: 'Inventario',        
        viewrecords: true,         
        }).jqGrid('navGrid','#pager2',{
                add:false,
                edit:false,
                del:false,           
                refresh:true,
                search:false,
                view:true        
        });     
        jQuery("#list2").jqGrid('hideCol', "id_producto_inv");   
        
        jQuery("#list2").setGridWidth(850);  
}