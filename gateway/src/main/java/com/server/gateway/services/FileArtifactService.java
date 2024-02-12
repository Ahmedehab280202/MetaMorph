package com.server.gateway.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.gateway.models.FileArtifact;
import com.server.gateway.repositories.FileArtifactRepository;

@Service
public class FileArtifactService {
    
    @Autowired
    FileArtifactRepository file_artifact_repository;

    public List<FileArtifact> getAllFiles(){
        return file_artifact_repository.findAll();
    }

    public FileArtifact getFileById(Integer Id){
        return file_artifact_repository.findById(Id).orElse(null);
    }

    public FileArtifact createOrUpdate(FileArtifact fileartifact){
        return file_artifact_repository.save(fileartifact);
    }

    public void deleteFile(Integer id){
        file_artifact_repository.deleteById(id);
    }

}
