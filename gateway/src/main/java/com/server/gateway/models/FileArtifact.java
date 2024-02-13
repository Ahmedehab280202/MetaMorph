package com.server.gateway.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Objects;

@Entity
public class FileArtifact {
    
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;

    private String extension;

    private String language;

    private Double size;

    private String text;

    private String path_directory;

    public FileArtifact(){

    }//When you use JPA entities, you need to provide a default (no-argument) constructor explicitly, along with your parameterized constructor,
    // especially if you're defining a custom constructor with arguments 

    public FileArtifact(int id, String name, String extension, String language, Double size, String text, String path_directory) {
        this.id = id;
        this.name = name;
        this.extension = extension;
        this.language = language;
        this.size = size;
        this.text = text;
        this.path_directory = path_directory;
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

    public String getExtension() {
        return this.extension;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public String getLanguage() {
        return this.language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Double getSize() {
        return this.size;
    }

    public void setSize(Double size) {
        this.size = size;
    }

    public String getText() {
        return this.text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getPath_directory() {
        return this.path_directory;
    }

    public void setPath_directory(String path_directory) {
        this.path_directory = path_directory;
    }

}
