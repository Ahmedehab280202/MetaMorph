
package com.meta.controller;
import org.springframework.web.bind.annotation.;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.meta.model.;
import com.meta.service.*;
    @RestController
    @RequestMapping("/Student")
    public class StudentController {
    @Autowired
    private StudentService StudentService;
    @GetMapping
    public List<Student> getAllStudents() {
        return StudentService.getAllStudents();
    }
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Integer id) {
        return StudentService.getStudentById(id);
    }
    @PostMapping("/{add}")
    public void createStudent(@RequestBody Student Student) {
        StudentService.createStudent(Student);
    }
    @PutMapping("/{id}")
    public void updateStudent(@PathVariable Integer id, @RequestBody Student Student) {
        StudentService.updateStudent(id, this.class_name);Student
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        StudentService.deleteStudent(id);
    }
    