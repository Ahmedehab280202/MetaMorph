package com.meta.course;

import com.meta.lecture.*;
import com.meta.student.*;
import java.util.UUID;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import java.util.ArrayList;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Course  {
    @Id
    @GeneratedValue
    private UUID id;
    
    public String name;
    
    public String code;
    
    public int credit_hours;
    @JdbcTypeCode(SqlTypes.JSON)
    public ArrayList<Lecture> lectures;

    public Course() {
    }
    public Course(String name, String code, int credit_hours)  {
      
      this.name = name;
      this.code = code;
      this.credit_hours = credit_hours;
      this.lectures = new ArrayList<Lecture>();
    }
    public String getName() {
      return name;
    }
    public String getCode() {
      return code;
    }
    public int getCredit_hours() {
      return credit_hours;
    }
    public ArrayList<Lecture> getLectures() {
      return lectures;
    }

    public void setName(String name) {
      this.name = name;
    }
    public void setCode(String code) {
      this.code = code;
    }
    public void setCredit_hours(int credit_hours) {
      this.credit_hours = credit_hours;
    }
    public void setLectures(ArrayList<Lecture> lectures) {
      this.lectures = lectures;
    }


}