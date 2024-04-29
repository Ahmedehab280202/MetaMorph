
package com.meta.professor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProfessorService {

    @Autowired
    private ProfessorRepository professorRepository;

    public List<Professor> getAllProfessors() {
        List<Professor> professors = new ArrayList<>();
        professorRepository.findAll().forEach(professors::add);        
        return professors;
    }

    public Professor getProfessor(UUID id) {
        Optional<Professor> optionalProfessor = professorRepository.findById(id);
        return optionalProfessor.orElse(null);
    }

    public void addProfessor(Professor professor) {
        professorRepository.save(professor);
    }

    public void updateProfessor(UUID id, Professor professor) {
        professorRepository.save(professor);
    }

    public void deleteProfessor(UUID id) {
        professorRepository.deleteById(id);
    }
}
