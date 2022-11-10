let counter = 1;
const question = prompt('Ingresa un número');

if (question === '' || isNaN(question)) {
  document.write('Por favor ingresa un número');
}
while (counter <= question) {
  if (counter % 5 == 0) {
    document.write(`${counter} `);
  }
  counter++;
}

setTimeout(() => {
  location.reload();
}, 35000);
