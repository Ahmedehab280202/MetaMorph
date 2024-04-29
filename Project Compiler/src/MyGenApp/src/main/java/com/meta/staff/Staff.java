package com.meta.staff;
import com.meta.person.*;
import com.meta.faculty.*;
import java.util.UUID;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import java.util.ArrayList;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Staff extends Person{
    @Id
    @GeneratedValue
    private UUID id;
    
    public String position;

    public Staff() {
    }
    public Staff(String position, String name, String gender, String phone_number)  {
      super(name,gender,phone_number);
      this.position = position;
      
    }
    public String getPosition() {
      return position;
    }

    public void setPosition(String position) {
      this.position = position;
    }


}