

// dom nodes
const CIRCLE = document.querySelector("div")






// function
function handleMove() {
    const X = (innerWidth - event.clientX)/12
    const Y = -(innerHeight - event.clientY)/12;
    CIRCLE.style.transform = `translate(${X}px, ${Y}px)`
}






// events
window.addEventListener("mousemove", handleMove)