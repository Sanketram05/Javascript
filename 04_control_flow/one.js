// IF
const isUserLoggedIn = true
const temp = 32

// if (temp === 32){
//     console.log("temp is mid")
// } else{
//     console.log("temp is high")
// }

//  <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User power : ${power}`)
// }

const balance = 1000

// if(balance > 500) console.log("test")

// if(balance < 500){
//     console.log("Less than 500")
// } else if(balance < 750){
//     console.log("Less than 500")
// } else if(balance < 900){
//     console.log("Less than 900")
// } else{
//     console.log("Less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged IN")
}