package com.server.gateway.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.gateway.models.RepositoryArtifact;

public interface RepositoryArtifactRepository extends JpaRepository<RepositoryArtifact,Integer>{
    
}
