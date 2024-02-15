package com.server.gateway.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.List;

@Entity
public class AppArtifact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name")
    private String name;

    @OneToMany(mappedBy = "app_artifact_id", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<FileArtifact> fileArtifacts = new ArrayList<>();

    public AppArtifact() {
    }

    public AppArtifact(int id, String name, List<FileArtifact> files) {
        this.id = id;
        this.name = name;
        this.fileArtifacts = files;
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
        return this.fileArtifacts;
    }

    public void setFile_artifacts(List<FileArtifact> files) {
        this.fileArtifacts = files;
    }

}
