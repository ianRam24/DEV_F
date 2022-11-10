/* var num1 = 23;
var num2 = 89;
var suma = num1 + num2;
if (suma >= 126) {
  console.log('Suma mayoir a 100 😎');
}
 */
/* const pregunta = prompt('¿Cual es tu sexo?').toLowerCase();
const playera = 'Megadeth';
const camisetaNegra = 'Metalica';
const pantalon = 'Pantalon negro';
const zapatos = 'tenis negros';
/* Mujer */
/* const blusa = 'Blusa Azul';
const falda = 'falda rosa';
const zapatosMujer = 'zapatillas';

if (pregunta === 'hombre') {
  alert(
    `Tu debes usar playera de ${playera} un pantalon ${pantalon} y de calzado ${zapatos}`
  );
} else if (pregunta === 'mujer') {
  alert(`Tu debes usar una ${blusa}, una ${falda} y unas ${zapatosMujer}`);
} else {
  alert('Porfavor pon un dato valido [hombre / mujer]');
}
 */
/* const pregunta = prompt(
  '¿Que clima es en el lugar donde vives?'
).toLocaleLowerCase();
switch (pregunta) {
  case 'frio':
    alert('Ponte sueter que esta perro el frio🥶');
    break;
  case 'calor':
    alert('Ay perro saca las chelas 😎');
    break;
  case 'lloviendo':
    alert('Agarra una sombrilla hijo🤶');
    break;
  case 'nublado':
    alert('Pongase sueter que mi rodilla me dice que va a llover🤫');
    break;
  default:
    alert('Que diosito te acompañe 👀');
    break;
}
 */
// const preguntaEstacion = prompt('¿En que mes estas actualmente🤔');
// switch (preguntaEstacion.toLowerCase()) {
//   case 'Marzo':
//   case 'Abril':
//   case 'Mayo':
//     alert('Estas en primavera😎');
//     break;
//   case 'Junio':
//   case 'Julio':
//   case 'Agosto':
//     alert('Estas en verano🥵');
//     break;
//   case 'Septiembre':
//   case 'Octubre':
//   case 'Noviembre':
//     alert('Estas en otoño👻');
//     break;
//   case 'Diciembre':
//   case 'Enero':
//   case 'Febrero':
//     alert('Estas en invierno🎅');
//     break;

//   default:
//     alert('😃');
//     break;
// }
let calificacion = prompt('¿Cual es la calificacion?');
if (calificacion === '' || isNaN(calificacion)) {
  alert('Pon un numero Porfavor 🙄');
  window.location.reload();
} else {
  if (calificacion >= 80) {
    alert('Eres todo un nerd tiees una A😎');
  } else if (calificacion >= 70) {
    alert('Pasas con una B eres bueno🤗');
  } else if (calificacion >= 60) {
    alert('Tienes C Ponte a estudiar😏');
  } else if (calificacion >= 59) {
    alert('Tienes D pasaste de panzaso🥱');
  } else {
    alert('Tienes F estas reprobado😪');
  }
}
