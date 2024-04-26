// select a dom node
// document methods

function changeTitleStyle() {
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const btn = document.querySelector("button")
  title.style.color = "red";
  desc.style.color = "red";
  title.textContent = "HELLO JS!!!"
  btn.textContent = "changed!!!"
}
