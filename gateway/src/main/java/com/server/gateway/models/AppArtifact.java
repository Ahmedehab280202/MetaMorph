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

    @Column(name="repo_artifact_id")
    private int repo_artifact_id;

    public AppArtifact() {
    }

    public AppArtifact(int id, String name, List<FileArtifact> files, int repo_artifact_id) {
        this.id = id;
        this.name = name;
        this.fileArtifacts = files;
        this.repo_artifact_id = repo_artifact_id;
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

    public List<FileArtifact> getFileArtifacts() {
        return this.fileArtifacts;
    }

    public void setFileArtifacts(List<FileArtifact> fileArtifacts) {
        this.fileArtifacts = fileArtifacts;
    }

    public int getRepo_artifact_id() {
        return this.repo_artifact_id;
    }

    public void setRepo_artifact_id(int repo_artifact_id) {
        this.repo_artifact_id = repo_artifact_id;
    }

}
