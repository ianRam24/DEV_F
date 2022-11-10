const winner = prompt('Porfavor ingresa tu numero de cliente');

if (winner === '' || isNaN(winner)) {
  alert('Por favor ingresa un número');
} else if (winner == 1000) {
  alert('Felicidades ganaste un premio🥳🥳');
} else {
  alert('Sigue participando 😬');
}
setTimeout(() => {
  location.reload();
}, 3000);
