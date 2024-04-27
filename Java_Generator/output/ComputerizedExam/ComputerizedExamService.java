
package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.ComputerizedExamRepository;
import com.meta.model.ComputerizedExam;
@Service
public class ComputerizedExamService {
    @Autowired
    private ComputerizedExamRepository ComputerizedExamRepository;
    public List<ComputerizedExam> getAllComputerizedExams() {
        return ComputerizedExamRepository.findAll();
    }
    public ComputerizedExam getComputerizedExamById(Integer id) {
        Optional < ComputerizedExam > result = ComputerizedExamRepository.findById(id);
        return result.orElse(null);
    }
    public void createComputerizedExam(ComputerizedExam ComputerizedExam) {
        ComputerizedExamRepository.save(ComputerizedExam);
    }
    public ComputerizedExam updateComputerizedExam(Integer id, ComputerizedExam ComputerizedExam) {
        try {
            ComputerizedExam ComputerizedExamFound = ComputerizedExamRepository.findById(id).orElse(null);
            if (ComputerizedExamFound == null) return null;
            ComputerizedExamRepository.save(ComputerizedExam);
            return ComputerizedExam;
        }
        catch (Exception e) {
            return null;
        }
    }
    public void deleteComputerizedExam(Integer id) {
        ComputerizedExamRepository.deleteById(id);
    }
}
    