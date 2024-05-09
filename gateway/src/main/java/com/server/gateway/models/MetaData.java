package com.server.gateway.models;

import java.io.File;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "MetaData")
public class MetaData {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="projectName")
    private String projectName;

    @Column(name="figmaToken")
    private String figmaToken;

    @Column(name="fileUrl")
    private String fileUrl;

    // @Column(name="html_css_code")
    // private String html_css_code;

    @Column(name="html_code")
    private String html_code;

    @Column(name="css_code")
    private String css_code;

    // @Column(name="java_code")
    // private String java_code;

    @Column(name = "models")
    private String models;

    @Column(name = "service")
    private String service;

    @Column(name = "repository")
    private String repository;

    @Column(name = "controller")
    private String controller;

    @Column(name = "responseData")
    private String responseCodeData;

    @ManyToOne
    @JoinColumn(name = "data_owner_id", referencedColumnName = "id") // Specify the name of the foreign key column
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User dataOwner;

    public MetaData() {
    }


    public MetaData(int id, String projectName, String figmaToken, String fileUrl, String html_code, String css_code, String models, String service, String repository, String controller, String responseCodeData, User dataOwner) {
        this.id = id;
        this.projectName = projectName;
        this.figmaToken = figmaToken;
        this.fileUrl = fileUrl;
        this.html_code = html_code;
        this.css_code = css_code;
        this.models = models;
        this.service = service;
        this.repository = repository;
        this.controller = controller;
        this.responseCodeData = responseCodeData;
        this.dataOwner = dataOwner;
    }


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProjectName() {
        return this.projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getFigmaToken() {
        return this.figmaToken;
    }

    public void setFigmaToken(String figmaToken) {
        this.figmaToken = figmaToken;
    }

    public String getFileUrl() {
        return this.fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public String getHtml_code() {
        return this.html_code;
    }

    public void setHtml_code(String html_code) {
        this.html_code = html_code;
    }

    public String getCss_code() {
        return this.css_code;
    }

    public void setCss_code(String css_code) {
        this.css_code = css_code;
    }

    public String getModels() {
        return this.models;
    }

    public void setModels(String models) {
        this.models = models;
    }

    public String getService() {
        return this.service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getRepository() {
        return this.repository;
    }

    public void setRepository(String repository) {
        this.repository = repository;
    }

    public String getController() {
        return this.controller;
    }

    public void setController(String controller) {
        this.controller = controller;
    }

    public String getResponseCodeData() {
        return this.responseCodeData;
    }

    public void setResponseCodeData(String responseCodeData) {
        this.responseCodeData = responseCodeData;
    }

    public User getDataOwner() {
        return this.dataOwner;
    }

    public void setDataOwner(User dataOwner) {
        this.dataOwner = dataOwner;
    }
    
}