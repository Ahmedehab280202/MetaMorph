package com.server.gateway.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RepositoryArtifact {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String name;

    String url;

    AppArtifact frontend_app;

    AppArtifact backend_app;


    public RepositoryArtifact() {
    }

    public RepositoryArtifact(int id, String name, String url, AppArtifact frontend_app, AppArtifact backend_app) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.frontend_app = frontend_app;
        this.backend_app = backend_app;
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

    public AppArtifact getFrontend_app() {
        return this.frontend_app;
    }

    public void setFrontend_app(AppArtifact frontend_app) {
        this.frontend_app = frontend_app;
    }

    public AppArtifact getBackend_app() {
        return this.backend_app;
    }

    public void setBackend_app(AppArtifact backend_app) {
        this.backend_app = backend_app;
    }

}
