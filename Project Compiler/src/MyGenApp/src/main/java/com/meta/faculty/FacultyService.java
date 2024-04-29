
package com.meta.faculty;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class FacultyService {

    @Autowired
    private FacultyRepository facultyRepository;

    public List<Faculty> getAllFacultys() {
        List<Faculty> facultys = new ArrayList<>();
        facultyRepository.findAll().forEach(facultys::add);        
        return facultys;
    }

    public Faculty getFaculty(UUID id) {
        Optional<Faculty> optionalFaculty = facultyRepository.findById(id);
        return optionalFaculty.orElse(null);
    }

    public void addFaculty(Faculty faculty) {
        facultyRepository.save(faculty);
    }

    public void updateFaculty(UUID id, Faculty faculty) {
        facultyRepository.save(faculty);
    }

    public void deleteFaculty(UUID id) {
        facultyRepository.deleteById(id);
    }
}
