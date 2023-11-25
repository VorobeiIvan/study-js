const apiKey = 'ZopXOod170KPzc8Wfj_X';
const apiUrl = 'https://the-one-api.dev/v2/character';

fetch(apiUrl, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    renderCards(data.docs);
    renderPagination(data.docs);
  })
  .catch(error => console.error('Error:', error));

const cardContainer = document.createElement('div');
cardContainer.className = 'card-container';

document.body.appendChild(cardContainer);

const itemsPerPage = 20;
let currentPage = 1;

function renderCards(data) {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = data.slice(start, end);

  cardContainer.innerHTML = '';

  paginatedData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.innerHTML = `<h3>${item.name}</h3><p>Race: ${item.race}</p>`;
    cardContainer.appendChild(card);
  });
}

function renderPagination(data) {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationContainer = document.createElement('div');

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.addEventListener('click', () => {
      currentPage = i;
      renderCards(data);
      renderPagination(data);
    });
    paginationContainer.appendChild(pageButton);
  }

  cardContainer.appendChild(paginationContainer);
}
