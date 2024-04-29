
package com.meta.course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping("/course")
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }
    
    @GetMapping("/course/{id}")
    public Course getCourse(@PathVariable UUID id) {
        return courseService.getCourse(id);
    }

    @PostMapping("/course")
    public void addCourse(@RequestBody Course course) {
        courseService.addCourse(course);
    }

    @PutMapping("/course/{id}")
    public void updateCourse(@RequestBody Course course, @PathVariable UUID id) {
        courseService.updateCourse(id, course);
    }

    @DeleteMapping("/course/{id}")
    public void deleteCourse(@PathVariable UUID id) {
        courseService.deleteCourse(id);
    }
}
