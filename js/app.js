var numero1;
var numero2;
var funcion;
var resultado;
var status= 1;
var funciones ={
	'multiplicar':['multiplicar','mul','m','x','*'],
	'dividir':['dividir','div','d','/'],
}

var multiplica = function(val1,val2){
	if(!val1 && !val2 )
		return 'debe ingresar dos valores para poder ejecutar la function';

	resultado = val1*val2;
}


var divide = function(val1,val2){
	if(!val1 && !val2 )
		return 'debe ingresar dos valores para poder ejecutar la function';

	resultado = val1/val2;
}

var touch =  function(){
	element = document.getElementById('touch');

	if(status == true){
		element.style.display='block';
		status=0;
	}else{
		element.style.display='none';
		status= 1;
	}

}
var init =  function(){
	numero1 = prompt('Ingresa el primer valor a calular ');
	numero2 = prompt('Ingresa el segundo valor a calular ');
	funcion = prompt('Ingrese  uno de los siguientes valores para multiplicar ['+funciones.multiplicar+']  o para dividir ['+funciones.dividir+']');
}
var digital = function(params){
	if(typeof params != "number")
		return 'ingrese  un valor de tipo numerico ejemplo 4';

	if(funcion === undefined)
	{
		if(numero1 === undefined)
			numero1=params.toString();
		else
			numero1 = numero1 + params;
	}
	else
	{
		if(numero2 === undefined)
			numero2=params.toString();
		else
			numero2 = numero1 + params.toString();
	}
}
var index;
var ejecutar =  function(){
	for( key in funciones){
		index =funciones[key].indexOf(funcion)
		if(index > -1){
			if(funciones[key][index] === funcion){

			}
		}
	}
}