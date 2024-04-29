
package com.meta.faculty;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;

    public interface FacultyRepository extends CrudRepository<Faculty, UUID> {
    }
