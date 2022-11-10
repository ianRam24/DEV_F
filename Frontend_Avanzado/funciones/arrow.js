// La funcion flecha, nos da una sintaxis mas limpia y
// facil de leer

// normalmente, se almacenan en constantes o en variables
// en las funciones flecha, no existe el objeto this
const saludar = () => {
  console.log("Hola");
  return "Mundo";
};

console.log(saludar());

// short arrow function
// reglas de sintaxis en arrow functions
// * Si mi funcion solo retorna un valor, puedo quitar el return explicito, los parentesis y hacer uso del return implicito
const suma = (a, b) => a + b;
console.log(suma(3, 18));

// short arrow function con un parametro
// * Si tienes solo un argumento, le puedes quitar los parentesis
const saludar2 = (persona) => `Hola, ${persona}`;
console.log(saludar2("Arturo"));
