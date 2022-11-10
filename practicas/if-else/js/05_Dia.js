const question = prompt('¿Que dia de la semana es?🤔').toLowerCase();
switch (question) {
  case 'lunes':
    document.write('Inicio de semana, un cafecito y a darle ☕');
    break;
  case 'viernes':
    document.write('Saca las chelas carnal 🍻');
    break;
  case 'sabado':
    document.write("Vamos por una birria pa' curar la cruda🥴");
    break;
  case 'domingo':
    document.write('Es domingo de barbacoa 🤤');

  default:
    document.write('Mitad de semana resiste soldado 🏋️‍♂️');
    break;
}
setTimeout(() => {
  location.reload();
}, 3000);
