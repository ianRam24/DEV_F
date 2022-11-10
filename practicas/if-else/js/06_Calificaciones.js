const question = prompt('Ingresa la calificación(1 - 10)');
if (question === '' || isNaN(question)) {
  document.write('Por favor ingresa un dato valído');
} else if (question > 1 && question < 10) {
  if (question < 6) {
    document.write('Reprobado 🙈');
  } else if (question >= 8) {
    document.write('Regular 😬');
  } else if (question == 9) {
    document.write('Bien 🤗');
  } else if (question == 10) {
    document.write('Excelente🤩');
  }
} else {
  document.write('El rango debe estar entre 1 y 10');
}
setTimeout(() => {
  location.reload();
}, 3000);
