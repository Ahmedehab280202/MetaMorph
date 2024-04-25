export class RegisterModel {
    constructor(firstname, lastname, phonenumber, email, username, password) {
        firstname = this.firstname;
        lastname = this.lastname;
        phonenumber = this.phonenumber;
        email = this.email;
        username = this.username;
        password = this.password;
    }
}

export class LoginModel {
    constructor(username, password) {
        username = this.username;
        password = this.password;
    }
}