package com.server.gateway.controllers;

import java.io.IOException;
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
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.server.gateway.models.MetaData;
import com.server.gateway.services.MetaDataService;

import io.micrometer.common.util.StringUtils;

@RestController
@RequestMapping("/metadata")
public class MetaDataController {

    @Autowired
    MetaDataService meta_data_service;

    @PostMapping("/frontend")
    public ResponseEntity<String> createFrontEndCode(@RequestBody Map<String, String> request_body) {
        try {
            // Extract values from request body
            String projectName = request_body.get("project_name");
            String figmaLink = request_body.get("figma_link");
            String figmaToken = request_body.get("figma_token");

            // Create MetaData object
            MetaData metaData = new MetaData();
            metaData.setProject_name(projectName);
            metaData.setFigma_link(figmaLink);
            metaData.setFigma_token(figmaToken);

            // Save MetaData object to the database
            meta_data_service.store(metaData);

            return new ResponseEntity<>("Frontend code created successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to create frontend code", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // @PostMapping("/backend")
    // public ResponseEntity<String> createBackEndCode(
    //         @RequestBody Map<String, String> requestBody,
    //         @RequestParam("csvFile") MultipartFile csvFile) {
    //     try {
    //         // Check if project_name is provided in the request body
    //         String projectName = requestBody.get("project_name");
    //         if (StringUtils.isEmpty(projectName)) {
    //             return new ResponseEntity<>("Project name is required", HttpStatus.BAD_REQUEST);
    //         }

    //         // Check if CSV file is provided
    //         if (csvFile.isEmpty()) {
    //             return new ResponseEntity<>("CSV file is required", HttpStatus.BAD_REQUEST);
    //         }

    //         // Create MetaData object
    //         MetaData metaData = new MetaData();
    //         metaData.setProject_name(projectName);
    //         // metaData.setCsvFile(csvFile);
    //         metaData.setCsv_file(csvFile);
    //         // Save MetaData object to the database
    //         meta_data_service.store(metaData);

    //         return new ResponseEntity<>("Backend code created successfully", HttpStatus.CREATED);
    //     } catch (Exception e) {
    //         return new ResponseEntity<>("Failed to create backend code", HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }
}

// @GetMapping("{dataId}")
// public ResponseEntity getMetaDataById(@PathVariable int dataId) {
// try {
// MetaData data = meta_data_service.getDataById(dataId);
// if (data != null) {
// return new ResponseEntity<>(data, HttpStatus.OK);
// } else {
// return new ResponseEntity<>("No Data found with id" + dataId, HttpStatus.OK);
// }
// } catch (Exception e) {
// return ResponseEntity.badRequest().body("error getting the Data!" +
// e.getMessage());
// }
// }
// 1)predefined url of meta standrdization 'http://localhost:3000/figma' ->
//

// @GetMapping("/data")
// public ResponseEntity getDataByLink(@RequestParam("raw_data") String
// raw_data) {
// try {
// // Assuming MetaDataService has a method to retrieve data by link
// MetaData data = meta_data_service.getFrontEndCode("raw_data");

// if (data != null) {
// // Return the data as response
// return new ResponseEntity<>(data, HttpStatus.OK);
// } else {
// // Return a message if no data found for the link
// return new ResponseEntity<>("No data found for the provided link: " +
// raw_data, HttpStatus.NOT_FOUND);
// }
// } catch (Exception e) {
// // Return an error response if an exception occurs
// return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: "
// + e.getMessage());
// }
// }

// @GetMapping("/fetchData")
// public String getStandardizeddata() {
// final String apiUrl =
// "http://localhost:8080/user/3f721e43-93c3-43b5-90ec-478e5f1d64c6";

// // Create a RestTemplate instance
// RestTemplate restTemplate = new RestTemplate();

// // Make a GET request to the API
// String responseData = restTemplate.getForObject(apiUrl, String.class);

// return responseData;
// }

// shelha ba3d ma t5las testing
// @PostMapping("")
// public ResponseEntity createMetaData(@RequestBody Map<String, String>
// request_body) {
// try {
// String design_url = request_body.get("design_url");
// String data_source = request_body.get("data_source");
// String data_type = request_body.get("data_type");
// String raw_data = request_body.get("raw_data");
// String standardized_data = request_body.get("standardized_data");

// MetaData meta_data_obj = new MetaData();

// meta_data_obj.setDesignUrl(design_url);
// meta_data_obj.setData_source(data_source);
// meta_data_obj.setData_type(data_type);
// meta_data_obj.setRaw_Data(raw_data);
// meta_data_obj.setStandardized_Data(standardized_data);

// this.meta_data_service.store(meta_data_obj);

// return new ResponseEntity<>(meta_data_obj, HttpStatus.CREATED);
// } catch (Exception e) {
// return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
// .body("Error creating MetaData: " + e.getMessage());
// }
// }

// @GetMapping("/store/rawdata")
// public ResponseEntity<String> fetchRawData() {
// String url = "https://jsonplaceholder.typicode.com/posts";
// RestTemplate template = new RestTemplate();
// ResponseEntity<String> responseEntity = template.getForEntity(url,
// String.class);
// String responseBody = responseEntity.getBody();

// // Create meta data
// MetaData meta_data = new MetaData();
// // metaData.setRawData(responseBody);
// meta_data.setRaw_Data(responseBody);
// meta_data_service.store(meta_data);
// //
// System.out.println("tmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaam!!!!!!!!!!!!");
// return new ResponseEntity<>("Data saved successfully", HttpStatus.OK);
// }
