package com.server.gateway.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.gateway.repositories.RepositoryArtifactRepository;
import com.server.gateway.models.AppArtifact;
import com.server.gateway.models.RepositoryArtifact;


@Service
public class RepositoryArtifactService {
    
    @Autowired
    RepositoryArtifactRepository repo_artifact_repo;

    public List<RepositoryArtifact> getAllRepositories(){
        return repo_artifact_repo.findAll();
    }

    public RepositoryArtifact getRepositoryById(int id){
        return repo_artifact_repo.findById(id).orElse(null);
    }
    

    public RepositoryArtifact createOrupdateRepositoryArtifact(RepositoryArtifact repo_artifact){
        System.out.println("checking the post service to know where is the error !!!!!!!!!!!!!!!!!!!!!!!!!");
        return repo_artifact_repo.save(repo_artifact);
    }

    public void deleteRepositoryArtifact(int id){
        repo_artifact_repo.deleteById(id);
    }
}
