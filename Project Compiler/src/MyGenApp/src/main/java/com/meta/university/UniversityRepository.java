
package com.meta.university;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;

    public interface UniversityRepository extends CrudRepository<University, UUID> {
    }
