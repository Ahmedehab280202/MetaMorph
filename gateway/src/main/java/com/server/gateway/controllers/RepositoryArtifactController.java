package com.server.gateway.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.gateway.models.AppArtifact;
import com.server.gateway.models.RepositoryArtifact;
import com.server.gateway.services.RepositoryArtifactService;

@RestController
@RequestMapping("/repositoryartifact")
public class RepositoryArtifactController {

    @Autowired
    RepositoryArtifactService repo_artifact_service;

    @GetMapping("")
    public ResponseEntity getAllRepositoryArtifacts() {
        try {
            List<RepositoryArtifact> repo_artifacts = repo_artifact_service.getAllRepositories();
            if (repo_artifacts != null) {
                return new ResponseEntity<>(repo_artifacts, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("No Repository Artifact", HttpStatus.OK);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error getting the Repositories!" + e.getMessage());
        }
    }

    @GetMapping("{repoId}")
    public ResponseEntity getRepositoryArtifactById(@PathVariable int repoId) {
        try {
            RepositoryArtifact repo_Artifact = repo_artifact_service.getRepositoryById(repoId);
            if (repo_Artifact != null) {
                return new ResponseEntity<>(repo_Artifact, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Repository is not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error getting the Repositories!" + e.getMessage());
        }
    }

    @PostMapping("")
    public ResponseEntity createRepositoryArtifact(@RequestBody RepositoryArtifact repo_artifact) {
        try {
            RepositoryArtifact created_repo_artifact = repo_artifact_service
                    .createOrupdateRepositoryArtifact(repo_artifact);
            return new ResponseEntity<>(created_repo_artifact, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("{repoId}")
    public ResponseEntity updateRepositoryArtifact(@PathVariable int repoId, @RequestBody RepositoryArtifact repoartifact) {
        try {
            RepositoryArtifact repo_Artifact = repo_artifact_service.getRepositoryById(repoId);
            if(repo_Artifact != null){
                repo_Artifact.setName((String) repoartifact.getName());
                repo_Artifact.setUrl((String) repoartifact.getUrl());
                repo_artifact_service.createOrupdateRepositoryArtifact(repo_Artifact);
                return new ResponseEntity<>(repo_Artifact, HttpStatus.CREATED);
            }else{
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("{repoId}")
    public ResponseEntity deleteRepositoryArtifact(@PathVariable int repoId){
        RepositoryArtifact repo_Artifact = repo_artifact_service.getRepositoryById(repoId);
        try{
            if(repo_Artifact != null){
                repo_artifact_service.deleteRepositoryArtifact(repoId);
                return new ResponseEntity<>("Repository deleted successfully", HttpStatus.OK);
            }else{
                return new ResponseEntity<>("Repository not found", HttpStatus.NOT_FOUND);
            }
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Error deleting the App" + e.getMessage());
        }
    }
}
