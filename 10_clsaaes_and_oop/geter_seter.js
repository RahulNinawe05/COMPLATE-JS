class User {
    constructor(email, password) {
        this.email = email,
            this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}rahul`
    }

    set password(value) {
        this._password = value
    }
}

const rahul = new User('ninawera@gi', "yjpspo")
console.log(rahul.password);
console.log(rahul.email);
