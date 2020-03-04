function mostrar()
{
    var marca;
    var peso;
    var seguir;
    var temperatura;
    var contadorPares = 0;
    var acumuladorPares = 0;
    var contadoMasPesado = 0;
    var acumuladorProductoMenosCero = 0;
    var promedioPeso;
    var pesoMaximo;
    var pesoMinimo;
    var flag = 0;
    var resto;
    var marcaMasPesada;
    var cantidadProductos = 0;
    var acumuladorPesos = 0;


    do{
        //Ingreso de datos y validacion de datos
        marca = prompt("Ingrese una marca");
        while(marca == null || marca == ""){
            marca = prompt("Ingrese una marca");
        }

        peso = prompt("Ingrese el peso (debe estar entre 1 y 100)")
        peso = parseInt(peso);
        while(isNaN(peso)||peso<1 || peso > 100){
            peso = prompt("Error! Ingrese el peso (debe estar entre 1 y 100)")
            peso = parseInt(peso);
        }

        temperatura = prompt("Ingrese el peso (debe estar entre -30 y 30)")
        temperatura = parseInt(temperatura);
        while(isNaN(temperatura)||temperatura<-30 || temperatura > 30){
            temperatura = prompt("Error! Ingrese el peso (debe estar entre -30 y 30)")
            temperatura = parseInt(temperatura);
        }

        //evaluar las condiciones
        resto = temperatura % 2;
        if(resto == 0){
            acumuladorPares = acumuladorPares + temperatura;
            contadorPares++;
        }

        // pesos maximos y pesos minimos
        if(flag == 0){
            pesoMaximo = peso;
            pesoMinimo = peso;
            marcaMasPesada = marca;
            flag = 1;
        } else if(peso>pesoMaximo){
            pesoMaximo = peso;
            marcaMasPesada = marca;
        } else if(peso<pesoMinimo){
            pesoMinimo = peso;
        }

        if(temperatura < 0){
            acumuladorProductoMenosCero++;
        }

        acumuladorPesos += peso;
        cantidadProductos++;
        seguir=confirm("Desea Seguir?");
    }while(seguir);


    if(cantidadProductos>0){
        promedioPeso = acumuladorPesos / cantidadProductos;
    }

    document.write("")
}
