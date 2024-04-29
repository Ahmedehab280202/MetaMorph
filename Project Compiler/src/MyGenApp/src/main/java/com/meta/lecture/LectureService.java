
package com.meta.lecture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class LectureService {

    @Autowired
    private LectureRepository lectureRepository;

    public List<Lecture> getAllLectures() {
        List<Lecture> lectures = new ArrayList<>();
        lectureRepository.findAll().forEach(lectures::add);        
        return lectures;
    }

    public Lecture getLecture(UUID id) {
        Optional<Lecture> optionalLecture = lectureRepository.findById(id);
        return optionalLecture.orElse(null);
    }

    public void addLecture(Lecture lecture) {
        lectureRepository.save(lecture);
    }

    public void updateLecture(UUID id, Lecture lecture) {
        lectureRepository.save(lecture);
    }

    public void deleteLecture(UUID id) {
        lectureRepository.deleteById(id);
    }
}
