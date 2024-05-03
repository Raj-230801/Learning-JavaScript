//singleton
//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "raj",
    "fullName": "rajAnand",
    [mySym] : "myKey1", //symbol
    age:20,
    location: "jaipur",
    email: "raj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monady","saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["fullName"])
console.log( jsUser[mySym])

jsUser["email"] = 'sourav@gmail.com'
// Object.freeze(jsUser)
jsUser["email"] = 'sou@gmail.com'
console.log(jsUser)

jsUser.greeting = function(){
    console.log(`hello  js user`)
}
jsUser.greeting1 = function(){
    console.log(`hello  js user ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting1())













