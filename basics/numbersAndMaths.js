const score = 400
console.log(score);

const balance = new Number (100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 552.809809
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-AM')); //en-AM for american standerd 


//Maths

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.3));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

//+++++++++++++++++++++++++++++++++++++

console.log(Math.random()) //gives a random number between 0 and 1
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1);//added +1 in the end cause when we get number like 0.01 then it would not give us a zero

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)