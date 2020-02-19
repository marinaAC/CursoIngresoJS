function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	while(respuesta == "si"){
		numeroIngresado = prompt("Ingrese un numero ");
		numeroIngresado = parseInt(numeroIngresado);
		//validar que el dato este correcto
		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Lo que ingresaste no era un numero, volver a ingresarlo");
			numeroIngresado = parseInt(numeroIngresado);
		}
		
		if(numeroIngresado>=0){
			positivo = positivo + numeroIngresado;
		}else{
			negativo = negativo * numeroIngresado;
		}
		respuesta = prompt("Desea continuar: escriba si para continuar");
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN