/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//Declaro variable
	var nombre;

	//asigno variable
	nombre = prompt("Ingrese su nombre");

	//asigno variable al id
	document.getElementById("elNombre").value = nombre;

}

