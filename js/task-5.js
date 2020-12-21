// const inputRef = document.querySelector('#name-input');
// const outputRef = document.querySelector('#name-output');

// function changeInputValue(event) {
//     inputRef.value ? outputRef.textContent = event.currentTarget.value : outputRef.textContent = event.target.value;
// }
// inputRef.addEventListener('input', changeInputValue);


// inputRef.addEventListener('input', event => { inputRef.value ? outputRef.textContent = event.currentTarget.value : outputRef.textContent = event.target.value });


const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
inputRef.addEventListener('input', checkInputText)
function checkInputText(event) {  
 outputRef.textContent = event.target.value === "" ?  'незнакомец': event.target.value; 
 }

