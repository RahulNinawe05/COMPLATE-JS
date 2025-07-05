/*don't use any oparetore like <, >, ==, etc 
they  are Asume it
*/

// const userEmail = "rahul@.si"
// // const userEmail = []
// // const userEmail =function(){}

// if (userEmail) {
//     console.log("got user email");
// }
// else {
//     console.log("don't have user email");
// }

/* folsy values =

false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values =

"0", 'false', " ", [], {}, function(){}

*/

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyobj =""

// if (Object.keys(emptyobj).length === 0) {
//     console.log("object is empty");
// }
// else{
//     console.log("object is not empty");    
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ??20
console.log(val1);


// Terniary Opetator

// condition/ true : false

const IcePrice = 100
IcePrice <= 80 ? console.log("less than 80"): console.log("MORE THAN 80");

