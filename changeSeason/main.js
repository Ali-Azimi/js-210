


function changeSeason() {
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    
    const tmp = img1.getAttribute("src");

    img1.setAttribute("src", img2.getAttribute("src"));
    img2.setAttribute("src", tmp);
}