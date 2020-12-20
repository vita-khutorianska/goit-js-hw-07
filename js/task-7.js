const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');



function InputHandlerFontSize(event) {
  textRef.style.fontSize = event.currentTarget.value + 'px';
}
inputRef.addEventListener('input', InputHandlerFontSize);