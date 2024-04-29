
package com.meta.university;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UniversityService {

    @Autowired
    private UniversityRepository universityRepository;

    public List<University> getAllUniversitys() {
        List<University> universitys = new ArrayList<>();
        universityRepository.findAll().forEach(universitys::add);        
        return universitys;
    }

    public University getUniversity(UUID id) {
        Optional<University> optionalUniversity = universityRepository.findById(id);
        return optionalUniversity.orElse(null);
    }

    public void addUniversity(University university) {
        universityRepository.save(university);
    }

    public void updateUniversity(UUID id, University university) {
        universityRepository.save(university);
    }

    public void deleteUniversity(UUID id) {
        universityRepository.deleteById(id);
    }
}
