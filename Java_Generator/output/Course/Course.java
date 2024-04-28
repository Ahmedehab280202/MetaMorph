package com.meta.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
public class Course  {
    @Id
    @GeneratedValue
    private UUID id;
    public String name;
    public String code;
    public Int credit_hours;
    public Array<Lecture> lectures;

    public Course() {
    }
    public String getName() {
      return name;
    }
    public String getCode() {
      return code;
    }
    public Int getCredit_hours() {
      return credit_hours;
    }
    public Array<Lecture> getLectures() {
      return lectures;
    }

    public void setName(String name) {
      this.name = name;
    }
    public void setCode(String code) {
      this.code = code;
    }
    public void setCredit_hours(Int credit_hours) {
      this.credit_hours = credit_hours;
    }
    public void setLectures(Array<Lecture> lectures) {
      this.lectures = lectures;
    }


}