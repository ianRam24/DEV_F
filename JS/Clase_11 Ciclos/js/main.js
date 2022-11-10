/**************      For         *************/
for (let index = 1; index <= 10; index++) {
  console.log(`Hola ${index} 😎`);
}

for (let index = 0; index < technologies.length; index++) {
  console.log(technologies[index] + ' is the best 😍');
}

/**************           While     ***************/
const token = 1;
while (token <= 10) {
  console.log('#'.repeat(token));
}
token++;

const number = prompt('Ingresa un número');
let counter = 1;
if (number === '' || isNaN(number)) {
  alert('Porfavor ingresa un numero');
} else {
  while (counter <= number) {
    document.write(`${counter} + ${counter} = ${counter + counter} 🤓<br>`);
    counter++;
  }
}

/**********       Do-While        *******/
let counterInWhile = 1;
do {
  counterInWhile++;
  console.log(`${counterInWhile} 🤩`);
} while (counterInWhile <= 10);

const transacciones = [1, 2, 3, 4, 5, 67, 89, 7, 65, 70, 98, 120];
let total = 0;
for (let index = 0; index <= transacciones.length; index++) {
  total += transacciones[index];
}

const technologies = [
  'HTML',
  'CSS',
  'SCSS',
  'Javascript',
  'TypeScript',
  'React',
  'Vue',
];
for (let index = 0; index < technologies.length; index++) {
  const toUpperCase = technologies[index].toUpperCase();
  const toLowerCase = technologies[index].toLowerCase();
  const justFirstLetter = technologies[index].charAt(0);
  const string = technologies[index];
  const firstLetter = string.charAt(0);
  const firstLetterToUpperCase = firstLetter.toUpperCase();
  const restOfWord = string.slice(1);
  console.log(justFirstLetter);
  console.log(`${firstLetterToUpperCase}${restOfWord}`);
  console.log(toLowerCase);
  console.log(toUpperCase);
}
/* for (let index = 0; index < technologies.length; index++) {
  const string = technologies[index];

  // Convertir la primer letra a Mayúscula
  const firstLetter = string.charAt(0);
  const firstLetterToUpperCase = firstLetter.toUpperCase();
  const restOfWord = string.slice(1);
  console.log(`${firstLetterToUpperCase}${restOfWord}`);
} */
