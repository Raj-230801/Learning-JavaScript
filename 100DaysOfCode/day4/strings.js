const name = "raj"
const repoCount = 50

// console.log(nmae+reapoCount + "value");

console.log(`hello my name is ${name}and my repo count is${repoCount}`)

const gameName = new String(`rajs-jhs`)

console.log(gameName[0]);
// console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('s'))

const newString = gameName.substring(0,4)
console.log(newString)

const newString1 = gameName.slice(1,4)
console.log(newString1);

const newString2 = "  rajz   ";
console.log(newString2.trim())

const url= "raj-230801.github.io/TimeTable/#MONDAY"
console.log(url.replace('/#MONDAY','/'))

console.log(url.includes('rajk')) //for checking a word in a string

console.log(gameName.split('-'))



