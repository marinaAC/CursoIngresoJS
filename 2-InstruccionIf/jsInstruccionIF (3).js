function mostrar()
{
//tomo la edad  
    //Declaracion de variables
    var edad;
    //Obtener la variable

    edad = parseInt(document.getElementById("edad").value);

    if(edad > 17){
        alert("Usted es mayor de edad");
    } else {
        alert("Usted es menor de edad");
    }

    

}//FIN DE LA FUNCIÓN