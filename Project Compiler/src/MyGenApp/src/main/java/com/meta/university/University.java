package com.meta.university;

import com.meta.faculty.*;
import java.util.UUID;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import java.util.ArrayList;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class University  {
    @Id
    @GeneratedValue
    private UUID id;
    
    public String name;
    @JdbcTypeCode(SqlTypes.JSON)
    public ArrayList<Faculty> faculties;

    public University() {
    }
    public University(String name, ArrayList<Faculty> faculties)  {
      
      this.name = name;
      this.faculties = faculties;
      
    }
    public String getName() {
      return name;
    }
    public ArrayList<Faculty> getFaculties() {
      return faculties;
    }

    public void setName(String name) {
      this.name = name;
    }
    public void setFaculties(ArrayList<Faculty> faculties) {
      this.faculties = faculties;
    }


}