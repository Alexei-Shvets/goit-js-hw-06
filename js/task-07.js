const a = document.querySelector("#font-size-control");
const b = document.querySelector("#text");

a.addEventListener('input', d)

function d(even) {
    b.style.fontSize = `${even.target.value}px`
} 