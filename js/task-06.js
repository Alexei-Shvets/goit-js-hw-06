const valInp = document.querySelector('#validation-input');

valInp.addEventListener('blur', colorSwitcher);

function colorSwitcher() {
if (valInp.value.length === Number(valInp.dataset.length)) {
    valInp.classList.add('valid');
    valInp.classList.remove('invalid');
} else {
    valInp.classList.remove('valid');
    valInp.classList.add('invalid');
}}


