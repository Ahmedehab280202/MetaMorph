package com.server.gateway.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.server.gateway.models.ProjectArtifact;

@Repository
public interface ProjectArtifactRepository extends JpaRepository<ProjectArtifact,Integer>{
    
}
