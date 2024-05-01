package com.server.gateway.controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.server.gateway.repositories.MetaDataRepository;
import com.server.gateway.services.MetaDataService;

import io.micrometer.common.util.StringUtils;

@RestController
@RequestMapping("/metadata")
public class MetaDataController {

    @Autowired
    MetaDataService meta_data_service;

    @Autowired
    MetaDataRepository meta_repo;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/project")
    public ResponseEntity<String> createProject(@RequestBody Map<String, String> request_body) {

        System.out.println("elbody gy taht ahoooooooooooooooooooooooooooooooooooooooooooooooooooooooo!");
        System.out.println("testing frontend data: "+request_body);

        try {
            
            String projectName = request_body.get("projectName");
            String figmaToken = request_body.get("figmaToken");
            String fileUrl = request_body.get("fileUrl");
            // String raw_ui_data = request_body.get("raw_ui_data");
            // String raw_uml_data = request_body.get("raw_uml_data");

            // System.out.println("raw_ui_data value is"+raw_ui_data);
            // System.out.println("raw_ui_data value is"+raw_uml_data);

            MetaData meta_data = new MetaData();

            meta_data.setProjectName(projectName);
            meta_data.setFigmaToken(figmaToken);
            meta_data.setFileUrl(fileUrl);

            this.meta_repo.save(meta_data);

            return ResponseEntity.ok("Project created successfully");
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to create project data", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
