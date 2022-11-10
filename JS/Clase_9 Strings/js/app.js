/**************************************                              Variables               *************************************/

// Alcance global
var algo = 'algo';

// Alcance local
const foo = 'foo';
// foo = 'otra cosa' -> esto es incorrecto

let bar = 'bar';
bar = 'otro valor';
// {} todo lo que este dentro de un bloque es local
// function () {} scope/alcance de funcion

// 01. Declara una variable.
var variableName;

// 02. Declara y asigna un valor númerico a una variable.
var variableName = 0;

// 03. Declara y asigna una variable por cada tipo de dato.
var lorem =
  'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without';
var number = 1232343;
var nulo = null;
var unDefined = undefined;
var symbol = Symbol('gato');
var boleano = true;
var miObjeto = {
  /* aqui adentro van propiedades */
};
var array = [
  /* aqui dentro van valores separados por , */
];

// 04. Usa typeof para tres de las variable de arriba e imprimelas en consola.
console.log(typeof string, typeof number, typeof nulo);
console.log(typeof string);
console.log(typeof number);
console.log(typeof nulo);

/**************************************                         Strings               *************************************/

// 01. Usa cada uno de estos métodos e imprimelo en consola: toLowerCase, toUpperCase, substr

console.log(lorem.toLowerCase());
console.log(lorem.toUpperCase());
console.log(lorem.substring(14, 18));

// 06. Utiliza un nuevo método de string e imprimelo en consola.
var loremText =
  'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without';
console.log(loremText.padStart(loremText.length + 1, '!'));
console.log(loremText.split(' '));

var url = 'api.tuweb.com/productos/{id}';
console.log(url.replace('{id}', '123'));

console.log(url.split('.'));
console.log(url.split('/'));
console.log(url.split(''));

// 07. Concatenar 2 strings, ``, .concat(), +
var nombre = 'Ian';
var apellidoPaterno = 'Espinosa';
var apellidoMaterno = 'Ramirez';

console.log(nombre + ' ' + apellidoPaterno);
console.log(nombre.concat(apellidoPaterno, apellidoMaterno));
// Alt + 96 -> ``
console.log(
  `Hola estoy concatenando/uniendo mi nombre: ${nombre} ${apellidoPaterno} ${apellidoMaterno}`
);

var lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellendus hic explicabo sapiente tenetur ea accusantium, suscipit, a maiores vel dolore est? Totam magni modi sunt maxime debitis, perferendis assumenda.';

var resultadoDelIndexOf = lorem.indexOf('Error');
console.log('--line2-- lorem charAt', lorem.charAt(resultadoDelIndexOf));
console.log('--line2-- lorem charAt', lorem.substr(resultadoDelIndexOf, 5));

var resultadoDelSlice = lorem.slice(0, 57);
var resultadoDelSlice2 = lorem.slice(57);
var resultadoDelSlice3 = lorem.slice(-10);
// var resultadoDelSlice4 = lorem.slice(-1, -57); // no es valido
console.log(resultadoDelSlice);
console.log(resultadoDelSlice2);
console.log(resultadoDelSlice3);
