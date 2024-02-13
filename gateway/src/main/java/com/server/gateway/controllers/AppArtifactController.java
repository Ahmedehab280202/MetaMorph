package com.server.gateway.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.gateway.models.AppArtifact;
import com.server.gateway.services.AppArtifactService;
import java.util.List;

@RestController
@RequestMapping("/appartifact")
public class AppArtifactController {
    
    @Autowired
    AppArtifactService app_artifact_service;

    @GetMapping("")
    public ResponseEntity getAllAppArtifacts(){
        try{
            List<AppArtifact> app = app_artifact_service.getAllApps();
            return new ResponseEntity<>(app,HttpStatus.OK);
        }catch(Exception e){
            return ResponseEntity.badRequest().body("Couldn't find AppArtifacts"+e.getMessage());
        }
    } 

}
