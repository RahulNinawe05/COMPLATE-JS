// after ES6 

// const { use } = require("react")


class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abcd`
    }

    ChangUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gamil.com", "72369")
console.log(chai.encryptPassword());
console.log(chai.ChangUsername());


// behind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abcd`
}

User.prototype.ChangUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gamil.com", "72369")
console.log(tea.encryptPassword());
console.log(tea.ChangUsername())
