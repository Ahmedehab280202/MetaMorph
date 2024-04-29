
package com.meta.person;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;

    public interface PersonRepository extends CrudRepository<Person, UUID> {
    }
