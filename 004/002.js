let a = 10;

// scope

function sayHi() {
  // local variable
  a = 20;
  console.log(a);
}

console.log(a);
sayHi();
