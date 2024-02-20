package com.server.gateway.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class RepositoryArtifact {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String name;

    String url;

    @OneToMany(mappedBy = "repo_artifact_id", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AppArtifact> app_artifacts = new ArrayList<>();

    public RepositoryArtifact() {
    }

    public RepositoryArtifact(int id, String name, String url, List<AppArtifact> app_artifacts) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.app_artifacts=app_artifacts;
    }


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public List<AppArtifact> getApp_artifacts() {
        return this.app_artifacts;
    }

    public void setApp_artifacts(List<AppArtifact> app_artifacts) {
        this.app_artifacts = app_artifacts;
    }
    
}
