
package com.meta.controller;
import org.springframework.web.bind.annotation.;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.meta.model.;
import com.meta.service.*;
    @RestController
    @RequestMapping("/University")
    public class UniversityController {
    @Autowired
    private UniversityService UniversityService;
    @GetMapping
    public List<University> getAllUniversitys() {
        return UniversityService.getAllUniversitys();
    }
    @GetMapping("/{id}")
    public University getUniversityById(@PathVariable Integer id) {
        return UniversityService.getUniversityById(id);
    }
    @PostMapping("/{add}")
    public void createUniversity(@RequestBody University University) {
        UniversityService.createUniversity(University);
    }
    @PutMapping("/{id}")
    public void updateUniversity(@PathVariable Integer id, @RequestBody University University) {
        UniversityService.updateUniversity(id, this.class_name);University
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        UniversityService.deleteUniversity(id);
    }
    