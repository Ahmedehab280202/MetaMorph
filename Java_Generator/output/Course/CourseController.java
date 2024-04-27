
package com.meta.controller;
import org.springframework.web.bind.annotation.;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.meta.model.;
import com.meta.service.*;
    @RestController
    @RequestMapping("/Course")
    public class CourseController {
    @Autowired
    private CourseService CourseService;
    @GetMapping
    public List<Course> getAllCourses() {
        return CourseService.getAllCourses();
    }
    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable Integer id) {
        return CourseService.getCourseById(id);
    }
    @PostMapping("/{add}")
    public void createCourse(@RequestBody Course Course) {
        CourseService.createCourse(Course);
    }
    @PutMapping("/{id}")
    public void updateCourse(@PathVariable Integer id, @RequestBody Course Course) {
        CourseService.updateCourse(id, this.class_name);Course
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        CourseService.deleteCourse(id);
    }
    