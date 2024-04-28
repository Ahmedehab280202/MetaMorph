package com.meta.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
public class Lecture  {
    @Id
    @GeneratedValue
    private UUID id;
    public String start_time;
    public String end_time;
    public String day_of_week;
    public String room;
    public Professor instructor;

    public Lecture() {
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