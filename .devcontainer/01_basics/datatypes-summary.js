// Primitive

// 7 types : String, NUmber, Boolean, null, undefined, Symbol, BigInt

const score = 100;  // dty = number
const scoreValue = 100.3; // dty = number 


const isLoggedIn = false // dty = boolean
const OutsideTemp = null // dty = object
let userEmail;

const id = Symbol("123") // dty = Symbol
const anotherId = Symbol("123") // dty = Symbol

// console.log(id === anotherId)

const bigNumber = 345347964560224245242n // dty = bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","nagraj","doga"] // dty = object
let myObj= { // object
    name : "Sam",
    age : 18,
}

const myFunction = function(){  // dty = object function
    console.log("Hello World");
}

console.log(typeof myObj)