package com.server.gateway.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class RepositoryArtifact {

    @Valid

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "name")
    @NotBlank(message = "name is mandatory")
    @NotNull(message = "name is mandatory")
    @Size(min = 7, max = 50, message = "the minimum amount of charachters is 7 !")
    String name;

    @Column(name = "url")
    @NotBlank(message = "url is mandatory")
    @NotNull(message = "url is mandatory")
    @Size(min = 7, max = 100, message = "the minimum amount of charachters is 7 !")
    String url;

    @OneToMany(mappedBy = "repo_artifact", cascade = CascadeType.REMOVE, orphanRemoval = true)
    List<AppArtifact> app_artifact;

    @OneToOne
    @JoinColumn(name = "repository_artifact_id")
    private ProjectArtifact proj_artifact;

    public RepositoryArtifact() {
    }


    public RepositoryArtifact(int id, String name, String url, List<AppArtifact> app_artifact, ProjectArtifact proj_artifact) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.app_artifact = app_artifact;
        this.proj_artifact = proj_artifact;
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

    public List<AppArtifact> getApp_artifact() {
        return this.app_artifact;
    }

    public void setApp_artifact(List<AppArtifact> app_artifact) {
        this.app_artifact = app_artifact;
    }

    public ProjectArtifact getProj_artifact() {
        return this.proj_artifact;
    }

    public void setProj_artifact(ProjectArtifact proj_artifact) {
        this.proj_artifact = proj_artifact;
    }
    

}
