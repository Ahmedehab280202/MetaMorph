package com.server.gateway.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.gateway.models.ProjectArtifact;
import com.server.gateway.repositories.ProjectArtifactRepository;

@Service
public class ProjectArtifactService {
    
    @Autowired
    ProjectArtifactRepository proj_artifact_repo;

    public List<ProjectArtifact> getAllProjects(){
        return proj_artifact_repo.findAll();
    }

    public ProjectArtifact getProjById(Integer id){
        return proj_artifact_repo.findById(id).orElse(null);
    }

    public ProjectArtifact createOrUpdate(ProjectArtifact proj_artifact){
        return proj_artifact_repo.save(proj_artifact);
    }

    public void deleteProj(Integer id){
        proj_artifact_repo.deleteById(id);
    }
}
