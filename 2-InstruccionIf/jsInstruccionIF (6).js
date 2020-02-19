function mostrar()
{
//tomo la edad  
    //Declaramos la variable
    var edad;

    //Obtenemos edad y la parseamos
    edad = parseInt(document.getElementById("edad").value);

    //Evaluacion condional
   // if(edad<=17&&edad>=13){
     
   if(edad>=18){//edad>=18 es mayor de edad
        alert("Es mayor de edad");   
    // alert("Es adolescente");
    //}else if(edad<13){
    }else if(edad<=12){
        //edad<=12 es menor de edad
        alert("Es menor de edad");
        //alert("Es un niño");
    //}else if(edad>=18){
    }else{    
        alert("usted es adolescente");
        //alert("Es adulto");
    }




}//FIN DE LA FUNCIÓN