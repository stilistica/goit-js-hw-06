// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const categoriesList = document.querySelector("#categories");

const categories = categoriesList.querySelectorAll("li.item");

const categoriesCount = categories.length;
console.log(`Number of categories: ${categoriesCount}`)

categories.forEach(category => {
  const title = category.querySelector("h2").textContent;
  console.log(`Category: ${title}`);

  const categoriesItems = category.querySelectorAll("ul li");
  const categoriesItemsCount = categoriesItems.length;
  console.log(`Elements: ${categoriesItemsCount}`)
});