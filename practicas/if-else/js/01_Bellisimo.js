const question = prompt('Eres bellisimo?').toLowerCase();
if (question === 'si') {
  alert('Ciertamente 😎 Eres un papucho');
} else if (question === 'no') {
  alert(
    'No te creo 😲. Recuerda autoestima hasta arriba, perreo hasta abajo 😏'
  );
} else {
  alert(
    'Si no puedo darte una respuesta significa que no escribiste si/no, o talvez no puedo cuantificar tu belleza 😉'
  );
}
setTimeout(() => {
  location.reload();
}, 3000);
