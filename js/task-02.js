const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIng = document.querySelector('#ingredients')

const ingArray = []

ingredients.forEach(ing => {
	const item = document.createElement('li')
	item.className = 'item'
	item.textContent = ing
	ingArray.push(item)
})
allIng.append(...ingArray)






