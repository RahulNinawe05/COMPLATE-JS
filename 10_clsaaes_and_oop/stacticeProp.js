
// const { use } = require("react");

class User {
    constructor(Username){
        this.Username = Username
    }

    logme(){
        console.log(`username:${this.Username}`);
        
    }

    static createId(){  
        return `2123`
    }
}

const rahul =new User("raherrul")
console.log(User.createId());



class Teacher extends User {
    constructor(Username, email){
        super(Username)
        this.email =email
    }
}

const  iphone = new Teacher("iphone", "igaso@com")
// console.log(iphone.createId()); // this is not  work becouse iphone is 
iphone.logme()
