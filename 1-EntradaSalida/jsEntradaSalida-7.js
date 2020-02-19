/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    //declaro variables a usar
    var numeroUno; //no tienen guardado nada
    var numeroDos;
    var resultado;
    
    ////obtengo los datos necesarios 
    ///cargando de valor las variables
    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);

    //hago la operacion pedida
    resultado = numeroUno + numeroDos;
    //muestro el resultado 
    alert(resultado);
}

function restar()
{
	var numeroUno;
    var numeroDos;
    var resultado;
    
    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);

    //Operacion a realizar
    resultado = numeroUno - numeroDos;

    //Mostrar resultado

    alert(resultado);
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var resultado;
    
    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);
    
    //Operacion a realizar
    resultado = numeroUno * numeroDos;
    
    //Mostrar resultado
    
    alert(resultado);
}

function dividir()
{
    var numeroUno;
    var numeroDos;
    var resultado;
    
    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);
    
    //Operacion a realizar
    resultado = numeroUno / numeroDos;
    
    //Mostrar resultado
    
    alert(resultado);
}

