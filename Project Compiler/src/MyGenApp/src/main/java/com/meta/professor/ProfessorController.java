
package com.meta.professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
public class ProfessorController {
    @Autowired
    private ProfessorService professorService;

    @GetMapping("/professor")
    public List<Professor> getAllProfessors() {
        return professorService.getAllProfessors();
    }
    
    @GetMapping("/professor/{id}")
    public Professor getProfessor(@PathVariable UUID id) {
        return professorService.getProfessor(id);
    }

    @PostMapping("/professor")
    public void addProfessor(@RequestBody Professor professor) {
        professorService.addProfessor(professor);
    }

    @PutMapping("/professor/{id}")
    public void updateProfessor(@RequestBody Professor professor, @PathVariable UUID id) {
        professorService.updateProfessor(id, professor);
    }

    @DeleteMapping("/professor/{id}")
    public void deleteProfessor(@PathVariable UUID id) {
        professorService.deleteProfessor(id);
    }
}
