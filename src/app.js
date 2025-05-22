import {getRandomColor} from './utils';

export default function initApp() {
  console.log('Hello world');

  const parentElement = document.querySelector("body")

  const parentDiv = document.createElement("div")
  parentDiv.className = "construct"

  const button = document.createElement("button")
  button.className = "button"
  button.textContent = "Изменить цвет страницы"

  parentElement.append(parentDiv)
  parentDiv.append(button)

  button.addEventListener("click", () => {
    const randomColor = getRandomColor()
    parentElement.style.backgroundColor = randomColor
  })
}
