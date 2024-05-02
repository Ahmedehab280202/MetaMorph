package com.server.gateway.controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

import com.fasterxml.jackson.core.type.TypeReference;
import com.server.gateway.models.MetaData;
import com.server.gateway.repositories.MetaDataRepository;
import com.server.gateway.services.MetaDataService;

import io.micrometer.common.util.StringUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/metadata")
public class MetaDataController {

    @Autowired
    MetaDataService meta_data_service;

    @Autowired
    MetaDataRepository meta_repo;

    @Autowired
    RestTemplate restTemplate;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/project")
    public ResponseEntity<String> createProject(@RequestBody Map<String, Object> request_body) {

        // System.out.println("elbody gy taht
        // ahoooooooooooooooooooooooooooooooooooooooooooooooooooooooo!");
        // System.out.println("testing frontend data: "+request_body);

        try {
            // Extract data from the request body
            String projectName = (String) request_body.get("projectName");
            String figmaToken = (String) request_body.get("figmaToken");
            String fileUrl = (String) request_body.get("fileUrl");
            Object raw_uml_data = request_body.get("raw_uml_data");
            Object raw_ui_data = request_body.get("raw_ui_data");

            // Prepare request body for the second API
            Map<String, Object> requestBody = new HashMap<>();
            requestBody.put("raw_ui_data", raw_ui_data);
            requestBody.put("raw_uml_data", raw_uml_data);

            // System.out.println("elrayeh leexpress AHOO gy taht
            // ahoooooooooooooooooooooooooooooooooooooooooooooooooooooooo!");
            // System.out.println("testing frontend data: "+requestBody);

            // Send request to the second API
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);
            ResponseEntity<String> response = restTemplate.postForEntity(
                    "http://localhost:3002/project/code",
                    entity,
                    String.class);

            // Handle response from the second API
            if (response.getStatusCode().is2xxSuccessful()) {
                // Extract and handle response data if needed
                String responseData = response.getBody();
                // Object html_css_code = response.getBody("")

                ObjectMapper objectMapper = new ObjectMapper();
                Map<String, Object> jsonMap = objectMapper.readValue(responseData,
                        new TypeReference<Map<String, Object>>() {
                        });
                List<Map<String, Object>> html_css_code = (List<Map<String, Object>>) jsonMap.get("html_css_code");
                List<Map<String, Object>> java_code = (List<Map<String, Object>>) jsonMap.get("java_code");

                // Convert html_css_code and java_code to strings
                String htmlCssCodeString = html_css_code.stream()
                        .map(map -> map.get("html") + "\n" + map.get("css"))
                        .collect(Collectors.joining("\n\n"));

                String javaCodeString = java_code.stream()
                        .map(map -> "Name: " + map.get("name") + "\nModel File:\n" + map.get("model_file")
                                + "\nController File:\n" + map.get("controller_file"))
                        .collect(Collectors.joining("\n\n"));

                MetaData meta_data = new MetaData();
                meta_data.setProjectName(projectName);
                meta_data.setFileUrl(fileUrl);
                meta_data.setFigmaToken(figmaToken);
                meta_data.setJava_code(javaCodeString);
                meta_data.setHtml_css_code(htmlCssCodeString);

                this.meta_repo.save(meta_data);

                return ResponseEntity.ok("Project created successfully");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to process the request");
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to create project data", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
