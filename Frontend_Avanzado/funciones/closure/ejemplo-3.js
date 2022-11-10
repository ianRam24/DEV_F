"use strict";

// Los closures, se utilizan para ir recordando la modificacion de
// sus valores y como fabrica de funciones.Los

// NOTA: Antes de la sintaxis de "class AlgunaCosa {}", se utilizaban
// para simular estas pero con funciones

function sumador() {
  let _cuenta = 0;

  function setCuentaSumar() {
    return (_cuenta += 1);
  }

  function setCuentaRestar(params) {
    return (_cuenta -= 1);
  }

  return {
    setCuentaSumar,
    setCuentaRestar,
  };
}

// CONTEXTO DE EJECUCION/EXECUTION CONTEXT
// cuentarArturo,
// params,
// _cuenta = 2

console.log("=============== ARTURO ===============");
const cuentaArturo = sumador();
console.log(cuentaArturo.setCuentaSumar());
console.log(cuentaArturo.setCuentaSumar());
console.log(cuentaArturo.setCuentaSumar());
console.log(cuentaArturo.setCuentaRestar());

console.log("=============== ANGELA ===============");
const cuentaAngela = sumador();
console.log(cuentaAngela.setCuentaSumar());
console.log(cuentaAngela.setCuentaSumar());
console.log(cuentaAngela.setCuentaRestar());
console.log(cuentaAngela.setCuentaRestar());
