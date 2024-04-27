package com.meta.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
public class Student extends Person{
    @Id
    @GeneratedValue
    private UUID id;
    public String code;
    public Faculty faculty;
    public Array<Course> courses;


    public Student() {
    }

    public Student(String code, Faculty faculty, Array<Course> courses, String name, String gender, String phone_number) {
      super(name,gender,phone_number)
      this.code = code
      this.faculty = faculty
      this.courses = courses
    }


    public String getCode() {
      return code;
    }
    public Faculty getFaculty() {
      return faculty;
    }
    public Array<Course> getCourses() {
      return courses;
    }


    public void setCode(String code) {
      this.code = code;
    }
    public void setFaculty(Faculty faculty) {
      this.faculty = faculty;
    }
    public void setCourses(Array<Course> courses) {
      this.courses = courses;
    }

}