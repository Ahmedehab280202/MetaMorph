
package com.meta.computerizedexam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ComputerizedExamService {

    @Autowired
    private ComputerizedExamRepository computerizedexamRepository;

    public List<ComputerizedExam> getAllComputerizedExams() {
        List<ComputerizedExam> computerizedexams = new ArrayList<>();
        computerizedexamRepository.findAll().forEach(computerizedexams::add);        
        return computerizedexams;
    }

    public ComputerizedExam getComputerizedExam(UUID id) {
        Optional<ComputerizedExam> optionalComputerizedExam = computerizedexamRepository.findById(id);
        return optionalComputerizedExam.orElse(null);
    }

    public void addComputerizedExam(ComputerizedExam computerizedexam) {
        computerizedexamRepository.save(computerizedexam);
    }

    public void updateComputerizedExam(UUID id, ComputerizedExam computerizedexam) {
        computerizedexamRepository.save(computerizedexam);
    }

    public void deleteComputerizedExam(UUID id) {
        computerizedexamRepository.deleteById(id);
    }
}
