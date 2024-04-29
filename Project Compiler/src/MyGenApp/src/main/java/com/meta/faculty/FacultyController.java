
package com.meta.faculty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
public class FacultyController {
    @Autowired
    private FacultyService facultyService;

    @GetMapping("/faculty")
    public List<Faculty> getAllFacultys() {
        return facultyService.getAllFacultys();
    }
    
    @GetMapping("/faculty/{id}")
    public Faculty getFaculty(@PathVariable UUID id) {
        return facultyService.getFaculty(id);
    }

    @PostMapping("/faculty")
    public void addFaculty(@RequestBody Faculty faculty) {
        facultyService.addFaculty(faculty);
    }

    @PutMapping("/faculty/{id}")
    public void updateFaculty(@RequestBody Faculty faculty, @PathVariable UUID id) {
        facultyService.updateFaculty(id, faculty);
    }

    @DeleteMapping("/faculty/{id}")
    public void deleteFaculty(@PathVariable UUID id) {
        facultyService.deleteFaculty(id);
    }
}
