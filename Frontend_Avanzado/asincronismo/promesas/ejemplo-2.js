let x = 10;

// Formas de usar promesas
// 1. Creando las reglas de la promesa. Nos puede tocar hacerlo ò no
const traerHelado = new Promise((resolve, reject) => {
  if (x === 10) {
    resolve("Ten helado");
  }
  reject("No cumpli mi promesa, chefsito");
});

// 2. Recibiendo promesas como respuesta
traerHelado
  .then((response) => {
    console.log(response);
    console.log("hola");
    return "¿por què tan perdido? 😘";
  })
  .then((mensaje) => {
    console.log(mensaje);
  })
  .then(() => {
    console.log("Procede a no abrir el chat.");
  })
  .catch((err) => {
    console.error(err);
  });
