function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var numeroIngresado;
	var cantidadNegativos = 0;
	var cantidadPositivos = 0;
	var cantidadCeros = 0;
	var cantidadNumerosPares = 0;
	var promedioNegativos;
	var promedioPositivos
	var diferenciaNegativosPositivos;
	
	var respuesta="si";

	while(respuesta!="no")
	{

		numeroIngresado = prompt("Ingrese un numero ");
		numeroIngresado = parseInt(numeroIngresado);
		//validar que el dato este correcto
		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Lo que ingresaste no era un numero, volver a ingresarlo");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado>0){
			//es positivo
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			cantidadPositivos++;
			var resto = numeroIngresado % 2;
			if(resto == 0){
				//es un numero par
				cantidadNumerosPares++;
			}
			console.log("Numero ingresado positivo: "+numeroIngresado);
		}else if (numeroIngresado<0){
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
			cantidadNegativos++;
			console.log("Numero ingresado negativo: "+numeroIngresado);
		}else{
			cantidadCeros++;
		}

		contador++;
		respuesta = prompt("Desea continuar? Si desea cancelar escriba no");
	
	}//terminamos el bucle


	//Se calculan los promedios
	promedioNegativos = acumuladorNegativos / cantidadNegativos;
	promedioPositivos = acumuladorPositivos / cantidadPositivos;
	diferenciaNegativosPositivos = acumuladorPositivos + acumuladorNegativos;

	document.write("El total de numeros positivos es de :"+acumuladorPositivos + "<br>"+
					"El total de numeros negativos es de : "+acumuladorNegativos +"<br>"+
					"El promedio de numeros negativos es de : "+promedioNegativos +"<br>"+
					"El promedio de numeros positivos es de : "+promedioPositivos +"<br>"+
					"La cantidad de ceros es de : "+cantidadCeros +"<br>"+
					"La diferencia de numeros negativos y positivos : "+diferenciaNegativosPositivos);


}//FIN DE LA FUNCIÓN