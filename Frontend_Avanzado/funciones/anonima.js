// Funciones anonimas autoejecutables//IIFE(Immediatley invoked function expression). Siempre llevan ;
(function () {
  return console.log("Soy anonima, mi pana...");
})();

(() => {
  return console.log("Soy anonima, mi pana... pero en arrow ;)");
})();

// iife con argumentos
(function (a, b) {
  return console.log(a + b);
})(13, 8);

((a, b) => console.log(a + b))(3, 15);
