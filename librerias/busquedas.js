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