
package com.meta.controller;
import org.springframework.web.bind.annotation.;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.meta.model.;
import com.meta.service.*;
    @RestController
    @RequestMapping("/Faculty")
    public class FacultyController {
    @Autowired
    private FacultyService FacultyService;
    @GetMapping
    public List<Faculty> getAllFacultys() {
        return FacultyService.getAllFacultys();
    }
    @GetMapping("/{id}")
    public Faculty getFacultyById(@PathVariable Integer id) {
        return FacultyService.getFacultyById(id);
    }
    @PostMapping("/{add}")
    public void createFaculty(@RequestBody Faculty Faculty) {
        FacultyService.createFaculty(Faculty);
    }
    @PutMapping("/{id}")
    public void updateFaculty(@PathVariable Integer id, @RequestBody Faculty Faculty) {
        FacultyService.updateFaculty(id, this.class_name);Faculty
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        FacultyService.deleteFaculty(id);
    }
    