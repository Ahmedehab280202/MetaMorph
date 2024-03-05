package com.server.gateway.models;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class User {
    
    @Valid

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @Column(name="first_name")
    @NotBlank(message = "first_name is mandatory")
    @NotNull(message = "first_name is mandatory")
    @Size(min = 7, max = 50, message = "the minimum amount of charachters in first_name attribute is 7 !")
    private String first_name;

    @Column(name="last_name")
    @NotBlank(message = "last_name is mandatory")
    @NotNull(message = "last_name is mandatory")
    @Size(min = 7, max = 50, message = "the minimum amount of charachters in last_name attribute is 7 !")
    private String last_name;

    @Column(name="email")
    @NotBlank(message = "email is mandatory")
    @NotNull(message = "email is mandatory")
    @Size(min = 7, max = 50, message = "the minimum amount of charachters in email attribute is 7 !")
    private String email;

    @Column(name="user_name")
    @NotBlank(message = "user_name is mandatory")
    @NotNull(message = "user_name is mandatory")
    @Size(min = 7, max = 50, message = "the minimum amount of charachters in user_name attribute is 7 !")
    private String user_name;

    @Column(name="password")
    @NotBlank(message = "password is mandatory")
    @NotNull(message = "password is mandatory")
    @Size(min = 7, max = 50, message = "the minimum amount of charachters in password attribute is 7 !")
    private String password;


    public User() {
    }

    public User(String id, String first_name, String last_name, String email, String user_name, String password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.user_name = user_name;
        this.password = password;
    }


    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirst_name() {
        return this.first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return this.last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUser_name() {
        return this.user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
