const categoriesList = document.querySelectorAll('li.item');
console.log(`Number of categories:`, categoriesList.length)

categoriesList.forEach((elements) => {
    console.log(`Category:`, elements.firstElementChild.textContent);
    console.log(`Elements:`, elements.lastElementChild.children.length)
})