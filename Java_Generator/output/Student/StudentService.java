
package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.StudentRepository;
import com.meta.model.Student;
@Service
public class StudentService {
    @Autowired
    private StudentRepository StudentRepository;
    public List<Student> getAllStudents() {
        return StudentRepository.findAll();
    }
    public Student getStudentById(Integer id) {
        Optional < Student > result = StudentRepository.findById(id);
        return result.orElse(null);
    }
    public void createStudent(Student Student) {
        StudentRepository.save(Student);
    }
    public Student updateStudent(Integer id, Student Student) {
        try {
            Student StudentFound = StudentRepository.findById(id).orElse(null);
            if (StudentFound == null) return null;
            StudentRepository.save(Student);
            return Student;
        }
        catch (Exception e) {
            return null;
        }
    }
    public void deleteStudent(Integer id) {
        StudentRepository.deleteById(id);
    }
}
    