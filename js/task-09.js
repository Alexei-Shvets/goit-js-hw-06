function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const colEl = document.querySelector('.color');

btnEl.addEventListener('click', handlerClick)

function handlerClick() {
  bodyEl.style.backgroundColor = getRandomHexColor()
  colEl.textContent = getRandomHexColor()
}