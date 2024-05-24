







// functions
function changeSlide() {
    if(event.deltaY > 0) {
        event.target.classList.add("up")
    } else {
        event.target.previousElementSibling.classList.remove("up")

    }
}








// events
window.addEventListener("mousewheel", changeSlide)