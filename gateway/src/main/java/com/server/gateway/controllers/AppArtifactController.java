package com.server.gateway.controllers;

import org.apache.catalina.connector.Response;
import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.gateway.models.AppArtifact;
import com.server.gateway.models.FileArtifact;
import com.server.gateway.services.AppArtifactService;
import java.util.List;

@RestController
@RequestMapping("/appartifact")
public class AppArtifactController {

    @Autowired
    AppArtifactService app_artifact_service;

    // @GetMapping("")
    // public ResponseEntity getAllAppArtifacts() {
    //     try {
    //         List<AppArtifact> app = app_artifact_service.getAllApps();
    //         String ahmed = "asdfasdfasdfasdfasdf";
    //         System.out.println(app);
    //         return ahmed ;//new ResponseEntity<>(app, HttpStatus.OK);
    //     } catch (Exception e) {
    //         return ResponseEntity.badRequest().body("Couldn't find AppArtifacts" + e.getMessage());
    //     }
    // }

    @GetMapping("")
    public ResponseEntity getAllAppArtifacts() {
        try{
            List<AppArtifact> app = app_artifact_service.getAllApps();
            if(app != null){
                return new ResponseEntity<>(app,HttpStatus.OK);
            }else{
                return new ResponseEntity<>("No Apps Found",HttpStatus.NOT_FOUND);
            }
        }catch(Exception e){
            return ResponseEntity.badRequest().body("error getting the Apps!" + e.getMessage());
        }
    }


    @GetMapping("{appId}")
    public ResponseEntity getAppArtifact(@PathVariable int appId) {
        try {
            AppArtifact app_artifact = this.app_artifact_service.getAppById(appId);
            if (app_artifact != null) {
                return new ResponseEntity<>(app_artifact, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("FileArtifact is not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error getting the App with this id" + e.getMessage());
        }

    }

    @PostMapping("")
    public ResponseEntity<AppArtifact> createAppArtifact(@RequestBody AppArtifact appArtifact) {
        try {
            AppArtifact createdAppArtifact = app_artifact_service.createOrUpdateApp(appArtifact);
            return new ResponseEntity<>(createdAppArtifact, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("{AppId}")
    public ResponseEntity<AppArtifact> updateAppArtifact(@RequestBody AppArtifact appArtifact, @PathVariable int appId){
        try{
            AppArtifact app_artifact = app_artifact_service.getAppById(appId);
            if(app_artifact != null){
                app_artifact.setName((String) appArtifact.getName());
                app_artifact_service.createOrUpdateApp(app_artifact);
                return new ResponseEntity<>(app_artifact, HttpStatus.CREATED);
            }else{
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("{appId}")
    public ResponseEntity deleteAppByID(@PathVariable int appId){
        try{
            AppArtifact app_artifact = app_artifact_service.getAppById(appId);
            if(app_artifact != null){
                app_artifact_service.deleteApp(appId);
                return new ResponseEntity<>("App deleted successfully", HttpStatus.OK);
            }else{ 
                return new ResponseEntity<>("App not found", HttpStatus.NOT_FOUND);
            }
        }catch(Exception e){
            return ResponseEntity.badRequest().body("Error deleting the App" + e.getMessage());
        }
    }
}
