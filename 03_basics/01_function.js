// console.log("R");
// console.log("A");
// console.log("H");
// console.log("U");
// console.log("L");

// const { use } = require("react");

// *******************function defination************************

// function sayMyName() {
//     console.log("R");
//     console.log("A");
//     console.log("H");
//     console.log("U");
//     console.log("L");
// }
// sayMyName()

// practice**************************
// function getuser(name){
//     let mESSAGE = "HELLO,"+ name + "!"
//     console.log(mESSAGE);
// }
// getuser(8)


function gotIt(name) {
    let friend = ["rahul", "pratik", "RAju", "satish"]

    if (friend.includes(name.toLowerCase())) {
        return name + name.length + " this is your friend"
    } else {
        return name + name.length + " is not Your friend"
    }
}

// console.log(gotIt("rajiv"));
// console.log(gotIt("pratik"));

function go(name) {
    let gone = {
        a: 44,
        b: 45,
        c: 9,
        d: 48
    }

    if (name in gone) {
        return "yes this is a inclue"
    } else {
        return "no this is not inclde"
    }
}
// const goon = go("r")
// console.log(goon);

function use(name) {
    console.log("going to front me");
    function useme(loogin) {
        return "yes loolged in "
    }
    let dat2 = useme("rahul")
    console.log(dat2);

}
// let dat = use("raju")
// console.log(dat);

function rahu(number) {
    let i = 0
    for (i = 0; i <= 10; i++) {
        if (i == 7) {
            console.log(i + " this is my birth Mounth");
        }
        else {
            console.log("i = " + i);
        }
    }
}
// rahu()

function whilo(num) {
    let x = 0
    while (x < num) {
        console.log(`${x} this is a while loop ${x}`);
        x++
    }
}
// whilo(101)
// ****************


function addTwoNumber(num1, num2) {
    // console.log(num1 + num2);
}
// const result = addTwoNumber(3, 5) // doen't store
// console.log(result); // becouse doen't return



function addTwoNumber(num1, num2) {
    let result = num1 + num2
    return result // isake bad kucha bhi print nahi hota hii
    // console.log("Rahul"); // doen't print becouse below of return
    // return num1 + num2
}
const result = addTwoNumber(3, 5)
// console.log("Result ", result);


function loginUserMessage(username = "Sam") {
    if (username === undefined) {
        console.log("please enter a Username");
        return
    }
    return `${username} Just logged in `
}
loginUserMessage("Rahul")
// console.log(loginUserMessage("Rahul"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());


// ******************new*************************


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(2, 300, 299,2003,2899693, 499669269));

const user = {
    username: "Rahul",
    Price: 199
}
function handleObject(anyobject) {
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`);
}
handleObject(user)
// console.log(user);

// handleObject({
//     username: "Sam",
//     Price: 399
// })

const myNewArray = [200, 300, 400, 500]
function returnsecondvlaue(getArray) {
    return getArray[2]
}
// console.log(returnsecondvlaue(myNewArray));
// console.log(returnsecondvlaue( [200, 300, 400, 500]));


