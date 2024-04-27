
package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.WrittenExamRepository;
import com.meta.model.WrittenExam;
@Service
public class WrittenExamService {
    @Autowired
    private WrittenExamRepository WrittenExamRepository;
    public List<WrittenExam> getAllWrittenExams() {
        return WrittenExamRepository.findAll();
    }
    public WrittenExam getWrittenExamById(Integer id) {
        Optional < WrittenExam > result = WrittenExamRepository.findById(id);
        return result.orElse(null);
    }
    public void createWrittenExam(WrittenExam WrittenExam) {
        WrittenExamRepository.save(WrittenExam);
    }
    public WrittenExam updateWrittenExam(Integer id, WrittenExam WrittenExam) {
        try {
            WrittenExam WrittenExamFound = WrittenExamRepository.findById(id).orElse(null);
            if (WrittenExamFound == null) return null;
            WrittenExamRepository.save(WrittenExam);
            return WrittenExam;
        }
        catch (Exception e) {
            return null;
        }
    }
    public void deleteWrittenExam(Integer id) {
        WrittenExamRepository.deleteById(id);
    }
}
    