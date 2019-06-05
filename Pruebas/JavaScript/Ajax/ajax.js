
var peticionHTTP = new XMLHttpRequest();

function realizarPeticion(url , metodo ,funcionRespuesta){

    peticionHTTP.onreadystatechange = funcionRespuesta;
                //metodo post o get    true si sera una funcion asincrona
    peticionHTTP.open( url, metodo , true);
    peticionHTTP.send(null);
}

function deescargarArchivo(){
    realizarPeticion('archivo.txt','GET',funActuadora);
}

function funActuadora(){
    if(peticionHTTP.readyState == 4)
        if(peticionHTTP.status ==200)
            //haces algo despues de recibir la data del servidor
            document.write(peticionHTTP.responseText);
}

window.onload = deescargarArchivo;


//con promosesas

peticionHTTP.open('GET','htpp//...',true);

var promise = new Promise( function(resolve , reject){
    //el evento que se ejecuta cada vez que hay un cambio de estado
    //si el estado es 4 quiere decir que el servidor le respondioo
    peticion.addEventLisstener('readystatechange',function(){
        if(peticionHTTP.readyState===4){
            resolve(peticionHTTP);
        }
    });
    
    peticionHTTP.addEventListener('error',function(){
        reject(peticionHTTP);
    });
});

promise.then( 
    //aqui puedes usar la data recibida y actualizar la pag
    function(peticion){
        console.log('rpromsesa cumplida',peticion);
    },
    function(peticion){
        console.log('promesa erronea',peticion);
    }    
)
peticionHTTP.send();

