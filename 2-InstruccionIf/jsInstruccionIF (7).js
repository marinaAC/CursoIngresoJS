/**
 * Al ingresar una edad menor a 18 años y 
 * un estado civil distinto a "Soltero", 
 * mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
 */

function mostrar()
{
//tomo la edad  

    //Declaracion de variables
    var edad;
    var estadoCivil;

    //Cargar variables
    edad = parseInt(document.getElementById("edad").value);
    estadoCivil = document.getElementById("estadoCivil").value;
    console.warn("Ver la edad "+edad);
    console.warn("Ver el estado civil "+estadoCivil);
    if(edad<=17 && estadoCivil != "Soltero"){
        //!(edad>=18) && !(estadoCivil=="Soltero") 
        alert("Es muy pequeño para NO ser soltero");
    }



}//FIN DE LA FUNCIÓN