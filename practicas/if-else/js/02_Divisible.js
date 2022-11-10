const question = prompt('Porfavor ingresa un número☺');
if (question === '' || isNaN(question)) {
  document.write('Porfavor ingresa un número🤨');
} else if (question % 2 === 0) {
  document.write(`${question} es divisible entre 2 😎`);
} else {
  document.write(`${question} no es divisible entre 2 😑`);
}
setTimeout(() => {
  location.reload();
}, 3000);
