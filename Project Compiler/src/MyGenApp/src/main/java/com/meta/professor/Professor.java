package com.meta.professor;

import com.meta.person.*;
import com.meta.faculty.*;
import com.meta.lecture.*;
import java.util.UUID;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import java.util.ArrayList;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Professor extends Person {
  @Id
  @GeneratedValue
  private UUID id;

  public String expertise;
  @JdbcTypeCode(SqlTypes.JSON)
  public Faculty faculty;

  public Professor() {
  }

  public Professor(String expertise, String name, String gender, String phone_number) {
    super(name, gender, phone_number);
    this.expertise = expertise;

  }

  public String getExpertise() {
    return expertise;
  }

  public Faculty getFaculty() {
    return faculty;
  }

  public void setExpertise(String expertise) {
    this.expertise = expertise;
  }

  public void setFaculty(Faculty faculty) {
    this.faculty = faculty;
  }

}