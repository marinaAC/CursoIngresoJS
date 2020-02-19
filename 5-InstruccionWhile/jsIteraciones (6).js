function mostrar()
{
	//Declaramos las variables
	var numeroIngresado;
	var contador=0;
	var acumulador=0;
	var promedio;

	do {
		//Ingresar el numero
		numeroIngresado = prompt("Ingrese un numero ");
		numeroIngresado = parseInt(numeroIngresado);
		//validar que el dato este correcto
		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Lo que ingresaste no era un numero, volver a ingresarlo");
			numeroIngresado = parseInt(numeroIngresado);
		}
		//En esta parte del codigo sabemos que el numero es correcto
		contador++; // contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
		console.log("El contador es: "+contador);
		console.log("Se encuentra acumulando : "+acumulador);
	} while (contador < 5);


	//Muestra el acumulador
	document.getElementById('suma').value=acumulador;
	promedio = acumulador / contador;
	//Mostramos el promedio 
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN