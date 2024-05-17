
// dom selection
const mask = document.getElementById("mask")


function handleChange() {
  const value = event.target.value;
  const finded = CITIES.find(city => city.startsWith(value));
  mask.textContent = finded;
}
