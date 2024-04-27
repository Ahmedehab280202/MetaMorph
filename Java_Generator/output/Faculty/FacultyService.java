
package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.FacultyRepository;
import com.meta.model.Faculty;
@Service
public class FacultyService {
    @Autowired
    private FacultyRepository FacultyRepository;
    public List<Faculty> getAllFacultys() {
        return FacultyRepository.findAll();
    }
    public Faculty getFacultyById(Integer id) {
        Optional < Faculty > result = FacultyRepository.findById(id);
        return result.orElse(null);
    }
    public void createFaculty(Faculty Faculty) {
        FacultyRepository.save(Faculty);
    }
    public Faculty updateFaculty(Integer id, Faculty Faculty) {
        try {
            Faculty FacultyFound = FacultyRepository.findById(id).orElse(null);
            if (FacultyFound == null) return null;
            FacultyRepository.save(Faculty);
            return Faculty;
        }
        catch (Exception e) {
            return null;
        }
    }
    public void deleteFaculty(Integer id) {
        FacultyRepository.deleteById(id);
    }
}
    