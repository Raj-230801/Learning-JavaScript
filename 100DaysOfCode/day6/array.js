//array

const myArr = [0,1,2,3,4]
const myHero = ["ironMan","flash","hulk"]
const newArr = new Array(2,4,5,7)

// console.log(myHero)

myArr.push(8,6,8,3,2,3,86,33,78) //for adding elements in array
myArr.pop()//for removing last element of an Array
// console.log(myArr)

myArr.unshift(33)//for shifting a value in the begining
myArr.shift()//remove the first element of an array
// console.log(myArr)

// console.log(myArr.includes(33))
// console.log(myArr.indexOf(86))
// console.log(myArr)

// const newArr1 = myArr.join()
// console.log(newArr1)
// console.log( typeof newArr1)

//+++++++++ Splice Slice++++++++++++++++++++++++

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
// console.log(myn1)

console.log("B",myArr)
const myn2 = myArr.splice(1,3)
console.log(myn1)
console.log(myn2) 
console.log("c",myArr)

