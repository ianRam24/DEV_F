function hola(otraFuncion) {
  setTimeout(() => {
    console.log("Hola");
    otraFuncion();
  }, 1500);
}

function adios() {
  setTimeout(() => {
    console.log("Adios");
  }, 1000);
}

hola(adios);
