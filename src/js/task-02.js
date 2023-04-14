const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newIngredient = document.createElement('li');
newIngredient.textContent = 'ingredient name';
newIngredient.classList.add('item');
const ingredientsList = document.getElementById('ingredients');
ingredientsList.appendChild(newIngredient);
