function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    const size = boxSize + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    box.style.backgroundColor = getRandomHexColor()

    boxesEl.appendChild(box);
  };
}

const destroyBoxes = () => {
  boxesEl.innerHTML= "";
}

createBtnEl.addEventListener("click", () => {
  createBoxes(inputEl.value);
});
destroyBtnEl.addEventListener("click", () => {
  destroyBoxes(inputEl.value);
});