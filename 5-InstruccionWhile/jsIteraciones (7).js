function mostrar()
{
	var numeroIngresado;
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == "si"){
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
		respuesta = prompt("Desea continuar: escriba si para continuar");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN