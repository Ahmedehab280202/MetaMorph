package com.server.gateway.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.gateway.models.AppArtifact;
import com.server.gateway.repositories.AppArtifactRepository;

import java.util.List;


@Service
public class AppArtifactService {
    
    @Autowired
    AppArtifactRepository app_artifact_repository;

    public List<AppArtifact> getAllApps(){
        return app_artifact_repository.findAll();
    }

    public AppArtifact getAppById(Integer id){
        return app_artifact_repository.findById(id).orElse(null);
    }

    // public List<AppArtifact> getAppsByRepositoryId(Integer repositoryId) {
    //     return app_artifact_repository.findByRepoArtifactId(repositoryId);
    // }

    public AppArtifact createOrUpdateApp(AppArtifact app_artifact){
        return app_artifact_repository.save(app_artifact);
    }

    public void deleteApp(Integer id){
        app_artifact_repository.deleteById(id);
    }

}
