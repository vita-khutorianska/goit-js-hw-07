let value = 0;
const btnDecrement = document.querySelector('button[data-action= "decrement"]');
const btnIncrement = document.querySelector('button[data-action= "increment"]');
const counterValue = document.querySelector('#value');


btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);


function decrement() {
    value -= 1;
return counterValue.textContent = value;}; 

function increment() {
    value += 1;
return counterValue.textContent = value;};