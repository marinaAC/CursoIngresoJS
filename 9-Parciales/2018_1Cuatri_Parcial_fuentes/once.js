function mostrar()
{
    
   // var continuar=true;
    /*while(continuar){
        continuar= confirm("Usted desea seguir cargando datos?");
    }*/
    /*
    var continuar;
    do{
        continuar= confirm("Usted desea seguir cargando datos?");
    }while(continuar);*/

    var respuesta = "si";
    while(respuesta=="si"){

            //pedir los datos
            //validar los datos

            //calcular 

            var formasDePago = prompt("ingrese una forma de pago");
            formasDePago = formasDePago.toLocaleLowerCase();
            while(formasDePago.toLocaleLowerCase() != "efectivo" && formasDePago.toLocaleLowerCase() != "qr"){
                
            }


            formasDePago.toLocaleLowerCase()




        respuesta=prompt("Si desea continuar escriba si");
    }
/*
    var respuesta;
    do{
        respuesta=prompt("Si desea continuar escriba si"); 
    }while(respuesta == "si");*/
    
}
