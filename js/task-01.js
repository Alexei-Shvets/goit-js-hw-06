"use strict";

const listItem = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listItem.length}`);

const elemOfItem = document.querySelectorAll('li.item');
elemOfItem.forEach(el => 
console.log(
`Category: ${el.firstElementChild.textContent} 
Elements: ${el.lastElementChild.children.length}`
)); 