// # primitive 

// 7 types: String, Number, Boolean , Null , undefined, symbol, BigInt

const score = 100
const scorevalue = 100.4


const IsLoggedIn = false
const outsideTemp = null
let username;

const id = Symbol('2234')
const anatherid = Symbol('2234')

// console.log(id === anatherid);


const bigNumber = 345520203707032072098309n


// No Primitive or (Reference) data type is always function 

// ********************Array, objects, functions,*****************

// Array

const heros = ["shakatiman", "nagarjun", "rahul"]


// objects
{
    name: "Rahul"
    age : 24
}


// functions
const MyFunction = function(){
    // console.log("hellow word");
    
}

// console.log(typeof heros);
// console.log(typeof bigNumber);
// console.log(typeof username);
// console.log(typeof MyFunction);



// *************************** Memory *************************//


// stack (Primitive) , heap (Non-Primitive)

// stack() (Fast & Organized)
let MyYouTubename = "rahulninaweyt.com"

let anathername = MyYouTubename
anathername = "YourYouTubename"


console.log(MyYouTubename);
console.log(anathername);


// heap (Flexible & Larger)
let userone = {
    email : "ninawerahul34@gmail.com",
    upi : "user1"
}

let usertwo = userone

usertwo.email = "rahul@google.com"

console.log(userone.email);
console.log(usertwo.email);
