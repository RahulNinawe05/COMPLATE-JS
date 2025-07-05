// const { use } = require("react")

// const user = {
//     UseName: "Rahul",
//     LoggedIn: "6",
//     SignedIn: "true",

//    getuserDeatils: function () {
//         // console.log("Got use detailsd");
//         // console.log(`username : ${this.UseName}`);
//         // console.log(this);
        
//     }
// }

// // console.log(user.UseName);
// // console.log(user.getuserDeatils());
// // console.log(this);  // this is globel 

// //constructure
// function User(username, loggidIn , isLoggedIN){
//     this.username= "username"
//     this.loggidIn = "loggidIn"
//     this.isLoggedIN= "isLoggedIN"

//     return this
// }

// const userOne = new User("rahul",23, true)
// const usertwo = new User("chai aur code", 45, false)
// console.log(usertwo);
// // new empty object create 
// // constructor call
// // enject hata hi

// Constructor Function
function Employee(name, id, department, position) {
    this.name = name;
    this.id = id;
    this.department = department;
    this.position = position;

    this.getDetails = function () {
        console.log(`ID: ${this.id}, Name: ${this.name}, Dept: ${this.department}, Position: ${this.position}`);
    };

    this.promote = function (newPosition) {
        this.position = newPosition;
        console.log(`${this.name} has been promoted to ${this.position}`);
    };
}

// Creating employee objects
const emp1 = new Employee("Rahul Sharma", 101, "Engineering", "Software Developer");
const emp2 = new Employee("Priya Mehta", 102, "HR", "HR Executive");

// Display employee details
emp1.getDetails();  // ID: 101, Name: Rahul Sharma, Dept: Engineering, Position: Software Developer
emp2.getDetails();  // ID: 102, Name: Priya Mehta, Dept: HR, Position: HR Executive

// Promote an employee
emp1.promote("Senior Software Developer");
emp1.getDetails();  // ID: 101, Name: Rahul Sharma, Dept: Engineering, Position: Senior Software Developer
