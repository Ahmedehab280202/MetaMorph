package com.server.gateway.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.gateway.models.AppArtifact;
import com.server.gateway.models.FileArtifact;
import com.server.gateway.repositories.AppArtifactRepository;

import java.util.List;


@Service
public class AppArtifactService {
    
    @Autowired
    AppArtifactRepository app_artifact_repository;

    public List<AppArtifact> getAllApps(){
        List<AppArtifact> test = app_artifact_repository.findAll();
        System.out.println(test.get(0).getName());
        return app_artifact_repository.findAll();

    }

    public AppArtifact getAppById(Integer id){
        return app_artifact_repository.findById(id).orElse(null);
    }

    public AppArtifact createOrUpdateApp(AppArtifact app_artifact){
        return app_artifact_repository.save(app_artifact);
    }

    // public List<FileArtifact> getAppFiles(Integer id){
    //     return app_artifact_repository.getFilesByApp(id);
    // }

    public void deleteApp(Integer id){
        app_artifact_repository.deleteById(id);
    }

}
