export class RegisterModel {
    constructor(firstname, lastname, email, username, password) {
        firstname = this.firstname;
        lastname = this.lastname;
        email = this.email;
        username = this.username;
        password = this.password;
    }
}

export class LoginModel {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}