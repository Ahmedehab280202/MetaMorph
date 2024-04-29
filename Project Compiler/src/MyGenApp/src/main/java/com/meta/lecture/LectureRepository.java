
package com.meta.lecture;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;

    public interface LectureRepository extends CrudRepository<Lecture, UUID> {
    }
