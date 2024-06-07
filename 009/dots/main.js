document.querySelector(".btn").addEventListener("click", () => {
  //Your Code
  const value = document.querySelector(".input").value;
  const arr = value.split("");
  let sum = 0;
  arr.forEach((char) => {
    if (Number(obj[char])) {
     sum += Number(obj[char]);
    }
  });

  document.querySelector(".result").textContent = sum;
});
