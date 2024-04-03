package com.server.gateway.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class MetaData {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // @Column(name="design_url")
    // @NotBlank(message = "design_url is mandatory")
    // @NotNull(message = "design_url is mandatory")
    // @Size(min = 3, max = 50, message = "the minimum amount of charachters in design_url attribute is 8 !")
    private String designUrl;

    // @Column(name="data_source")
    // @NotBlank(message = "data_source is mandatory")
    // @NotNull(message = "data_source is mandatory")
    // @Size(min = 3, max = 50, message = "the minimum amount of charachters in data_source attribute is 8 !")
    private String data_source;

    // @Column(name="data_type")
    // @NotBlank(message = "data_type is mandatory")
    // @NotNull(message = "data_type is mandatory")
    // @Size(min = 3, max = 50, message = "the minimum amount of charachters in data_type attribute is 8 !")
    private String data_type;

    // @Column(name="raw_Data")
    // @NotBlank(message = "raw_Data is mandatory")
    // @NotNull(message = "raw_Data is mandatory")
    // @Size(min = 3, max = 50, message = "the minimum amount of charachters in raw_Data attribute is 8 !")
    private String raw_Data;

    // @Column(name="standardized_Data")
    // @NotBlank(message = "standardized_Data is mandatory")
    // @NotNull(message = "standardized_Data is mandatory")
    // @Size(min = 3, max = 50, message = "the minimum amount of charachters in standardized_Data attribute is 8 !")
    private String standardized_Data;


    public MetaData() {
    }


    public MetaData(int id, String designUrl, String data_source, String data_type, String raw_Data, String standardized_Data) {
        this.id = id;
        this.designUrl = designUrl;
        this.data_source = data_source;
        this.data_type = data_type;
        this.raw_Data = raw_Data;
        this.standardized_Data = standardized_Data;
    }


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDesign_url() {
        return this.designUrl;
    }

    public void setDesign_url(String design_url) {
        this.designUrl = design_url;
    }

    public String getData_source() {
        return this.data_source;
    }

    public void setData_source(String data_source) {
        this.data_source = data_source;
    }

    public String getData_type() {
        return this.data_type;
    }

    public void setData_type(String data_type) {
        this.data_type = data_type;
    }

    public String getRaw_Data() {
        return this.raw_Data;
    }

    public void setRaw_Data(String raw_Data) {
        this.raw_Data = raw_Data;
    }

    public String getStandardized_Data() {
        return this.standardized_Data;
    }

    public void setStandardized_Data(String standardized_Data) {
        this.standardized_Data = standardized_Data;
    }

}
