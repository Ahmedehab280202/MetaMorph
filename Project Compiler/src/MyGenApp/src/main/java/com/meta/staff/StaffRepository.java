
package com.meta.staff;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;

    public interface StaffRepository extends CrudRepository<Staff, UUID> {
    }
