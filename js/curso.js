'use strict'
console.log('JS Cargado');

//Objetos

let objeto = {
  atributo1:78 ,
  nombre: 'Perico Palotes',
  parejas: ['María', 'Pedro', 'Macario'],
  metodo2:function(num) {
    console.log('Método 2: '+ num * 2);
  }
};
console.log(objeto);
console.log('Me llamo ' + objeto.nombre);
console.log('Una de mis parejas es ' + objeto.parejas[1]);

function funcion1() {
  document.write('Me encanta JavaScript<br />')
}
funcion1()

let num = 7           //Declaro num y le asigno 7. Es tipo Number.
num = funcion1        //Es tipo funcion1. Es tipo funcion.
num()                 //La ejecuta.

objeto.metodo = funcion1
objeto.metodo()
objeto.metodo2(88)

//Parámetros de funciones
function suma(a, b=4) {
    return a + b
}
console.log(suma(5, 8));
console.log(suma(2));

function ejecuta(callback) {
  console.log('Ejecutando...');
  callback()
}

ejecuta(funcion1)

//Excepciones
//1

try {
  let num1 = 45
  console.log(num1 * 'Zapato');
  ejecuta(funcion2)
}
catch (excepcion) {
  console.log(excepcion);
}
finally {
  console.log('Ejecuto el finally');
}
//2

try {
  let nombre = 'Miguel'
  console.log(nombre.substr(2, 4));
}
catch (excepcion) {
  console.log(excepcion);
}
finally {
  console.log('Ejecuto el finally');
}


//Arrays
let vector = [1,2,3]
let guarreria = [1,2,'sadasdas', function functionName(){console.log('PFF');}, true]
let matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
