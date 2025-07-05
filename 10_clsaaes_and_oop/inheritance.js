// const { use } = require("react");

class User{
    constructor(Username){
        this.Username = Username
        
    }
    logme(){
        console.log(`USERNAME is ${this.Username}`);
    }
}

class Teacher extends User{
    constructor(Username, email, Password){
        super(Username)
        
        this.email =email
        this.Password = Password
    }

    addCourse(){
        console.log(`a new course was added by ${this.Username}`);
    }

}

const chai =new Teacher("chai", "chai@gamilcom", "3926")
// chai.addCourse()
// const masalaChai = new User ("MasalaChai")
// masalaChai.logme()

// console.log(Teacher instanceof User);
