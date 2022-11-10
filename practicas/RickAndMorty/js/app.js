const container = document.querySelector('#app');
const buttonsContainer = document.querySelector('.buttons');
const buttonPrev = document.getElementById('prev');
const buttonNext = document.getElementById('next');
const loader = document.querySelector('.loader');
const inputSearch = document.querySelector('.search');
let page = 1;
let characters = [];

async function fetchCharacters(endpoint) {
  try {
    const url = `https://rickandmortyapi.com/api/character/${endpoint}`;
    const response = await fetch(url);
    const data = await response.json();
    characters = data.results;
    renderCharacters(characters);
    loader.style.display = 'none';
    buttonsContainer.style.display = 'flex';
  } catch (error) {
    console.error(error);
  }
}

function renderCharacters(characters) {
  characters?.map((results) => {
    container.innerHTML += `
                    <div class="card">
                  <figure><img loading="lazy" src="${results.image}" alt=${results.name}></figure>
                    <div class="card-text">
                      <p>Name: <span>${results.name}</span></p>
                      <p>Location: <span>${results.location.name}</span></p>
                      <p>Specie: <span>${results.species} </span></p>
                      <p>Status: <span>${results.status} </span></p>
                    </div>
                  </div>
                  `;
  });
}
fetchCharacters(`?page=${page}`);

buttonNext.addEventListener('click', () => {
  if (page <= 42) {
    page += 1;
    fetchCharacters(`?page=${page}`);
    removeCards(container);
  }
  window.scrollTo({ top: 0 });
});
buttonPrev.addEventListener('click', () => {
  if (page >= 1) {
    page -= 1;
    fetchCharacters(`?page=${page}`);
    removeCards(container);
  }
  window.scrollTo({ top: 0 });
});
function removeCards(cardContainer) {
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
}
inputSearch.addEventListener('keyup', (e) => {
  e.preventDefault();
  fetchCharacters(`?name=${inputSearch.value}`);
  removeCards(container);
  renderCharacters();
});

// Intesection Observer
