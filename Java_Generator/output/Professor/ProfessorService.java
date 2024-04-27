
package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.ProfessorRepository;
import com.meta.model.Professor;
@Service
public class ProfessorService {
    @Autowired
    private ProfessorRepository ProfessorRepository;
    public List<Professor> getAllProfessors() {
        return ProfessorRepository.findAll();
    }
    public Professor getProfessorById(Integer id) {
        Optional < Professor > result = ProfessorRepository.findById(id);
        return result.orElse(null);
    }
    public void createProfessor(Professor Professor) {
        ProfessorRepository.save(Professor);
    }
    public Professor updateProfessor(Integer id, Professor Professor) {
        try {
            Professor ProfessorFound = ProfessorRepository.findById(id).orElse(null);
            if (ProfessorFound == null) return null;
            ProfessorRepository.save(Professor);
            return Professor;
        }
        catch (Exception e) {
            return null;
        }
    }
    public void deleteProfessor(Integer id) {
        ProfessorRepository.deleteById(id);
    }
}
    