
package com.meta.controller;
import org.springframework.web.bind.annotation.;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.meta.model.;
import com.meta.service.*;
    @RestController
    @RequestMapping("/Lecture")
    public class LectureController {
    @Autowired
    private LectureService LectureService;
    @GetMapping
    public List<Lecture> getAllLectures() {
        return LectureService.getAllLectures();
    }
    @GetMapping("/{id}")
    public Lecture getLectureById(@PathVariable Integer id) {
        return LectureService.getLectureById(id);
    }
    @PostMapping("/{add}")
    public void createLecture(@RequestBody Lecture Lecture) {
        LectureService.createLecture(Lecture);
    }
    @PutMapping("/{id}")
    public void updateLecture(@PathVariable Integer id, @RequestBody Lecture Lecture) {
        LectureService.updateLecture(id, this.class_name);Lecture
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        LectureService.deleteLecture(id);
    }
    