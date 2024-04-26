function handleCounter(status) {
  const h2 = document.querySelector("h2");
  const count = h2.textContent;
  switch (status) {
    case "ADD":
      h2.textContent = +count + 1;
      checkCount(count)
      break;

    case "MINUS":
      h2.textContent = +count - 1;
      checkCount(count)
      break;

    case "ODD":
      h2.textContent = (count%2 ===1) ?  +count + 1 : count
      checkCount(count)
      break;
  }
}

function checkCount(count) {
  const h2 = document.querySelector("h2");
    if( count >= 0 && count < 5) {
        h2.style.color = "green"
        return
    }

    if(count > 8) {
        h2.style.color = "red"
        return

    }

    h2.style.color = "yellow"
    
}
