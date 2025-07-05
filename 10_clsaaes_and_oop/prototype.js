// let myName = "Rahul      "
// let myChai = "cahi      "

// console.log(myName.trim().length);


let Myheros = ["thor", "spider"]

let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
} 

Object.prototype.rahul = function(){
    console.log('rahul is present in all obeject');
}

Array.prototype.heyrahul = function (){
    console.log("rahul say hello");
}

String.prototype.heystring = function(){
    console.log("this is string");
}

heroPower.rahul()
Myheros.rahul()
Myheros.heyrahul()
// // heroPower.heyrahul()


const user ={
    name : rahul,
    email: "rahulgoogle.com"
}

const teacher = {
    makeVideo: true
}

const teacherSupport = {
    isAvalable: false
}

const TAsupport = {
    makeAssigment : "jeassigment",
    fulltime:true,
    // __proto__ : teacherSupport  // this is linked with teachersuppot
}

teacher.__proto__=  user   // dont use it

// moder sytax

Object.setPrototypeOf(teacherSupport, teacher)


let antherUser = "chai aur code"

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`true length is ${this.trim().length}`);
}
antherUser.trueLength()
"rahul".trueLength()
"icetea".trueLength()