
package com.meta.writtenexam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class WrittenExamService {

    @Autowired
    private WrittenExamRepository writtenexamRepository;

    public List<WrittenExam> getAllWrittenExams() {
        List<WrittenExam> writtenexams = new ArrayList<>();
        writtenexamRepository.findAll().forEach(writtenexams::add);        
        return writtenexams;
    }

    public WrittenExam getWrittenExam(UUID id) {
        Optional<WrittenExam> optionalWrittenExam = writtenexamRepository.findById(id);
        return optionalWrittenExam.orElse(null);
    }

    public void addWrittenExam(WrittenExam writtenexam) {
        writtenexamRepository.save(writtenexam);
    }

    public void updateWrittenExam(UUID id, WrittenExam writtenexam) {
        writtenexamRepository.save(writtenexam);
    }

    public void deleteWrittenExam(UUID id) {
        writtenexamRepository.deleteById(id);
    }
}
