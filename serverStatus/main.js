let flag = true;


function toggleServer() {
    debugger;
  // select dom nodes
  const description = document.querySelector("p");
  const btn = document.querySelector("button");

  if (btn.textContent === "Start Server") {
    // start sever
    description.textContent = "Server is Running...";
    description.style.color = "green";
    btn.textContent = "Stop Server";
    // flag = false;
  } else {
    // stop sever
    description.textContent = "Server is Stopped!";
    description.style.color = "red";
    btn.textContent = "Start Server";
    // flag = true;
  }
}
