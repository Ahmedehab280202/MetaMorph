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