package com.server.gateway.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.gateway.models.AppArtifact;
import com.server.gateway.models.FileArtifact;
import com.server.gateway.services.AppArtifactService;
import com.server.gateway.services.FileArtifactService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import jakarta.validation.Valid;
import java.util.HashMap;

import org.springframework.validation.FieldError;

@RestController
@RequestMapping("/fileartifact")
public class FileArtifactController {

    @Autowired
    FileArtifactService file_artifact_service;

    @Autowired
    AppArtifactService app_artifact_service;

    @GetMapping("")
    public ResponseEntity getAllFileArtifacts() {
        try {
            return file_artifact_service.getAllFiles();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error getting all files" + e.getMessage());
        }
    }

    @GetMapping("{fileid}")
    public ResponseEntity getFileArtifactById(@PathVariable("fileid") int fileid) {
        try {
            FileArtifact fa = this.file_artifact_service.getFileById(fileid);
            
            if (fa != null) {
                return new ResponseEntity<>(fa, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("FileArtifact is not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error getting the file with this id" + e.getMessage());
        }
    }

    @PostMapping("")
    public ResponseEntity<String> createFileArtifact(@Valid @RequestBody Map<String, String> request_body) {

        try {
            String name = request_body.get("name");
            String extension = request_body.get("extension");
            String language = request_body.get("language");
            Double size = Double.parseDouble(request_body.get("size"));
            String text = request_body.get("text");
            String path_directory = request_body.get("path_directory");
            int appArtifactId = Integer.parseInt(request_body.get("app_artifact_id"));

            // Retrieve the AppArtifact from the database using the ID
            AppArtifact appArtifact = app_artifact_service.getAppById(appArtifactId);
            if (appArtifact == null) {
                return ResponseEntity.badRequest().body("AppArtifact with ID " + appArtifactId + " not found");
            }

            // Create the FileArtifact and set the AppArtifact
            FileArtifact fileArtifact = new FileArtifact();
            fileArtifact.setName(name);
            fileArtifact.setExtension(extension);
            fileArtifact.setLanguage(language);
            fileArtifact.setSize(size);
            fileArtifact.setText(text);
            fileArtifact.setPath_directory(path_directory);
            fileArtifact.setAppArtifact(appArtifact);

            // Save the FileArtifact
            file_artifact_service.createOrUpdate(fileArtifact);

            return new ResponseEntity<>("File created successfully", HttpStatus.CREATED);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Invalid format for size or app_artifact_id");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error creating the file: " + e.getMessage());
        }
    }

    @PutMapping("{fileid}")
    public ResponseEntity<String> updateFileArtifact(@Valid @RequestBody Map<String, String> request_body,
            @PathVariable int fileid) {
        try {
            FileArtifact fa = this.file_artifact_service.getFileById(fileid);
            if (fa != null) {
                fa.setName((String) request_body.get("name"));
                fa.setExtension((String) request_body.get("extension"));
                fa.setLanguage((String) request_body.get("language"));
                fa.setSize(Double.parseDouble((String) request_body.get("size")));
                fa.setText((String) request_body.get("text"));
                fa.setPath_directory((String) request_body.get("path_directory"));

                file_artifact_service.createOrUpdate(fa);
                return new ResponseEntity<>("File updated successfully", HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("File not Found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error updating the file" + e.getMessage());
        }
    }

    @DeleteMapping("{fileid}")
    public ResponseEntity deleteFileArtifact(@PathVariable("fileid") int fileid) {
        try {
            FileArtifact fa = this.file_artifact_service.getFileById(fileid);
            if (fa != null) {
                file_artifact_service.deleteFile(fileid);
                return new ResponseEntity<>("File deleted successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("File not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error deleting the file" + e.getMessage());
        }
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {

        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });

        return errors;
    }
}
