// function SetUsername(username){
//     this.username = username
//     console.log("called");
    
// }

// function createrUser(username, email, password){
//     SetUsername.call(this, username)
    
//     this.email = email
//     this.password = password
// }

// const chai = new createrUser("chai",  "cahi@geamail.com", "2572")
// console.log(chai);


// practice
function notionrahul (the){
    this.YourName = the
    console.log("called");
    
}

function NotionCreatenew(YourName, YourClass, YourBranch ){
    notionrahul.call(this,YourName)

    this.YourClass = YourClass
    this.YourBranch= YourBranch
}


const notionTea = new NotionCreatenew ("rahit", "12thcalss", "ECE") 
console.log(notionTea);

