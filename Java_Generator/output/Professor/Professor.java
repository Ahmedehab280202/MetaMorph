package com.meta.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
public class Professor extends Person{
    @Id
    @GeneratedValue
    private UUID id;
    public String expertise;
    public Faculty faculty;



    public Professor() {
    }    public Professor(String expertise, String name, String gender, String phone_number) {
      super(name,gender,phone_number)
      this.expertise = expertise
    }

    public String getExpertise() {
      return expertise;
    }
    public Faculty getFaculty() {
      return faculty;
    }


    public void setExpertise(String expertise) {
      this.expertise = expertise;
    }
    public void setFaculty(Faculty faculty) {
      this.faculty = faculty;
    }

}