package com.server.gateway.models;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "ProjectArtifact")
public class ProjectArtifact {
    
    @Valid

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    @NotBlank(message = "name is mandatory")
    @NotNull(message = "name is mandatory")
    @Size(min = 4, max = 50, message = "the minimum amount of charachters is 4 !")
    private String name;


    @OneToOne(mappedBy = "proj_artifact", cascade = CascadeType.ALL)
    @JoinColumn(name = "repository_artifact_id")
    private RepositoryArtifact repo_artifact;

    

    public ProjectArtifact() {
    }


    public ProjectArtifact(int id, String name, RepositoryArtifact repo_artifact) {
        this.id = id;
        this.name = name;
        this.repo_artifact = repo_artifact;
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

    public RepositoryArtifact getRepo_artifact() {
        return this.repo_artifact;
    }

    public void setRepo_artifact(RepositoryArtifact repo_artifact) {
        this.repo_artifact = repo_artifact;
    }


}
