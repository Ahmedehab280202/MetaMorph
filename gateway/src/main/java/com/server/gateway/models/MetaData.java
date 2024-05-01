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

    @Column(name="html_css_code")
    private String html_css_code;

    @Column(name="java_code")
    private String java_code;

    // private String


    // @ManyToOne
    // @JoinColumn(name = "data_owner_id", referencedColumnName = "id") // Specify the name of the foreign key column
    // @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    // @JsonIdentityReference(alwaysAsId = true)
    // @OnDelete(action = OnDeleteAction.CASCADE)
    // private User data_owner;

    public MetaData() {
    }


    public MetaData(int id, String projectName, String figmaToken, String fileUrl, String html_css_code, String java_code) {
        this.id = id;
        this.projectName = projectName;
        this.figmaToken = figmaToken;
        this.fileUrl = fileUrl;
        this.html_css_code = html_css_code;
        this.java_code = java_code;
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

    public String getHtml_css_code() {
        return this.html_css_code;
    }

    public void setHtml_css_code(String html_css_code) {
        this.html_css_code = html_css_code;
    }

    public String getJava_code() {
        return this.java_code;
    }

    public void setJava_code(String java_code) {
        this.java_code = java_code;
    }


}
