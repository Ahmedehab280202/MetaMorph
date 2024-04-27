package com.meta.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
public class Staff extends Person{
    @Id
    @GeneratedValue
    private UUID id;
    public String position;



    public Staff() {
    }    public Staff(String position, String name, String gender, String phone_number) {
      super(name,gender,phone_number)
      this.position = position
    }

    public String getPosition() {
      return position;
    }


    public void setPosition(String position) {
      this.position = position;
    }

}