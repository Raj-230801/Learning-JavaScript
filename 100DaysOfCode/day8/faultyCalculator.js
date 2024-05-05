//tip: for changing all the same word without selecting them individualy We can use command "ctrl+shift+l"
let a = Number(prompt("enter first number"));
let b = prompt("enter operator");
let c = Number(prompt("Enter second number"));

let n = Math.random();
if (n > 0.1) {
  if (b == "+") {
    r = a + c;
    alert(`result is ${r}`);
  }
  if (b == "-") {
    r = a - c;
    alert(`result is ${r}`);
  }
  if (b == "*") {
    r = a * c;
    alert(`result is ${r}`);
  }
  if (b == "/") {
    r = a / c;
    alert(`result is ${r}`);
  }
} 

else {
  if (b == "+") {
    r = a - c;
    alert(`result is ${r}`);
  }
  if (b == "-") {
    r = a / c;
    alert(`result is ${r}`);
  }
  if (b == "*") {
    r = a + c;
    alert(`result is ${r}`);
  }
  if (b == "/") {
    r = a * c;
    alert(`result is ${r}`);
  }
}


 //++++++++++++++++ Other way+++++++++++++++

// let a = Number(prompt("enter first number"));
// let b = prompt("enter operator");
// let c = Number(prompt("Enter second number"));

// let n = Math.random();

// let obj = {
//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"*",
// }
// if(n>0.1){
//     alert(`The result is ${eval(`${a} ${b} ${c}`)}\nand value of random is${n}`)
// }
// else{
//     alert(`The result is ${eval(`${a} ${b} ${c}\nand value of random is${n}`)}`)
// }

























