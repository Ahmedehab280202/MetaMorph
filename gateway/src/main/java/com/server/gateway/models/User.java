package com.server.gateway.models;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "User_table")
public class User {
    
    @Valid

    @Id
    // @GeneratedValue(generator = "UUID")//universal uni
    // @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    // @Column(name="first_name")
    // @NotBlank(message = "first_name is mandatory")
    // @NotNull(message = "first_name is mandatory")
    // @Size(min = 7, max = 50, message = "the minimum amount of charachters in first_name attribute is 7 !")
    // private String first_name;

    // @Column(name="last_name")
    // @NotBlank(message = "last_name is mandatory")
    // @NotNull(message = "last_name is mandatory")
    // @Size(min = 7, max = 50, message = "the minimum amount of charachters in last_name attribute is 7 !")
    // private String last_name;

    // @Column(name="email")
    // @NotBlank(message = "email is mandatory")
    // @NotNull(message = "email is mandatory")
    // @Size(min = 7, max = 50, message = "the minimum amount of charachters in email attribute is 7 !")
    // private String email;

    @Column(name="username", unique = true)
    // @NotBlank(message = "user_name is mandatory")
    // @NotNull(message = "user_name is mandatory")
    // @Size(min = 7, max = 50, message = "the minimum amount of charachters in user_name attribute is 7 !")
    private String username;

    @Column(name="password")
    // @NotBlank(message = "password is mandatory")
    // @NotNull(message = "password is mandatory")
    // @Size(min = 7, max = 50, message = "the minimum amount of charachters in password attribute is 7 !")
    private String password;


    public User() {
    }

    public User(String id,/*  String first_name, String last_name, String email,*/ String username, String password) {
        this.id = id;
        // this.first_name = first_name;
        // this.last_name = last_name;
        // this.email = email;
        this.username = username;
        this.password = password;
    }


    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    // public String getFirst_name() {
    //     return this.first_name;
    // }

    // public void setFirst_name(String first_name) {
    //     this.first_name = first_name;
    // }

    // public String getLast_name() {
    //     return this.last_name;
    // }

    // public void setLast_name(String last_name) {
    //     this.last_name = last_name;
    // }

    // public String getEmail() {
    //     return this.email;
    // }

    // public void setEmail(String email) {
    //     this.email = email;
    // }

    public String getusername() {
        return this.username;
    }

    public void setusername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}

// feh haga felapi request 3naha haga esmaha header, data magwgoda fl request momken a7ot feha metadata 3an elrequest nafso.
// elrequest gy mnen, elrequest dah eltype bta3o, welahm momken a7ot feh haga a3raf beha eluser dah men bzabt elhya json web token (jwt)
// hya 3obara 3an token, data 3an eluser incoded algorithm aw secret key,

// tyb ana lama bagy ashfar data bst5dam eljwt mbab2ash 3ayez law 3mal decode yzhar data zy elusername zy ali aw id zy 1
//fa bnst5dem eluuid -> id mokwan men 36 charachter random.

//bas dah mesh kfaya lazem kman a applay blocks code ka filters,
//awel block of code authentication filter checkif the jwt is valid , ba3d keda authorization filter law saheb eljwt deh authorized eno y5osh yaccess eldata zy law admin yshof law la2 myshofsh.

//yala nbda2
//awel haga n5aly elid string 3shan y2bal eluuid
//lama eluser yigi y7ot elpassword yt3melha hashing
//3yzen n3mel service ncreate jwt 3an tare2 enaha tst2bel uuid bn3raf elalgorithm wel secret key wtrga3 elid bta3 eluser elstored 

//3yzen n3mel hwar elfilters, 3shan a2fel api's, leladmins elusers el3adyen mslan.



