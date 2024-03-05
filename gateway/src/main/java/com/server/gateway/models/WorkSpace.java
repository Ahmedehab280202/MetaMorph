package com.server.gateway.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class WorkSpace {

    @Valid
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name")
    @NotBlank(message = "name is mandatory")
    @NotNull(message = "name is mandatory")
    @Size(min = 3, max = 50, message = "the minimum amount of charachters in name attribute is 3 !")
    private String name;

    @Column(name="description")
    @NotBlank(message = "description is mandatory")
    @NotNull(message = "description is mandatory")
    @Size(min = 20, max = 200, message = "the minimum amount of charachters in description attribute is 7 !")
    private String description;

    @OneToMany(mappedBy = "work_space",  cascade = CascadeType.REMOVE, orphanRemoval = true)
    List<ProjectArtifact> projects;

    private int project_limit;


    public WorkSpace() {
    }


    public WorkSpace(int id, String name, String description, List<ProjectArtifact> projects, int project_limit) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.projects = projects;
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

    public List<ProjectArtifact> getProjects() {
        return this.projects;
    }

    public void setProjects(List<ProjectArtifact> projects) {
        this.projects = projects;
    }

    public int getProject_limit() {
        return this.project_limit;
    }

    public void setProject_limit(int project_limit) {
        this.project_limit = project_limit;
    }

}
