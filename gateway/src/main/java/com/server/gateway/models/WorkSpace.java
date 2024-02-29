package com.server.gateway.models;

import java.util.List;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class WorkSpace {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name")
    @NotBlank(message = "name is mandatory")
    @NotNull(message = "name is mandatory")
    @Size(min = 7, max = 50, message = "the minimum amount of charachters is 7 !")
    private String name;

    @Column(name="description")
    @NotBlank(message = "name is mandatory")
    @NotNull(message = "name is mandatory")
    @Size(min = 20, max = 200, message = "the minimum amount of charachters is 7 !")
    private String description;

    // List<ProjectArtifact> proj_artifacts;

    private int project_limit;


    public WorkSpace() {
    }

    public WorkSpace(int id, String name, String description /* , List<ProjectArtifact> proj_artifacts*/, int project_limit) {
        this.id = id;
        this.name = name;
        this.description = description;
        // this.proj_artifacts = proj_artifacts;
        this.project_limit = project_limit;
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

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // public List<ProjectArtifact> getProj_artifacts() {
    //     return this.proj_artifacts;
    // }

    // public void setProj_artifacts(List<ProjectArtifact> proj_artifacts) {
    //     this.proj_artifacts = proj_artifacts;
    // }

    public int getProject_limit() {
        return this.project_limit;
    }

    public void setProject_limit(int project_limit) {
        this.project_limit = project_limit;
    }

}
