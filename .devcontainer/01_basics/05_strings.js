const name = "Sam"
const repoCount = 50

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sam-FC')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("F"));

const newString = gameName.substring(0,4) 
// console.log(newString) 

const anotherString = gameName.slice(-5, 4)
// console.log(anotherString)

const newStringOne = "   SaM   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://google.com/sam%20bruh"
console.log(url.replace("%20","-"));

console.log(url.includes("sam"))

const gameHero = "Sam-fc-Kingdom"
console.log(gameHero.split("-"))