// const BACKS = ["alighapou", "ardeshir", "eram", "jame", "kiasar"];
// const PLACES = ["عالی قاپو", "اردشیر بابکان", "باغ ارم", "مسجد جامع", "کیاسر"];
// const CITIES = ["اصفهان", "شیراز", "شیراز", "یزد", "مازندران"];


// let student = {
//     name: "sana",
//     family: "samin",
//     age: 30,
//     course: 'NodeJS'
// }

const SLIDES = [
    {
        image: 'alighapou',
        city: 'اصفهان',
        place: 'عالی قاپو'
    },
    {
        image: 'ardeshir',
        city: 'شیراز',
        place: 'اردشیر بابکان'
    }
]


let INDEX = 0;

// dom nodes
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const place = document.querySelector(".location")
const city = document.querySelector(".city")


// functions

function render(index) {
  document.body.style.backgroundImage = `url(./backgrounds/${SLIDES[index].image}.jpg)`;
  document.body.style.backgroundSize = "cover";

  place.textContent = SLIDES[index].place;
  city.textContent = SLIDES[index].city;




  if (index === 0) {
    prev.classList.add("disable");
  }

  if (index === SLIDES.length - 1) {
    next.classList.add("disable");
  }
}

function nextSlide() {
  INDEX++;
  render(INDEX);
  prev.classList.remove("disable");
}

function prevSlide() {
  INDEX--;
  render(INDEX);
  next.classList.remove("disable");
}

// events
window.addEventListener("load", function () {
  render(INDEX);
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
