package com.server.gateway.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class AppArtifact {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;

    @OneToMany(mappedBy = "appArtifact", cascade = CascadeType.ALL)
    private List<FileArtifact> file_artifacts;

    public AppArtifact(){}


    public AppArtifact(int id, String name, List<FileArtifact> file_artifacts) {
        this.id = id;
        this.name = name;
        this.file_artifacts = file_artifacts;
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

    public List<FileArtifact> getFile_artifacts() {
        return this.file_artifacts;
    }

    public void setFile_artifacts(List<FileArtifact> file_artifacts) {
        this.file_artifacts = file_artifacts;
    }

}
