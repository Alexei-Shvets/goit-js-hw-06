const form = document.querySelector(".login-form")

form.addEventListener("submit", handlerSubmit)


function handlerSubmit (event) {
    event.preventDefault()
    let { email, password } = event.target.elements;
        if(email.value === "" || password.value === "") {
        return alert("Please write correct data")
        }
        const obj = { email: email.value, password: password.value }; 
        console.log(obj)   
        event.target.reset()
    }
