package com.meta.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
public class Person {
    @Id
    @GeneratedValue
    private UUID id;
    public String name;
    public String gender;
    public String phone_number;



    public Person() {
    }    public Person(String name, String gender, String phone_number) {
      
      this.name = name
      this.gender = gender
      this.phone_number = phone_number
    }

    public String getName() {
      return name;
    }
    public String getGender() {
      return gender;
    }
    public String getPhone_number() {
      return phone_number;
    }


    public void setName(String name) {
      this.name = name;
    }
    public void setGender(String gender) {
      this.gender = gender;
    }
    public void setPhone_number(String phone_number) {
      this.phone_number = phone_number;
    }

}