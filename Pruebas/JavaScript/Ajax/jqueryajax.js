
$(document).on('ready',funcPrincipal);

function funcPrincipal(){
    $("#boton").on('click',peticion);
}
function peticion(){
    var nombre = $("[type ='text']").val();
            //url , funcion de respuesta
    $.get("http//localhosta?nombre=",funActuadora);
}

function funActuadora(data){
    //en data se obtendra los valores recibios del servidor
    //actualizar el formulario con el dato llegado
}