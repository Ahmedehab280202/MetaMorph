
package com.meta.student;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;

    public interface StudentRepository extends CrudRepository<Student, UUID> {
    }
