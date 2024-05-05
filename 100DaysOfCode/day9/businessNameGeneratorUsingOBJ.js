let obj1 = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire",
};
let obj2 = {
  1: "Engine",
  2: "Foods",
  3: "Garments",
};
let obj3 = {
  1: "Bros",
  2: "Limited",
  3: "Hub",
};

let ran1 = Math.floor(Math.random() * 3) + 1;
let ran2 = Math.floor(Math.random() * 3) + 1;
let ran3 = Math.floor(Math.random() * 3) + 1;

console.log(`generated name is ${obj1[ran1]} ${obj2[ran2]} ${obj3[ran3]}`);
