package com.meta.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
public class University {
    @Id
    @GeneratedValue
    private UUID id;
    public String name;
    public Array<Faculty> faculties;



    public University() {
    }    public University(String name, Array<Faculty> faculties) {
      
      this.name = name
      this.faculties = faculties
    }

    public String getName() {
      return name;
    }
    public Array<Faculty> getFaculties() {
      return faculties;
    }


    public void setName(String name) {
      this.name = name;
    }
    public void setFaculties(Array<Faculty> faculties) {
      this.faculties = faculties;
    }

}