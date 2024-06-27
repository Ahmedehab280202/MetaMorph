package com.server.gateway.models;

import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
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
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name = "firstname")
    @NotBlank(message = "firstname is mandatory")
    @NotNull(message = "firstname is mandatory")
    @Size(min = 3, max = 50, message = "the minimum amount of charachters in firstname attribute is 7 !")
    private String firstname;

    @Column(name = "lastname")
    @NotBlank(message = "lastname is mandatory")
    @NotNull(message = "lastname is mandatory")
    @Size(min = 3, max = 50, message = "the minimum amount of charachters in lastname attribute is 7 !")
    private String lastname;

    @Column(name = "email")
    @NotBlank(message = "email is mandatory")
    @NotNull(message = "email is mandatory")
    @Size(min = 11, max = 50, message = "the minimum amount of charachters in email attribute is 7 !")
    private String email;

    @Column(name = "username", unique = true)
    @NotBlank(message = "user_name is mandatory")
    @NotNull(message = "user_name is mandatory")
    @Size(min = 3, max = 50, message = "the minimum amount of charachters in user_name attribute is 7 !")
    private String username;

    @Column(name = "password")
    @NotBlank(message = "password is mandatory")
    private String password;

    @Column(name = "age")
    private int age;

    @Column(name = "phonenumber")
    private int phonenumber;

    @Column(name = "job")
    @NotBlank(message = "job is mandatory")
    private String job;

    @OneToMany(mappedBy = "dataOwner",  cascade = CascadeType.REMOVE, orphanRemoval = true)
    List<MetaData> user_data;

    public int getMetadataCount() {
        return this.user_data != null ? this.user_data.size() : 0;
    }

    public User() {
    }

    public User(String id, String firstname, String lastname, String email, String username, String password, int age, int phonenumber, String job, List<MetaData> user_data) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.age = age;
        this.phonenumber = phonenumber;
        this.job = job;
        this.user_data = user_data;
    }
   

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstname() {
        return this.firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return this.lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getPhonenumber() {
        return this.phonenumber;
    }

    public void setPhonenumber(int phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getJob() {
        return this.job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public List<MetaData> getUser_data() {
        return this.user_data;
    }

    public void setUser_data(List<MetaData> user_data) {
        this.user_data = user_data;
    }


}

// feh haga felapi request 3naha haga esmaha header, data magwgoda fl request
// momken a7ot feha metadata 3an elrequest nafso.
// elrequest gy mnen, elrequest dah eltype bta3o, welahm momken a7ot feh haga
// a3raf beha eluser dah men bzabt elhya json web token (jwt)
// hya 3obara 3an token, data 3an eluser incoded algorithm aw secret key,

// tyb ana lama bagy ashfar data bst5dam eljwt mbab2ash 3ayez law 3mal decode
// yzhar data zy elusername zy ali aw id zy 1
// fa bnst5dem eluuid -> id mokwan men 36 charachter random.

// bas dah mesh kfaya lazem kman a applay blocks code ka filters,
// awel block of code authentication filter checkif the jwt is valid , ba3d keda
// authorization filter law saheb eljwt deh authorized eno y5osh yaccess eldata
// zy law admin yshof law la2 myshofsh.

// yala nbda2
// awel haga n5aly elid string 3shan y2bal eluuid
// lama eluser yigi y7ot elpassword yt3melha hashing
// 3yzen n3mel service ncreate jwt 3an tare2 enaha tst2bel uuid bn3raf
// elalgorithm wel secret key wtrga3 elid bta3 eluser elstored

// 3yzen n3mel hwar elfilters, 3shan a2fel api's, leladmins elusers el3adyen
// mslan.