

// dom nodes
const input = document.querySelector("input");
const btn = document.querySelector("button");



// fucntions
function handleChange() {
    console.log(event)
    if(event.target.value.includes("0") || event.code === 'Enter'){
        input.setAttribute("disabled", "true")
    }
}

function enableInput() {
    event.preventDefault();
    input.removeAttribute("disabled")
}


function toggleDisplay() {
    if(event.keyCode === 66) {
        document.body.classList.toggle("black")
    }
}


// events
input.addEventListener("keyup", handleChange)
btn.addEventListener("click", enableInput)
window.addEventListener("keyup", toggleDisplay)