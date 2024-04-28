package com.meta.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
public class Faculty  {
    @Id
    @GeneratedValue
    private UUID id;
    public String name;
    public Array<Student> students;
    public Array<Staff> staff;
    public Array<Staff> professors;

    public Faculty() {
    }
    public String getName() {
      return name;
    }
    public Array<Student> getStudents() {
      return students;
    }
    public Array<Staff> getStaff() {
      return staff;
    }
    public Array<Staff> getProfessors() {
      return professors;
    }

    public void setName(String name) {
      this.name = name;
    }
    public void setStudents(Array<Student> students) {
      this.students = students;
    }
    public void setStaff(Array<Staff> staff) {
      this.staff = staff;
    }
    public void setProfessors(Array<Staff> professors) {
      this.professors = professors;
    }


}