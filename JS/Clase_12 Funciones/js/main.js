/* function suma(num1, num2) {
  return num1 + num2;
}
function resta(num1, num2) {
  return num1 - num2;
}
function multiplicacion(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  return num1 / num2;
}
 */
/* My solution */
/* 
function initGame() {
  const selection = prompt('Porfavor introduce piedra, papel o tijeras');

  switch (selection.toLowerCase()) {
    case 'piedra':
      document.write(`${selection} le gana a tijera`);
      break;
    case 'papel':
      document.write(`${selection} le gana a piedra`);
      break;
    case 'tijeras':
      document.write(`${selection} le gana a papel`);
      break;
    default:
      alert('Porfavor ingresa un dato');
      break;
  }
}
 */

const PIEDRA = 1;
const PAPEL = 2;
const TIJERA = 3;

const WIN = 'Ganaste';
const LOSE = 'Perdiste';
const DRAW = 'Empataste';

function iniciarJuego(opcionDelUsuario) {
  const mensaje = validarJuego(opcionDelUsuario);
  alert(mensaje);
}

function validarJuego(opcion) {
  let resultado;
  let mensajePC;
  let opcionRamdom = Math.floor(Math.random() * 3) + 1; // generar número aleatorio entre 1 y 3
  let div = document.getElementById('opcionRamdom');
  if (opcionRamdom === PIEDRA) {
    mensajePC = 'Piedra';
  } else if (opcionRamdom === PAPEL) {
    mensajePC = 'Papel';
  } else {
    mensajePC = 'Tijera';
  }
  div.innerHTML = mensajePC;
  // TODO: mejorar la UX con un mejor mensaje
  switch (opcion) {
    case PIEDRA:
      if (opcionRamdom === TIJERA) {
        resultado = WIN;
      } else if (opcionRamdom === PIEDRA) {
        resultado = DRAW;
      } else {
        resultado = LOSE;
      }
      break;
    case PAPEL:
      if (opcionRamdom === PIEDRA) {
        resultado = WIN;
      } else if (opcionRamdom === PAPEL) {
        resultado = DRAW;
      } else {
        resultado = LOSE;
      }
      break;
    case TIJERA:
      if (opcionRamdom === PAPEL) {
        resultado = WIN;
      } else if (opcionRamdom === TIJERA) {
        resultado = DRAW;
      } else {
        resultado = LOSE;
      }
      break;
    default:
      resultado = LOSE;
      break;
  }
  return resultado;
}
