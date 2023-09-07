// singleton
// object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name : "Sam",
    "full name" : "Sanket Ram",
    [mySym] : "mykey1",
    age : 18,
    location : "Mumbai",
    email : "sam@google.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "sam@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "sam@jpmorgan.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())