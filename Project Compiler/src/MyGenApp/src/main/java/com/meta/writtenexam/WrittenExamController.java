
package com.meta.writtenexam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
public class WrittenExamController {
    @Autowired
    private WrittenExamService writtenexamService;

    @GetMapping("/writtenexam")
    public List<WrittenExam> getAllWrittenExams() {
        return writtenexamService.getAllWrittenExams();
    }
    
    @GetMapping("/writtenexam/{id}")
    public WrittenExam getWrittenExam(@PathVariable UUID id) {
        return writtenexamService.getWrittenExam(id);
    }

    @PostMapping("/writtenexam")
    public void addWrittenExam(@RequestBody WrittenExam writtenexam) {
        writtenexamService.addWrittenExam(writtenexam);
    }

    @PutMapping("/writtenexam/{id}")
    public void updateWrittenExam(@RequestBody WrittenExam writtenexam, @PathVariable UUID id) {
        writtenexamService.updateWrittenExam(id, writtenexam);
    }

    @DeleteMapping("/writtenexam/{id}")
    public void deleteWrittenExam(@PathVariable UUID id) {
        writtenexamService.deleteWrittenExam(id);
    }
}
