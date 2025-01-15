// TODO: this file! :)
/* - When the user clicks the "Add Number" button, the number they entered into the input field should be added to the number bank.
- The number bank is _not_ changed if the user enters a non-numeric value.
- The number bank should display all the numbers the user has entered.
- When the "Sort 1" button is clicked, the first number in the number bank should be removed and placed into either the odd or even category.
- When the "Sort All" button is clicked, all the numbers in the number bank should be moved into either the odd or even category.
- The numbers are placed into the correct bucket based on whether they are odd or even.*/


/*const addNumber = document.querySelector('form'); 
const numberAdded = document.querySelector('add[name = "number"');
const sortOneButton = document.querySelector('#sortOne');
const sortAllButton = document.querySelector('#sortAll');


let state = {
    numberBank: [],
    odds: [],
    evens: []
};


const addBankNumber = (number) => {
    state.numberBank.push(number);
    render();
};

const sortOne = () => {
    if (state.numberBank.length > 0) {
        const number =  state.numberBank.shift();
        number % 2 === 0 ? state.evens.push(number) : state.odds.push(number);
    }
    render();
};

const render = () => {
    document.querySelector('#numberBank output').textContent = state.numberBank.join(', ');
    document.querySelector('#odds output').textContent = state.evens.join(', ');
    document.querySelector('#evens output').textContent = state.evens.join(', ');
};

addNumber.addEventListener('submit', (e) => {
    e.preventDefault();
    const number = parseInt(numberAdded.value);
    if (!isNaN(number)) {
        addBankNumber(number);
        numberAdded.value = '';
    }
});

sortOneButton.addEventListener('click', sortOne);
sortAllButton.addEventListener('click', sortAll);


render();*/

const addNumberForm = document.querySelector('form');
const numberInput = document.querySelector('input[name="number"]');
const sortOneButton = document.querySelector('#sortOne');
const sortAllButton = document.querySelector('#sortAll');

// State
let state = {
  numberBank: [],
  odds: [],
  evens: []
};

// Functions to manage state
const addNumberToBank = (number) => {
  state.numberBank.push(number);
  render();
};

const sortOne = () => {
  if (state.numberBank.length > 0) {
    const number = state.numberBank.shift();
    number % 2 === 0 ? state.evens.push(number) : state.odds.push(number);
  }
  render();
};

const sortAll = () => {
  while (state.numberBank.length > 0) {
    const number = state.numberBank.shift();
    number % 2 === 0 ? state.evens.push(number) : state.odds.push(number);
  }
  render();
};

// Render function to update UI based on state
const render = () => {
  document.querySelector('#numberBank output').textContent = state.numberBank.join(', ');
  document.querySelector('#odds output').textContent = state.odds.join(', ');
  document.querySelector('#evens output').textContent = state.evens.join(', ');
};

// Event listeners
addNumberForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const number = parseInt(numberInput.value);
  if (!isNaN(number)) {
    addNumberToBank(number);
    numberInput.value = '';
  }
});

sortOneButton.addEventListener('click', sortOne);
sortAllButton.addEventListener('click', sortAll);

// Initial render
render();
