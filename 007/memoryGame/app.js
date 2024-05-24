// dom nodes
let boxes = document.querySelectorAll("div");
boxes = shuffle([...boxes])
const secction = document.querySelector("section");

for (const box of boxes) {
  secction.appendChild(box)
}
const OPEN_CARDS = [];
let counter = 0;


// funtions
function showCard(event) {
  event.target.classList.add("show");
  OPEN_CARDS.push(event.target);
  if(OPEN_CARDS.length === 2) {
    if(OPEN_CARDS[0].innerHTML === OPEN_CARDS[1].innerHTML) {
      matchCards()
    } else {
      unmatchedCards()
    }
  }
}

function matchCards() {
  OPEN_CARDS[0].classList.add("matched")
  OPEN_CARDS[1].classList.add("matched");
  OPEN_CARDS.length = 0;
  counter++;
  if(counter === 8) {
    console.log("CONGRADULATION")
  }
}

function unmatchedCards() {
  OPEN_CARDS[0].classList.add("unmatched")
  OPEN_CARDS[1].classList.add("unmatched");

  setTimeout(function(){
    OPEN_CARDS[0].classList.remove("show")
    OPEN_CARDS[1].classList.remove("show");
    OPEN_CARDS[0].classList.remove("unmatched")
    OPEN_CARDS[1].classList.remove("unmatched");
    OPEN_CARDS.length = 0;
  }, 1000);
 
 
}

// events
for (const box of boxes) {
  box.addEventListener("click", showCard);
}

