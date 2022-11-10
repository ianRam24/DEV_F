// Es cuando una funcion de orden mayor, ejecuta la(s)
// funcion(es) que recibe como argumento(s)

// function ordenMayor(otraFuncion) {
//   return otraFuncion()
// }

// forma con arrow functions
const suma = (a, b) => {
  return a + b;
};
const resta = (a, b) => {
  return a - b;
};

// forma con short arrow functions
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const calculadora = (a, b, operacion) => {
  return operacion(a, b);
};

console.log("suma: ", calculadora(12, 6, suma));
console.log("resta: ", calculadora(12, 6, resta));
console.log("multiplicar: ", calculadora(12, 6, multiplicar));
console.log("dividir: ", calculadora(12, 6, dividir));
