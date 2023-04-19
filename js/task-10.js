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
  for (let i = 0; i < amount; i += Number(inputEl.step)) {
    const box = document.createElement("div");

    let size = boxSize + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    box.style.backgroundColor = getRandomHexColor()

    boxesEl.appendChild(box);
  };
}

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
  inputEl.value= "";
}

createBtnEl.addEventListener("click", () => {
  const amount = Math.round(inputEl.value);
  if (amount < inputEl.min || amount > inputEl.max) {
    alert(`Введіть число від ${inputEl.min} до ${inputEl.max}.`)
  } else {
    createBoxes(amount);
  }
});

destroyBtnEl.addEventListener("click", () => {
  destroyBoxes();
});