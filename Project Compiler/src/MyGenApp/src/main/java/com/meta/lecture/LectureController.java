
package com.meta.lecture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
public class LectureController {
    @Autowired
    private LectureService lectureService;

    @GetMapping("/lecture")
    public List<Lecture> getAllLectures() {
        return lectureService.getAllLectures();
    }
    
    @GetMapping("/lecture/{id}")
    public Lecture getLecture(@PathVariable UUID id) {
        return lectureService.getLecture(id);
    }

    @PostMapping("/lecture")
    public void addLecture(@RequestBody Lecture lecture) {
        lectureService.addLecture(lecture);
    }

    @PutMapping("/lecture/{id}")
    public void updateLecture(@RequestBody Lecture lecture, @PathVariable UUID id) {
        lectureService.updateLecture(id, lecture);
    }

    @DeleteMapping("/lecture/{id}")
    public void deleteLecture(@PathVariable UUID id) {
        lectureService.deleteLecture(id);
    }
}
