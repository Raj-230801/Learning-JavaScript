//++++++++++++++++++++ primitive/stack++++++++++++
let name = "raj"
let anothername = name
anothername="anand"

console.log(name)
console.log(anothername)

//+++++++++++++++++++ non-primitive/ heap ++++++++++++++

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "raj@gmail.com"

console.log (userOne.email)
console.log (userTwo.email)

