
package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.CourseRepository;
import com.meta.model.Course;
@Service
public class CourseService {
    @Autowired
    private CourseRepository CourseRepository;
    public List<Course> getAllCourses() {
        return CourseRepository.findAll();
    }
    public Course getCourseById(Integer id) {
        Optional < Course > result = CourseRepository.findById(id);
        return result.orElse(null);
    }
    public void createCourse(Course Course) {
        CourseRepository.save(Course);
    }
    public Course updateCourse(Integer id, Course Course) {
        try {
            Course CourseFound = CourseRepository.findById(id).orElse(null);
            if (CourseFound == null) return null;
            CourseRepository.save(Course);
            return Course;
        }
        catch (Exception e) {
            return null;
        }
    }
    public void deleteCourse(Integer id) {
        CourseRepository.deleteById(id);
    }
}
    