export class RegisterModel {
    constructor(firstname, lastname, email, username, password, age, phonenumber, job) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.age = age;
        this.phonenumber = phonenumber;
        this.job = job;
        this.password = password;

    }
}

export class LoginModel {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}