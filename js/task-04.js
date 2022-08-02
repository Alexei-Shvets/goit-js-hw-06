const valObj = {
    value: document.querySelector("#value"),
    decrement: document.querySelector(`[data-action="decrement"]`),
    increment: document.querySelector(`[data-action="increment"]`)}

let counter = 0;

valObj.decrement.addEventListener("click", () => {
    counter -= 1;
    valObj.value.textContent = counter;
})

valObj.increment.addEventListener("click", () => {
counter += 1;
valObj.value.textContent = counter;
})