"use strict";

const gabriela = (() => {
  let nombre = "Gabriela";
  let _edad = 23;
  let _pais = "Argentina";

  function getEdad() {
    return "Hola, tengo" + _edad + "años";
  }

  function setEdad(nuevaEdad) {
    _edad = nuevaEdad;
    return _edad;
  }

  return {
    nombre,
    getEdad,
    setEdad,
  };
})();

console.log(gabriela.nombre);
console.log(gabriela["getEdad"]());

gabriela.setEdad(33);

console.log(gabriela.getEdad());
