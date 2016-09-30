var numero1;
var numero2;
var funcion;
var resultado;
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
/*
numero1 = prompt('Ingresa el primer valor a calular ');
numero2 = prompt('Ingresa el segundo valor a calular ');
funcion = prompt('Ingrese  uno de los siguientes valores para multiplicar ['+funciones.multiplicar+']  o para dividir ['+funciones.dividir+']');
*/