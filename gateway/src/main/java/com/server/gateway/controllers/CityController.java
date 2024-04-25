package com.server.gateway.controllers;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.server.gateway.models.MetaData;
import com.server.gateway.models.User;
import com.server.gateway.repositories.MetaDataRepository;
import com.server.gateway.services.MetaDataService;

@RestController
@RequestMapping("/metarawdata")
public class CityController {

    @Autowired
    MetaDataRepository metadata_repo;

    @Autowired
    MetaDataService metadata_service;

    @GetMapping("")
    public ResponseEntity<String> fetchRawData() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User loggedInUser = (User) authentication.getPrincipal();

        String url = "https://jsonplaceholder.typicode.com/posts";
        RestTemplate template = new RestTemplate();
        ResponseEntity<String> responseEntity = template.getForEntity(url, String.class);
        String responseBody = responseEntity.getBody();

        // Create meta data
        MetaData meta_data = new MetaData();
        meta_data.setRaw_Data(responseBody);
        meta_data.setData_owner(loggedInUser);
        try {
            meta_data.setRaw_Data(responseBody);
            metadata_repo.save(meta_data);
            // System.out.println("tmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaam!!!!!!!!!!!!");
            return new ResponseEntity<>("Data saved successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error saving data", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // @GetMapping("/{userId}")
    // public ResponseEntity<List<String>> getRawDataByUserId(@PathVariable String userId) {
    //     try {
    //         List<String> rawDataList = metadata_service.getRawDataByUserId(userId);
    //         return ResponseEntity.ok().body(rawDataList);
    //     } catch (IllegalArgumentException e) {
    //         // Handle case where user ID is not found
    //         return ResponseEntity.notFound().build();
    //     }
    // }

    // @GetMapping("{userId}")
    // public ResponseEntity<List<String>> getAllRawDataByUserId(@PathVariable String userId) {
    //     // Find all metadata by user ID
    //     List<MetaData> metaDataList = metadata_repo.findByData_owner_Id(userId);

    //     if (metaDataList.isEmpty()) {
    //         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    //     }

    //     // Extract raw data from each metadata entry
    //     List<String> rawDatas = metaDataList.stream()
    //             .map(MetaData::getRaw_Data)
    //             .collect(Collectors.toList());

    //     return new ResponseEntity<>(rawDatas, HttpStatus.OK);
    // }

    
}
