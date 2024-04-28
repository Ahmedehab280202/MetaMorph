package com.meta.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
public class WrittenExam implements Exam{
    @Id
    @GeneratedValue
    private UUID id;
    
    public WrittenExam() {
    }


    public  calcGrade() {
      // Implement here...
    }
}