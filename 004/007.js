

// js 
// change content
// change attribute
// style


// remove
// create


function handleRemove() {
    const h1 = document.querySelector("h1");
    h1.remove();
}



function handleCreate() {
    const h3 = document.createElement("h3");
    const input = document.querySelector("input")
    h3.textContent = input.value;
    h3.style.color = "Red"
    document.querySelector("div").appendChild(h3)
}