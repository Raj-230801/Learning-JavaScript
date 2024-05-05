let a = Number(prompt("enter first number"));
let b = prompt("enter operator");
let c = Number(prompt("Enter second number"));

let n = Math.random();
if (n > 0.1) {
  if (b == "+") {
    r = a + c;
    console.log(r);
  }
  if (b == "-") {
    r = a - c;
    console.log(r);
  }
  if (b == "*") {
    r = a * c;
    console.log(r);
  }
  if (b == "/") {
    r = a / c;
    console.log(r);
  }
} 

else {
  if (b == "+") {
    r = a - c;
    console.log(r);
  }
  if (b == "-") {
    r = a / c;
    console.log(r);
  }
  if (b == "*") {
    r = a + c;
    console.log(r);
  }
  if (b == "/") {
    r = a * c;
    console.log(r);
  }
}
