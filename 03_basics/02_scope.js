// var c = 300
let a = 300     // globla scope

if (true) {         // block scope
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);

}

// scope means"{}"this is scope
// console.log(a);
// console.log(b);
// console.log(c);

// practice
let b = 500
if (true) {
    let b = 49
    const a = 40
    // console.log(a, b);

}
// ****************


/***********************************NEW***********************************/

//NESTED SCOPE 

function one() {
    const Username = "Rahul"

    function two() {
        const webside = "Youtube"
        // console.log(Username);
    }
    // console.log(webside);

    two()

}
// one()

// practice ************
// nested scope 


function Rahul() {
    const name = "Rahul"
    function Ninawe() {
        const sername = Ninawe
        console.log(sername);
    }
    console.log(name);
    Ninawe()


}
Rahul()



function rahul() {
    const name = "satich"
    function Ninawe() {
        const sername = "Mohite"
        console.log(name);
    }
    // console.log(sername);
    Ninawe()
}
// rahul()

// ************


// if (true) {
//     const Username = "Rahul"
//     if (Username === "Rahul") {
//         const webside = " Youtube"
//         console.log(Username + webside);
//     }
//     console.log(webside);

// }
// console.log(Username);


/* ************************************Intresting*************************************/


// axis
// console.log (addone(5))

function addone(num) {
    return num + 1
}


// console.log (addTwo(5))

// const addTwo = function (num) {
//     return num + 2
//     // // does not axis
// }

// addTwo(5)