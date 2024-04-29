
package com.meta.course;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;

    public interface CourseRepository extends CrudRepository<Course, UUID> {
    }
