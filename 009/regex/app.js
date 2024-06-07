
const input = document.querySelector("input");
const error = document.getElementById("error");


function handleChange(event) {
    const value = event.target.value;
    const pattern = /989[0-9]{9}/
    const isValid = pattern.test(value)
    if(isValid) {
        input.classList.add("success");
        error.textContent = "";
    } else {
        input.classList.add("error");
        error.textContent = 'please enter correct phone number!'
    }
}