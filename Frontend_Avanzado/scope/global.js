var hello = "Hola";
console.log("alcance global", hello);

function mundo() {
  var world = "mundo";
  return console.log("alcance global y local de funcion", hello, world);
}

mundo();

if (true) {
  console.log("alcance local de bloque", hello);
}
