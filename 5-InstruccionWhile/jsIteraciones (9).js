function mostrar()
{

	
	// declarar variables
	var maximo;
	var minimo;
	var flag = 0;
	var numeroIngresado;

	var respuesta='si';

	while(respuesta!='no')
	{
		numeroIngresado = prompt("Ingrese un numero ");
		numeroIngresado = parseInt(numeroIngresado);
		//validar que el dato este correcto
		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Lo que ingresaste no era un numero, volver a ingresarlo");
			numeroIngresado = parseInt(numeroIngresado);
		}

		//observar si sonb maximos y minimos 
		if(flag == 0){
			//entrariamos la primera vez y solo primera vez
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			flag = 1;
		}else if(numeroIngresado>maximo){
			maximo = numeroIngresado;
		}else if(numeroIngresado < minimo){
			minimo = numeroIngresado;
		}

		respuesta = prompt("Desea continuar? Si desea cancelar escriba no");

		
	}/// fin del while , fin del pedido de datos y evaluacion de maximos y minimos

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo; 




}//FIN DE LA FUNCIÓN