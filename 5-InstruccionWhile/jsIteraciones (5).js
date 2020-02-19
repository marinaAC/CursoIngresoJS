function mostrar()
{
    var sexo;
//Validar el dato, no vamos a parar de pedir el dato, hasta que este bien
do {
    //se ejecuta una vez si o si
    sexo = prompt("ingrese f ó m .");
    sexo = sexo.toLocaleLowerCase();
    
} while (!(sexo=="f"||sexo=="m")); //evalua la condicion 

//Aca el dato es correcto
switch (sexo) {
    case "f":
        sexo = "Femenino";
        break;
    case "m":
        sexo = "Masculino";
        break;
}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN