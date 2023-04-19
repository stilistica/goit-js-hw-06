const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");
// const liEl = document.createElement("li");
// for (const ingredient of ingredients) {
//   liEl.textContent = ingredient;
// };
// liEl.classList.add("item")

// ulEl.append(liEl)
const liEl = ingredients
  .map(ingredient => `<li>${ingredient}</li>`)
  .join("");
ulEl.insertAdjacentHTML(`beforeend`, liEl)