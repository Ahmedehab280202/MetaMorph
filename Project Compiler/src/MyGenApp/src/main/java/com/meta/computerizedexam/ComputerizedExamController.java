
package com.meta.computerizedexam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
public class ComputerizedExamController {
    @Autowired
    private ComputerizedExamService computerizedexamService;

    @GetMapping("/computerizedexam")
    public List<ComputerizedExam> getAllComputerizedExams() {
        return computerizedexamService.getAllComputerizedExams();
    }
    
    @GetMapping("/computerizedexam/{id}")
    public ComputerizedExam getComputerizedExam(@PathVariable UUID id) {
        return computerizedexamService.getComputerizedExam(id);
    }

    @PostMapping("/computerizedexam")
    public void addComputerizedExam(@RequestBody ComputerizedExam computerizedexam) {
        computerizedexamService.addComputerizedExam(computerizedexam);
    }

    @PutMapping("/computerizedexam/{id}")
    public void updateComputerizedExam(@RequestBody ComputerizedExam computerizedexam, @PathVariable UUID id) {
        computerizedexamService.updateComputerizedExam(id, computerizedexam);
    }

    @DeleteMapping("/computerizedexam/{id}")
    public void deleteComputerizedExam(@PathVariable UUID id) {
        computerizedexamService.deleteComputerizedExam(id);
    }
}
