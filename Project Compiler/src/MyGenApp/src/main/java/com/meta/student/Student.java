package com.meta.student;
import com.meta.person.*;
import com.meta.faculty.*;
import com.meta.course.*;
import java.util.UUID;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import java.util.ArrayList;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Student extends Person{
    @Id
    @GeneratedValue
    private UUID id;
    
    public String code;
    @JdbcTypeCode(SqlTypes.JSON)
    public Faculty faculty;
    @JdbcTypeCode(SqlTypes.JSON)
    public ArrayList<Course> courses;

    public Student() {
    }
    public Student(String code, String name, String gender, String phone_number)  {
      super(name,gender,phone_number);
      this.code = code;
      
    }
    public String getCode() {
      return code;
    }
    public Faculty getFaculty() {
      return faculty;
    }
    public ArrayList<Course> getCourses() {
      return courses;
    }

    public void setCode(String code) {
      this.code = code;
    }
    public void setFaculty(Faculty faculty) {
      this.faculty = faculty;
    }
    public void setCourses(ArrayList<Course> courses) {
      this.courses = courses;
    }


}