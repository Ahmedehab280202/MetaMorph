
package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.ExamRepository;
import com.meta.model.Exam;
@Service
public class ExamService {
    @Autowired
    private ExamRepository ExamRepository;
    public List<Exam> getAllExams() {
        return ExamRepository.findAll();
    }
    public Exam getExamById(Integer id) {
        Optional < Exam > result = ExamRepository.findById(id);
        return result.orElse(null);
    }
    public void createExam(Exam Exam) {
        ExamRepository.save(Exam);
    }
    public Exam updateExam(Integer id, Exam Exam) {
        try {
            Exam ExamFound = ExamRepository.findById(id).orElse(null);
            if (ExamFound == null) return null;
            ExamRepository.save(Exam);
            return Exam;
        }
        catch (Exception e) {
            return null;
        }
    }
    public void deleteExam(Integer id) {
        ExamRepository.deleteById(id);
    }
}
    