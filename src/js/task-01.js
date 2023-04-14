const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`)

categoriesList.forEach(items => {
    console.log(`Category: ${items.firstElementChild.textContent}`);
    console.log(`Elements: ${items.lastElementChild.querySelectorAll(`li`).length}`)
})