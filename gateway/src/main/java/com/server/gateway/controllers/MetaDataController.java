package com.server.gateway.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server.gateway.models.MetaData;
import com.server.gateway.services.MetaDataService;

@RestController
@RequestMapping("/metadata")
public class MetaDataController {
    
    @Autowired
    MetaDataService meta_data_service;

    @GetMapping("{dataId}")
    public ResponseEntity getMetaDataById(@PathVariable int dataId){
        try{
            MetaData data = meta_data_service.getDataById(dataId);
            if(data != null){
                return new ResponseEntity<>(data,HttpStatus.OK);
            }else{
                return new ResponseEntity<>("No Data found with id" + dataId , HttpStatus.OK);
            }
        }catch(Exception e){
            return ResponseEntity.badRequest().body("error getting the Data!" + e.getMessage());
        }
    }

    @GetMapping("/data")
    public ResponseEntity getDataByLink(@RequestParam("link") String link) {
        try {
            // Assuming MetaDataService has a method to retrieve data by link
            MetaData data = meta_data_service.getFrontEndCode(link);
            
            if (data != null) {
                // Return the data as response
                return new ResponseEntity<>(data, HttpStatus.OK);
            } else {
                // Return a message if no data found for the link
                return new ResponseEntity<>("No data found for the provided link: " + link, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            // Return an error response if an exception occurs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }


    //shelha ba3d ma t5las testing
    @PostMapping("")
    public ResponseEntity createMetaData(@RequestBody MetaData metaData) {
        try {
            MetaData createdMetaData = meta_data_service.createMetaData(metaData);
            return new ResponseEntity<>(createdMetaData, HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating MetaData: " + e.getMessage());
        }
    }
        
}