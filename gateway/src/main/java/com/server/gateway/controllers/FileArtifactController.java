package com.server.gateway.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.gateway.models.FileArtifact;
import com.server.gateway.services.FileArtifactService;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/fileartifact")
public class FileArtifactController {
    
    @Autowired
    FileArtifactService file_artifact_service;

    

    @GetMapping("")
    public ResponseEntity getAllFileArtifacts(){
        try{
            List<FileArtifact> fa = file_artifact_service.getAllFiles();
            return new ResponseEntity<>(fa, HttpStatus.OK);
        }catch(Exception e){
            return ResponseEntity.badRequest().body("error getting all files" + e.getMessage());
        }
    }

    @GetMapping("{fileid}")
    public ResponseEntity getFileArtifactById(@PathVariable("fileid") int fileid){
        try{
            FileArtifact fa = this.file_artifact_service.getFileById(fileid);
            if(fa != null){
                return new ResponseEntity<>(fa, HttpStatus.OK);
            }else{
                return new ResponseEntity<>("FileArtifact is not found", HttpStatus.NOT_FOUND);
            }
        }catch(Exception e){
            return ResponseEntity.badRequest().body("error getting the file with this id" + e.getMessage());
        }
    }

    // @PostMapping()
    // public ResponseEntity createFileArtifact(@RequestBody Map<String, String> request_body){
        
    // }

    @PostMapping("")
    public FileArtifact createFileArtifact(@RequestBody FileArtifact file_artifact){
        return file_artifact_service.createOrUpdate(new FileArtifact(file_artifact.getId(), file_artifact.getName(), file_artifact.getExtension(), file_artifact.getLanguage(), file_artifact.getSize(), file_artifact.getText(), file_artifact.getPath_directory()));
    }

    @DeleteMapping("{fileid}")
    public void deleteFileArtifact(@PathVariable("fileid") int fileid){
        
    }

    // @DeleteMapping("{fileid}")
    // public void deleteFileArtifact(@PathVariable("fileid") int fileid){
    //     file_artifact_service.deleteFile(fileid);
    // }

    // @PutMapping("")
}
