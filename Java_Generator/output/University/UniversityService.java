
package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.UniversityRepository;
import com.meta.model.University;
@Service
public class UniversityService {
    @Autowired
    private UniversityRepository UniversityRepository;
    public List<University> getAllUniversitys() {
        return UniversityRepository.findAll();
    }
    public University getUniversityById(Integer id) {
        Optional < University > result = UniversityRepository.findById(id);
        return result.orElse(null);
    }
    public void createUniversity(University University) {
        UniversityRepository.save(University);
    }
    public University updateUniversity(Integer id, University University) {
        try {
            University UniversityFound = UniversityRepository.findById(id).orElse(null);
            if (UniversityFound == null) return null;
            UniversityRepository.save(University);
            return University;
        }
        catch (Exception e) {
            return null;
        }
    }
    public void deleteUniversity(Integer id) {
        UniversityRepository.deleteById(id);
    }
}
    