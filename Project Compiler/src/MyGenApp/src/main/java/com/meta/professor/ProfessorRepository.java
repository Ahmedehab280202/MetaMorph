
package com.meta.professor;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;

    public interface ProfessorRepository extends CrudRepository<Professor, UUID> {
    }
