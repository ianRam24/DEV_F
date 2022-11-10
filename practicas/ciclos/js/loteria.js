const first_number = parseInt(prompt('Elige un número del 1 al 50'));
const second_number = parseInt(prompt('Elige otro número del 1 al 50'));

let counter = 1;

while (counter <= 50) {
  console.log(counter);
  if (counter === first_number || second_number === counter) {
    console.log(`${first_number} ¡Loteria!`);
    console.log(`${second_number} ¡Loteria!`);
  }
  counter++;
}
/* while (counter_of_second_number <= 50) { 
  console.log(counter_of_second_number);
  if (second_number === counter_of_second_number) {
    console.log(`${counter_of_second_number} ¡Loteria¡`);
  }
  counter_of_second_number++;
}
 */
