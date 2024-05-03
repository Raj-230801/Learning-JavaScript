const marvelHeroes = ["thor", "ironMan", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes)
// console.log(marvelHeroes[3][2])


//++++++++++++++++++++ concate operator+++++++++++++++
// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)


//+++++++++++++++++++ spread operator (similar to concat)++++++++++++++++
const allNewHeroes = [...marvelHeroes, ...dcHeroes]
console.log(allNewHeroes)

const anotherArr = [1,3,5,6,[2,3,5,6],25,36,76,45,[34,34,87]]
const realArr = anotherArr.flat(Infinity)
console.log(realArr)


console.log(Array.isArray("raj"))
console.log(Array.from('raj'))
console.log(Array.from({name: "raj"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2, score3))
