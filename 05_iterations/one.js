// FOR

// for(let i = 0;i <= 10; i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 is the element")
//     }
//     console.log(element)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for(let j=0; j <= 10; j++){
//         // console.log(`Inner Loop value ${j} and inner loop ${i}`)
//         console.log(i + '*' + j + ' = ' + i*j)
//     }
    
// }

let myArray = ["flash","batman","superman"]

for(let i=0; i<myArray.length; i++){
    // console.log(myArray[i])
}

// break and continue

for(let i=0; i<= 20; i++){
    if(i == 5){
        console.log(`Detected 5`)
        break
    }
    console.log(i)
}