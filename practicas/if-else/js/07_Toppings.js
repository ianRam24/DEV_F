const question = prompt('¿Vas a querer un topping? Oreo/Kitkat/Brownie/Simple');
switch (question.toLowerCase()) {
  case 'oreo':
    document.write(`Son $10 del topping de ${question} 🍨`);
    break;
  case 'kitKat':
    document.write(`Son $15 del topping de ${question} 🍨`);
    break;
  case 'brownie':
    document.write(`Son $20 del topping de ${question} 🍨`);
    break;
  case 'simple':
    document.write(`Son $15 del helado ${question} 🍨`);
    break;
  default:
    alert(`No tenemos el topping que seleccionaste😖`);
    document.write(`El helado son topping cuesta $50🍨`);
    break;
}

setTimeout(() => {
  location.reload();
}, 3000);
