
package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.LectureRepository;
import com.meta.model.Lecture;
@Service
public class LectureService {
    @Autowired
    private LectureRepository LectureRepository;
    public List<Lecture> getAllLectures() {
        return LectureRepository.findAll();
    }
    public Lecture getLectureById(Integer id) {
        Optional < Lecture > result = LectureRepository.findById(id);
        return result.orElse(null);
    }
    public void createLecture(Lecture Lecture) {
        LectureRepository.save(Lecture);
    }
    public Lecture updateLecture(Integer id, Lecture Lecture) {
        try {
            Lecture LectureFound = LectureRepository.findById(id).orElse(null);
            if (LectureFound == null) return null;
            LectureRepository.save(Lecture);
            return Lecture;
        }
        catch (Exception e) {
            return null;
        }
    }
    public void deleteLecture(Integer id) {
        LectureRepository.deleteById(id);
    }
}
    