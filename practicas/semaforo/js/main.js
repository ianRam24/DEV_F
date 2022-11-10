const circulos = document.querySelectorAll('.circulo');
let activeLight = 0;

setInterval(() => {
  changeLight();
}, 1000);

function changeLight() {
  circulos[activeLight].className = 'circulo';
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
  }

  const currentLight = circulos[activeLight];

  currentLight.classList.add(currentLight.getAttribute('color'));
}
