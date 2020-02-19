function mostrar()
{
//tomo la edad  

    //Declaracion de variables
    var edad;
    var estadoCivil;

    //Cargar variables
    edad = parseInt(document.getElementById("edad").value);
    estadoCivil = document.getElementById("estadoCivil").value;
   
    if(estadoCivil=="Soltero"&&edad>=18){
        alert("Es soltero y no es menor");
    }



}//FIN DE LA FUNCIÓN