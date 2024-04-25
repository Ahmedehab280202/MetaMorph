package com.server.gateway.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.server.gateway.models.RepositoryArtifact;

@Repository
public interface RepositoryArtifactRepository extends JpaRepository<RepositoryArtifact,Integer>{
    
}
