
// define our localStorage var
var contador = localStorage.getItem("carga_contador");

if (contador === null) {
    n = 0;
}

// incease our counter by one
contador++;
localStorage.setItem("carga_contador", contador);

// display couinter in review.html page
document.querySelector("#micontador").innerHTML = contador;

// to reset the conter with a button
// function reset_counter () { 
//     localStorage .removeItem ( "carga_contador" ) ;
// }
 
// documento . getElementById ( 'reset' ). addEventListener ( 'click' , reset_counter );