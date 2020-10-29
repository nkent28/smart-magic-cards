const btnWrapper = document.querySelector('.btn-wrapper'); /* eslint-disable-line */
const selectedCardsWrapper = document.querySelector('.selected-cards'); /* eslint-disable-line */

const cardsWrapper = document.querySelector('.cards-wrapper');
if (cardsWrapper.style.visibility === 'hidden') {
  cardsWrapper.style.visibility = 'visible';
} else {
  cardsWrapper.style.visibility = 'hidden';
}

function createCards() {
  const x = document.getElementById('start-game');
  const z = document.querySelector('.cards-wrapper');
  function toggle() {
    if (z.style.visibility === 'hidden') {
      z.style.visibility = 'visible';
    } else {
      z.style.visibility = 'hidden';
    }
  }

  x.addEventListener('click', toggle);

  const cards = [];
  // Create an array with objects containing the value and the suit of each card
  const suit = ['hearts', 'clubs', 'diamonds', 'spades'];
  const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < value.length; j++) {
      const cardObject = {
        value: value[j],
        suit: suit[i],
      };
      cards.push(cardObject);
    }
  }

  const shuffleBtn = document.getElementById('shuffle-cards');
  shuffleBtn.addEventListener('click', () => {
    const shuffleMyCards = shuffleCards(cards);
    cardsWrapper.innerHTML = ''
    shuffleMyCards.forEach((card, i) => {
      const positionFromLeft = i * 15;
      const cardElement = document.createElement('div');
      cardElement.setAttribute('data-value', card.value);
      cardElement.classList.add('card', `${card.suit}-${card.value}`);
      cardElement.style.left = `${positionFromLeft}px`;
      cardsWrapper.append(cardElement);
    });
  });

  function shuffleCards(cards) {
    let i = 0,
      j = 0,
      temp = null
    for (i = cards.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    return cards;
  }

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 15;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
  const s = document.getElementById('start-game');
  function toggle() {
    if (s.style.visibility === 'hidden') {
      s.style.visibility = 'visible';
    } else {
      s.style.visibility = 'hidden';
    }
  }

  s.addEventListener('click', toggle);

  const t = document.getElementById('shuffle-cards');
  if (t.style.display === 'none') {
    t.style.display = 'block';
  } else {
    t.style.display = 'none';
  }

  const u = document.getElementById('hide-cards');
  if (u.style.display === 'none') {
    u.style.display = 'block';
  } else {
    u.style.display = 'none';
  }

  const v = document.getElementById('magic-cards');
  if (v.style.display === 'none') {
    v.style.display = 'block';
  } else {
    v.style.display = 'none';
  }
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').style.display = 'hidden';
document.getElementById('shuffle-cards').style.display = 'block';
document.getElementById('hide-cards').style.display = 'block';
document.getElementById('magic-cards').style.display = 'block';
document.getElementById('start-game').addEventListener('click', startGame);
