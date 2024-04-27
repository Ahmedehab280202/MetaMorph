package com.meta.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
public class ComputerizedExam implements Exam{
    @Id
    @GeneratedValue
    private UUID id;
    


    public ComputerizedExam() {
    }




}