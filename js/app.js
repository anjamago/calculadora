var numero1;
var numero2;
var funcion;
var resultado;
var error;
var status= 1;
var funciones ={
	'multiplicar':['multiplicar','mul','m','x','*'],
	'dividir':['dividir','div','d','/'],
};

var multiplicar = function(val1,val2){
	if(!val1 && !val2 )
		error= 'debe ingresar dos valores para poder ejecutar la function';

	resultado =  val1 +' x '+val2+' = '+(val1*val2);
};


var dividir = function(val1,val2){
	if(!val1 && !val2 )
		error= 'debe ingresar dos valores para poder ejecutar la function';

	resultado =   val1 +' / '+val2+' = '+(val1/val2);
	if(resultado == 'NaN' || resultado == undefined){
			error= 'debe ingresar un valor numerico  ejemplo 45 ';
	}
};

var touch =  function(params){
	element = document.getElementById('touch');

	if(params == 1){
		element.style.display='block';
		status=0;
	}else{
		element.style.display='none';
		status= 1;
	}

};
var init =  function(){
	numero1 = prompt('Ingresa el primer valor a calular ');
	numero2 = prompt('Ingresa el segundo valor a calular ');
	funcion = prompt('Ingrese  uno de los siguientes valores,\npara multiplicar ['+funciones.multiplicar+']\npara dividir ['+funciones.dividir+']');
	touch(1);
	ejecutar();
};

var digital = function(params){
	if(typeof params != "number")
		error= 'ingrese  un valor de tipo numerico ejemplo 4';
		element = document.getElementById('display');
	if(funcion === undefined)
	{
		if(numero1 === undefined){
			numero1=params.toString();
			cadena ='<span id="msj"> '+numero1+'</span>';
		}	else{
				numero1 = numero1 + params;
			cadena='<span id="msj"> '+numero1+'</span>';
		}
	}
	else
	{
		if(numero2 === undefined){
			numero2=params.toString();
			cadena='<span id="msj"> '+numero1 +funcion +numero2 +'</span>';
		}
		else{
				numero2 = numero2 + params;
				cadena='<span id="msj"> '+numero1 +funcion +numero2 +'</span>';
			}	
}
	element.innerHTML=cadena;
};


var index;
var ejecutar =  function(){
	for(var key in funciones){
		index =funciones[key].indexOf(funcion);
		if(index > -1){
			if(funciones[key][index] === funcion){
					if(key === 'multiplicar'){
						multiplicar(numero1, numero2);
						break;
					}else if(key === 'dividir'){
						dividir(numero1, numero2);
						break;
					}
			}
		}
	}
	element = document.getElementById('display');
	if(error !== undefined && resultado === undefined )
	{
		error = error === undefined?'Ingrese todo los datos para realizar el calculo':error;
		element.innerHTML='<span id="msj"> '+error+'</span>';
	}else {
console.log('resultado');
		element.innerHTML='<span id="msj"> '+resultado+'</span>';
		resultado = undefined;
		numero1=undefined;
		numero2 = undefined;
		funcion= undefined;
	}
};
