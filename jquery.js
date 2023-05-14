$(document).ready(function(){
    
})

$(function(){
    $("#btnBuscar").on('click', function(){
        let valor = $("#buscar").val().toLowerCase();
        $("table tbody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1);
        })
    })
})

//suazo

const time = document.getElementById('time');
const interval = setInterval(() =>{
    const local = new Date();
    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();
    
    time.innerHTML = local.toLocaleTimeString();
},1000);

$(function(){
    $("#miFormulario").validate({
        rules:{
            txtNombre:{
                required:true,
                minlength:10
            },
            txtDescripcion:{
                required:true,
                minlength:10
            },
            txtValor:{
                required:true,
                minlength:5
            },
            txtStock:{
                required:true,
                minlength:1
            },
            txtImagen:{
                required:true,
                minlength:5
            }
        },
        messages:{
            txtNombre:{
                required: "Debe ingresar un nombre",
                minlength:"Debe ingresar al menos 10 caracteres"
            },
            txtDescripcion:{
                required: "Debe ingresar una descripcion",
                minlength:"Debe ingresar al menos 10 caracteres"
            },
            txtValor:{
                required: "Debe ingresar un valor",
                minlength:"Debe ingresar al menos 5 caracteres"
            },txtStock:{
                required: "Debe ingresar un stock",
                minlength:"Debe ingresar al menos 1 caracteres"
            },
            txtImagen:{
                required: "Debe ingresar la url de la imagen",
                minlength:"Debe ingresar al menos 5 caracteres"
            }

        }
    })
})

$('#catalogo-img').mouseenter(function() {
    $(this).addClass('outline');
  }).mouseleave(function() {
    $(this).removeClass('outline');
  });
