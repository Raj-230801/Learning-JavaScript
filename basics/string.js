const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //best way to concatinate strings

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]); //for accesing value at 0th position
console.log(gameName.__proto__);//idk


console.log(gameName.length);// for length
console.log(gameName.toUpperCase());//as name says, for converting to uppercase
console.log(gameName.charAt(0));//for accesing value using position
console.log(gameName.indexOf('t'));//for accesing position using value or alphabet

const newString = gameName.substring(0, 4)
console.log(newString);// printing a part of a string

const anotherString = gameName.slice(1, 4)
console.log(anotherString);// seems similar to string 

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //for removing empty spaces in a string

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))// as name says, for replacing substrings

console.log(url.includes('sundar'))// for searching or checking if these name Or thing is present in string

console.log(gameName.split('-'));//divides the string 