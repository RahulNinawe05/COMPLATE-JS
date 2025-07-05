// this keyword currunt contax hii

const user = {
    username: "Rahul",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to Website`);
        // console.log(this);

    }

}

user.welcomeMessage()
user.username = "Sam"   // use only "this" line no 8
user.welcomeMessage()       // use only "this" line no 8

console.log(this);

function chai() {
    const username = "Rahul"
    console.log(this.username);     //undefined becouse this is use in object not a function 

}
// chai()

const chai = function () {
    const username = "Rahul"         //undefined becouse this is use in object not a function 
    console.log(this.username);
}
// chai()


const chai = () => {
    const username = "Rahul"         
    // console.log(this.username);
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2


/* agar {} isame likha to return likhana padega but
   () iseme likha to return nahi likhana padega */


// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => {username: "Rahul"}  //undefined


// console.log(addTwo(3, 5));
