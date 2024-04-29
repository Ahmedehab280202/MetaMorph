package com.meta.faculty;

import com.meta.student.*;
import com.meta.staff.*;
import com.meta.professor.*;
import java.util.UUID;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import java.util.ArrayList;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Faculty  {
    @Id
    @GeneratedValue
    private UUID id;
    
    public String name;
    @JdbcTypeCode(SqlTypes.JSON)
    public ArrayList<Student> students;
    @JdbcTypeCode(SqlTypes.JSON)
    public ArrayList<Staff> staff;
    @JdbcTypeCode(SqlTypes.JSON)
    public ArrayList<Professor> professors;

    public Faculty() {
    }
    public Faculty(String name)  {
      
      this.name = name;
      
    }
    public String getName() {
      return name;
    }
    public ArrayList<Student> getStudents() {
      return students;
    }
    public ArrayList<Staff> getStaff() {
      return staff;
    }
    public ArrayList<Professor> getProfessors() {
      return professors;
    }

    public void setName(String name) {
      this.name = name;
    }
    public void setStudents(ArrayList<Student> students) {
      this.students = students;
    }
    public void setStaff(ArrayList<Staff> staff) {
      this.staff = staff;
    }
    public void setProfessors(ArrayList<Professor> professors) {
      this.professors = professors;
    }


}