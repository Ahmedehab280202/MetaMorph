package com.meta.computerizedexam;
import com.meta.exam.*;

import java.util.UUID;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import java.util.ArrayList;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class ComputerizedExam implements Exam{
    @Id
    @GeneratedValue
    private UUID id;
    
    public ComputerizedExam() {
    }


    @Override
    public void calcGrade() {
      // Implement here...
    }
}