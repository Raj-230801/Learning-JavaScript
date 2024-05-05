let r1 = Math.random();
let r2 = Math.random();
let r3 = Math.random();

let adj1 = "crazy";
let adj2 = "amazing";
let adj3 = "fire";

let shop1 = "Engine";
let shop2 = "Foods";
let shop3 = "Garments";

let another1 = "Bros";
let another2 = "Limited";
let another3 = "Hub";

function generator(a, b, c, d) {
//   console.log(`${a}${b}${c}${f}`);
  if (a < 0.3) {
    return b;
  }
  if (a > 0.6) {
    return c;
  }
  //   if (a > 0.3 && a < 0.6)
  else {
    return d;
  }
  //   return real;
}

let p = generator(r1, adj1, adj2, adj3);
let q = generator(r2, shop1, shop2, shop3);
let r = generator(r3, another1, another2, another3);

console.log(`generated business ane is ${p} ${q} ${r}`);
