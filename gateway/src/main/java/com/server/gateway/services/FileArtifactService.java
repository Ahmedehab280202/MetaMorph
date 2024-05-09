// package com.server.gateway.services;


// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.stereotype.Service;

// import com.server.gateway.models.FileArtifact;
// import com.server.gateway.repositories.FileArtifactRepository;

// @Service
// public class FileArtifactService {
    
//     @Autowired
//     FileArtifactRepository file_artifact_repository;

//     public ResponseEntity getAllFiles(){
//         try{
//             return new ResponseEntity<>(file_artifact_repository.findAll(), HttpStatus.OK);
//         }catch(Exception e){
//             return new ResponseEntity<String>("Error getting the Files: " + e.getMessage(), HttpStatus.BAD_REQUEST);
//         }
//     }

//     public FileArtifact getFileById(Integer Id){
//         return file_artifact_repository.findById(Id).orElse(null);
//     }

//     public FileArtifact createOrUpdate(FileArtifact fileartifact){
//         return file_artifact_repository.save(fileartifact);
//     }

//     public void deleteFile(Integer id){
//         file_artifact_repository.deleteById(id);
//     }

// }
