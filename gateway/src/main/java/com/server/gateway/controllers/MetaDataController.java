package com.server.gateway.controllers;

import java.io.IOException;
import java.util.ArrayList;
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
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
import com.server.gateway.models.User;
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

        try {

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            User loggedInUser = (User) authentication.getPrincipal();

            int maxMetadataLimit = 3;
            List<MetaData> userMetadata = meta_repo.findByDataOwner(loggedInUser);
            if (userMetadata.size() >= maxMetadataLimit) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Maximum number of projects reached for " + loggedInUser.getFirstname());
            }

            // System.out.println(request_body);

            String projectName = (String) request_body.get("projectName");
            String figmaToken = (String) request_body.get("figmaToken");
            String fileUrl = (String) request_body.get("fileUrl");
            Object raw_uml_data = request_body.get("raw_uml_data");
            Object raw_ui_data = request_body.get("raw_ui_data");

            Map<String, Object> requestBody = new HashMap<>();
            requestBody.put("raw_ui_data", raw_ui_data);
            requestBody.put("raw_uml_data", raw_uml_data);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);
            ResponseEntity<String> response = restTemplate.postForEntity(
                    "http://localhost:3002/project/code",
                    entity,
                    String.class);

            if (response.getStatusCode().is2xxSuccessful()) {

                String responseData = response.getBody();

                

                ObjectMapper objectMapper = new ObjectMapper();
                Map<String, Object> jsonMap = objectMapper.readValue(responseData,
                        new TypeReference<Map<String, Object>>() {
                        });
                List<Map<String, Object>> html_css_code = (List<Map<String, Object>>) jsonMap.get("html_css_code");
                List<Map<String, Object>> java_code = (List<Map<String, Object>>) jsonMap.get("java_code");

                
                // System.out.println(jsonMap);


                // Extract HTML and CSS code from the list
                StringBuilder htmlCode = new StringBuilder();
                StringBuilder cssCode = new StringBuilder();
                for (Map<String, Object> code : html_css_code) {
                    htmlCode.append(code.get("html")).append("\n");
                    cssCode.append(code.get("css")).append("\n");
                }


                StringBuilder models = new StringBuilder();
                StringBuilder controllers = new StringBuilder();
                StringBuilder services = new StringBuilder();
                StringBuilder repositories = new StringBuilder();

                for (Map<String, Object> code : java_code) {
                    models.append(code.get("model_file")).append("\n");
                    controllers.append(code.get("controller_file")).append("\n");
                    services.append(code.get("service_file")).append("\n");
                    repositories.append(code.get("repository_file")).append("\n");
                }

                // System.out.println(models);

                MetaData meta_data = new MetaData();
                meta_data.setProjectName(projectName);
                meta_data.setFileUrl(fileUrl);
                meta_data.setFigmaToken(figmaToken);
                meta_data.setHtml_code(htmlCode.toString());
                meta_data.setCss_code(cssCode.toString());
                meta_data.setModels(models.toString());
                meta_data.setService(services.toString());
                meta_data.setRepository(repositories.toString());
                meta_data.setController(controllers.toString());
                meta_data.setResponseCodeData(responseData);
                meta_data.setDataOwner(loggedInUser);
                this.meta_repo.save(meta_data);

                return ResponseEntity.ok("Project created successfully");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to process the request");
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to create project data", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/project/{projectName}")
    public ResponseEntity<Object> getFrontEndCode(@PathVariable String projectName) {
        List<MetaData> projectDataList = meta_repo.findByProjectName(projectName);

        if (projectDataList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        List<Map<String, Object>> responseBodyList = projectDataList.stream()
                .map(projectData -> {
                    Map<String, Object> projectDetails = new HashMap<>();
                    projectDetails.put("projectName", projectData.getProjectName());
                    projectDetails.put("htmlCode", projectData.getHtml_code());
                    projectDetails.put("CssCode", projectData.getCss_code());
                    projectDetails.put("models", projectData.getModels());
                    projectDetails.put("services", projectData.getService());
                    projectDetails.put("repositories", projectData.getRepository());
                    projectDetails.put("controllers", projectData.getController());
                    projectDetails.put("responseData",projectData.getResponseCodeData());
                    return projectDetails;
                })
                .collect(Collectors.toList());

        Map<String, Object> responseObject = new HashMap<>();
        responseObject.put("status", "success");
        responseObject.put("data", responseBodyList);

        return ResponseEntity.ok(responseObject);
    }

    @GetMapping("/projects/user")
    public ResponseEntity<List<MetaData>> getAllProjectsByUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User loggedInUser = (User) authentication.getPrincipal();

        List<MetaData> userProjects = meta_repo.findByDataOwner(loggedInUser);

        return ResponseEntity.ok(userProjects);
    }

}