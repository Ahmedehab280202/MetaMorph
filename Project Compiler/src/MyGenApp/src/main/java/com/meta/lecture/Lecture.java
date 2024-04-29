package com.meta.lecture;

import com.meta.professor.*;
import java.util.UUID;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import java.util.ArrayList;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Lecture  {
    @Id
    @GeneratedValue
    private UUID id;
    
    public String start_time;
    
    public String end_time;
    
    public String day_of_week;
    
    public String room;
    @JdbcTypeCode(SqlTypes.JSON)
    public Professor instructor;

    public Lecture() {
    }
    public Lecture(String start_time, String end_time, String day_of_week, String room)  {
      
      this.start_time = start_time;
      this.end_time = end_time;
      this.day_of_week = day_of_week;
      this.room = room;
      
    }
    public String getStart_time() {
      return start_time;
    }
    public String getEnd_time() {
      return end_time;
    }
    public String getDay_of_week() {
      return day_of_week;
    }
    public String getRoom() {
      return room;
    }
    public Professor getInstructor() {
      return instructor;
    }

    public void setStart_time(String start_time) {
      this.start_time = start_time;
    }
    public void setEnd_time(String end_time) {
      this.end_time = end_time;
    }
    public void setDay_of_week(String day_of_week) {
      this.day_of_week = day_of_week;
    }
    public void setRoom(String room) {
      this.room = room;
    }
    public void setInstructor(Professor instructor) {
      this.instructor = instructor;
    }


}