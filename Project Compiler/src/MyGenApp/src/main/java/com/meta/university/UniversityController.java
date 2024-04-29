
package com.meta.university;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
public class UniversityController {
    @Autowired
    private UniversityService universityService;

    @GetMapping("/university")
    public List<University> getAllUniversitys() {
        return universityService.getAllUniversitys();
    }
    
    @GetMapping("/university/{id}")
    public University getUniversity(@PathVariable UUID id) {
        return universityService.getUniversity(id);
    }

    @PostMapping("/university")
    public void addUniversity(@RequestBody University university) {
        universityService.addUniversity(university);
    }

    @PutMapping("/university/{id}")
    public void updateUniversity(@RequestBody University university, @PathVariable UUID id) {
        universityService.updateUniversity(id, university);
    }

    @DeleteMapping("/university/{id}")
    public void deleteUniversity(@PathVariable UUID id) {
        universityService.deleteUniversity(id);
    }
}
