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
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class MetaData {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // // @Column(name="design_url")
    // // @NotBlank(message = "design_url is mandatory")
    // // @NotNull(message = "design_url is mandatory")
    // // @Size(min = 3, max = 50, message = "the minimum amount of charachters in design_url attribute is 8 !")
    // private String designUrl;

    // // @Column(name="data_source")
    // // @NotBlank(message = "data_source is mandatory")
    // // @NotNull(message = "data_source is mandatory")
    // // @Size(min = 3, max = 50, message = "the minimum amount of charachters in data_source attribute is 8 !")
    // private String data_source;
    // // @Column(name="data_type")
    // // @NotBlank(message = "data_type is mandatory")
    // // @NotNull(message = "data_type is mandatory")
    // // @Size(min = 3, max = 50, message = "the minimum amount of charachters in data_type attribute is 8 !")
    // private String data_type;
    // // @Column(name="raw_Data")
    // // @NotBlank(message = "raw_Data is mandatory")
    // // @NotNull(message = "raw_Data is mandatory")
    // // @Size(min = 3, max = 50, message = "the minimum amount of charachters in raw_Data attribute is 8 !")
    // @Column(name = "raw_data", columnDefinition = "TEXT")
    // private String raw_Data;
    // // @Column(name="standardized_Data")
    // // @NotBlank(message = "standardized_Data is mandatory")
    // // @NotNull(message = "standardized_Data is mandatory")
    // // @Size(min = 3, max = 50, message = "the minimum amount of charachters in standardized_Data attribute is 8 !")
    // private String standardized_Data;

    @Column(name="project_name")
    private String project_name;

    @Column(name="figma_link")
    private String figma_link;

    @Column(name="figma_token")
    private String figma_token;

    @Column(name = "csv_file")
    private String csv_file;

    // private String


    @ManyToOne
    @JoinColumn(name = "data_owner_id", referencedColumnName = "id") // Specify the name of the foreign key column
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User data_owner;

    public MetaData() {
    }

    public MetaData(int id, String project_name, String figma_link, String figma_token,/* */ MultipartFile csv_file, User data_owner) {
        this.id = id;
        this.project_name = project_name;
        this.figma_link = figma_link;
        this.figma_token = figma_token;
        // this.csv_file = csv_file;
        this.data_owner = data_owner;
    }


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProject_name() {
        return this.project_name;
    }

    public void setProject_name(String project_name) {
        this.project_name = project_name;
    }

    public String getFigma_link() {
        return this.figma_link;
    }

    public void setFigma_link(String figma_link) {
        this.figma_link = figma_link;
    }

    public String getFigma_token() {
        return this.figma_token;
    }

    public void setFigma_token(String figma_token) {
        this.figma_token = figma_token;
    }

    // public MultipartFile getCsv_file() {
    //     return this.csv_file;
    // }

    // public void setCsv_file(MultipartFile csvFile) {
    //     this.csv_file = csvFile;
    // }

    public User getData_owner() {
        return this.data_owner;
    }

    public void setData_owner(User data_owner) {
        this.data_owner = data_owner;
    }

}
