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