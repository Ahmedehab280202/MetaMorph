package com.server.gateway.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.server.gateway.models.AppArtifact;

@Repository
public interface AppArtifactRepository extends JpaRepository<AppArtifact,Integer>{
    
    // @Query("select File from App where App.id")
    // void get

    // List<AppArtifact> findByRepoArtifactId(Integer repositoryId);
}
