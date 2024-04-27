
package com.meta.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.meta.model.*;
import java.util.Optional;
    @Repository
    public interface CourseRepository extends JpaRepository<Course, Integer> {
    }
    