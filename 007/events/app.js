

// dom nodes
const divs = document.querySelectorAll("div");
const counter = document.getElementById("counter")




// functions

function addCounter() {
    counter.textContent = +counter.textContent+1
}




// events
for (const div of divs) {
    div.addEventListener(div.textContent, addCounter, false)
}