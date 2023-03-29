const accounts = [
  { name: 'Gera', balance: 290, password: 'Gera123' },
  { name: 'Mali', balance: 200, password: 'Mali123' },
  { name: 'Maui', balance: 67, password: 'Maui123' },
];

function getValues() {
  const userName = document.getElementById('user').value;
  const userPassword = document.getElementById('password').value;
  getData(userName, userPassword);
}
/* Check if the user exists in oobject */
function getData(name, password) {
  const currentUser = accounts.find(
    (account) => account.name === name && account.password === password
  );
  const formContainer = document.querySelector('.form-container');
  if (currentUser) {
    formContainer.style.display = 'none';
    showUserInfo(currentUser.name, currentUser.balance);
  } else {
    const error = `<span class="validation">Usuario o contraseña incorrectas</span>`;
    formContainer.innerHTML = error;
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
document.getElementById('button').addEventListener('click', (e) => {
  e.preventDefault();
  getValues();
});
function showUserInfo(name, balance) {
  const createContainer = document.querySelector('.user-info');
  createContainer.style.display = 'flex';
  const userInfo = `<h2 class="user-name">${name}</h2>
  <h3 class="user-balance">Balance: <span>$${balance}</span></h3>
  <p>¿Que deseas hacer?</p>
  <div class="buttons">
      <button class="button" id="add-amount">Ingresar monto</button>
      <button class="button" id="retire-amount">Retirar Monto</button>
  </div>`;

  createContainer.innerHTML = userInfo;
  addAmount();
  retireAmount();
}
function addAmount() {
  const createContainer = document.querySelector('.user-info');
  document.getElementById('add-amount').addEventListener(
    'click',
    () => {
      const createLabel = document.createElement('label');
      createLabel.textContent = 'Que cantidad quieres agregar';
      const createInput = document.createElement('input');
      createInput.placeholder = '$400';
      createInput.classList.add('button');
      createInput.setAttribute('id', 'add-value');
      createContainer.append(createLabel);
      createContainer.append(createInput);
    },
    { once: true }
  );
}
let clicked = false;
function retireAmount() {
  const createContainer = document.querySelector('.user-info');
  document.getElementById('retire-amount').addEventListener(
    'click',
    () => {
      const createLabel = document.createElement('label');
      createLabel.textContent = 'Que cantidad quieres retirar';
      const createInput = document.createElement('input');
      createInput.id = 'retire-value';
      createInput.placeholder = 'Agrega un monto';
      createInput.classList.add('button');
      console.log('added press');
      createContainer.append(createLabel);
      createContainer.append(createInput);
      // grabValues();
      clicked = true;
      isClicked();
    },
    { once: true }
  );
}
function isClicked() {
  if (clicked) {
    console.log('foo');
      const retireValue = document.getElementById('retire-value').value;
      console.log(retireValue);
    
  }
}
/* function grabValues() {
  console.log(valueAdd);
}
 */
/* Obtener el valor del input del monto a agregar y retirar y mostrarlos en la pantalla */
