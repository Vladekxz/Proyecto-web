$(document).ready(function(){
    
})
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
                minlength:10
            },
            txtStock:{
                required:true,
                minlength:1
            },
            txtImagen:{
                required:true,
                minlength:10
            }
        },
        messages:{
            txtNombre:{
                required: "Debe ingresar un nombre",
                minlength:"Debe ingresar el largo minimo de caracteres"
            },
            txtDescripcion:{
                required: "Debe ingresar una descripcion",
                minlength:"Debe ingresar el largo minimo de caracteres"
            },
            txtValor:{
                required: "Debe ingresar un valor",
                minlength:"Debe ingresar el largo minimo de caracteres"
            },txtStock:{
                required: "Debe ingresar un stock",
                minlength:"Debe ingresar el largo minimo de caracteres"
            },
            txtImagen:{
                required: "Debe ingresar una imagen",
                minlength:"Debe ingresar el largo minimo de caracteres"
            }

        }
    })
})
  $(document).ready(function() {
    $('.card-img-top').mouseenter(function() {
      $(this).addClass('hover-effect');
    }).mouseleave(function() {
      $(this).removeClass('hover-effect');
    });
  });

  