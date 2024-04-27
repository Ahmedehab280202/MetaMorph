
package com.meta.controller;
import org.springframework.web.bind.annotation.;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.meta.model.;
import com.meta.service.*;
    @RestController
    @RequestMapping("/WrittenExam")
    public class WrittenExamController {
    @Autowired
    private WrittenExamService WrittenExamService;
    @GetMapping
    public List<WrittenExam> getAllWrittenExams() {
        return WrittenExamService.getAllWrittenExams();
    }
    @GetMapping("/{id}")
    public WrittenExam getWrittenExamById(@PathVariable Integer id) {
        return WrittenExamService.getWrittenExamById(id);
    }
    @PostMapping("/{add}")
    public void createWrittenExam(@RequestBody WrittenExam WrittenExam) {
        WrittenExamService.createWrittenExam(WrittenExam);
    }
    @PutMapping("/{id}")
    public void updateWrittenExam(@PathVariable Integer id, @RequestBody WrittenExam WrittenExam) {
        WrittenExamService.updateWrittenExam(id, this.class_name);WrittenExam
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        WrittenExamService.deleteWrittenExam(id);
    }
    