
package com.meta.controller;
import org.springframework.web.bind.annotation.;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.meta.model.;
import com.meta.service.*;
    @RestController
    @RequestMapping("/Professor")
    public class ProfessorController {
    @Autowired
    private ProfessorService ProfessorService;
    @GetMapping
    public List<Professor> getAllProfessors() {
        return ProfessorService.getAllProfessors();
    }
    @GetMapping("/{id}")
    public Professor getProfessorById(@PathVariable Integer id) {
        return ProfessorService.getProfessorById(id);
    }
    @PostMapping("/{add}")
    public void createProfessor(@RequestBody Professor Professor) {
        ProfessorService.createProfessor(Professor);
    }
    @PutMapping("/{id}")
    public void updateProfessor(@PathVariable Integer id, @RequestBody Professor Professor) {
        ProfessorService.updateProfessor(id, this.class_name);Professor
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        ProfessorService.deleteProfessor(id);
    }
    