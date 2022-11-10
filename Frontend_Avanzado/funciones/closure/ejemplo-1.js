// Necesitamos al menos 3 cosas
// 1. Funcion padre
// 2. Una variable, constante o parametro que sea
// usada por la funcion hijo
// 3. Una funcion hijo

function nombre() {
  let ernesto = "Ernesto";
  function saludar() {
    return `Hola, ${ernesto}`;
  }
  return saludar;
}

console.log(nombre()());
