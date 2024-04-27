
package com.meta.controller;
import org.springframework.web.bind.annotation.;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.meta.model.;
import com.meta.service.*;
    @RestController
    @RequestMapping("/Exam")
    public class ExamController {
    @Autowired
    private ExamService ExamService;
    @GetMapping
    public List<Exam> getAllExams() {
        return ExamService.getAllExams();
    }
    @GetMapping("/{id}")
    public Exam getExamById(@PathVariable Integer id) {
        return ExamService.getExamById(id);
    }
    @PostMapping("/{add}")
    public void createExam(@RequestBody Exam Exam) {
        ExamService.createExam(Exam);
    }
    @PutMapping("/{id}")
    public void updateExam(@PathVariable Integer id, @RequestBody Exam Exam) {
        ExamService.updateExam(id, this.class_name);Exam
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        ExamService.deleteExam(id);
    }
    