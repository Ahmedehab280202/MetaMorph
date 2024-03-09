package com.server.gateway.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MetaData {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String design_url;

    private String data_source;

    private String data_type;

    private String raw_Data;

    private String standardized_Data;


    public MetaData() {
    }


    public MetaData(int id, String design_url, String data_source, String data_type, String raw_Data, String standardized_Data) {
        this.id = id;
        this.design_url = design_url;
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
        return this.design_url;
    }

    public void setDesign_url(String design_url) {
        this.design_url = design_url;
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
