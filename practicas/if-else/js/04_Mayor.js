const num1 = prompt('Porfavor ingresa un número');
const num2 = prompt('Porfavor ingresa otro número');
if ((num1 && num2 === '') || isNaN(num1) || isNaN(num2)) {
  alert('Tiene que ser número 😂');
} else if (num1 > num2) {
  document.write(`${num1} es mayor a ${num2}🤓`);
} else if (num1 < num2) {
  document.write(`${num1} es menor que ${num2}🤭`);
} else {
  document.write('Son iguales😎');
}
setTimeout(() => {
  location.reload();
}, 3000);
