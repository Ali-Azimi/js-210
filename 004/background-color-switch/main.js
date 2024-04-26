

// dom nodes
const buttons = document.querySelectorAll(".button")




// functions
function changeBackground() {
    const background= event.target.getAttribute("id");
    document.body.style.backgroundColor = background
}




// events
for (const button of buttons) {
    button.onclick = changeBackground;
}