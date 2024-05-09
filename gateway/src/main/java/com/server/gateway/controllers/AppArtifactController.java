// package com.server.gateway.controllers;


// import java.util.Map;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.validation.FieldError;
// import org.springframework.web.bind.MethodArgumentNotValidException;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.ExceptionHandler;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.ResponseStatus;
// import org.springframework.web.bind.annotation.RestController;
// import java.util.HashMap;

// import com.server.gateway.models.AppArtifact;
// import com.server.gateway.models.RepositoryArtifact;
// import com.server.gateway.services.AppArtifactService;
// import com.server.gateway.services.RepositoryArtifactService;

// import jakarta.validation.Valid;

// import java.util.List;

// @RestController
// @RequestMapping("/appartifact")
// public class AppArtifactController {

//     @Autowired
//     AppArtifactService app_artifact_service;

//     @Autowired
//     RepositoryArtifactService repo_artifact_service;

//     // @GetMapping("")
//     // public ResponseEntity getAllAppArtifacts() {
//     // try {
//     // List<AppArtifact> app = app_artifact_service.getAllApps();
//     // String ahmed = "asdfasdfasdfasdfasdf";
//     // System.out.println(app);
//     // return ahmed ;//new ResponseEntity<>(app, HttpStatus.OK);
//     // } catch (Exception e) {
//     // return ResponseEntity.badRequest().body("Couldn't find AppArtifacts" +
//     // e.getMessage());
//     // }
//     // }

//     @GetMapping("")
//     public ResponseEntity getAllAppArtifacts() {
//         try {
//             List<AppArtifact> app = app_artifact_service.getAllApps();
//             if (app != null) {
//                 return new ResponseEntity<>(app, HttpStatus.OK);
//             } else {
//                 return new ResponseEntity<>("No Apps Found", HttpStatus.NOT_FOUND);
//             }
//         } catch (Exception e) {
//             return ResponseEntity.badRequest().body("error getting the Apps!" + e.getMessage());
//         }
//     }

//     @GetMapping("{appId}")
//     public ResponseEntity getAppArtifact(@PathVariable int appId) {
//         try {
//             AppArtifact app_artifact = this.app_artifact_service.getAppById(appId);
//             if (app_artifact != null) {
//                 return new ResponseEntity<>(app_artifact, HttpStatus.OK);
//             } else {
//                 return new ResponseEntity<>("FileArtifact is not found", HttpStatus.NOT_FOUND);
//             }
//         } catch (Exception e) {
//             return ResponseEntity.badRequest().body("error getting the App with this id" + e.getMessage());
//         }

//     }

//     // @PostMapping("")
//     // public ResponseEntity<AppArtifact> createAppArtifact(@RequestBody AppArtifact
//     // appArtifact) {
//     // try {
//     // AppArtifact createdAppArtifact =
//     // app_artifact_service.createOrUpdateApp(appArtifact);
//     // return new ResponseEntity<>(createdAppArtifact, HttpStatus.CREATED);
//     // } catch (Exception e) {
//     // return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//     // }
//     // }

//     // @PostMapping("")
//     // public ResponseEntity<String> createAppArtifact(@Valid @RequestBody
//     // Map<String, String> requestBody) {
//     // AppArtifact appArtifact = new AppArtifact();
//     // try {
//     // appArtifact.setName(requestBody.get("name"));

//     // // Parsing and setting the repositoryArtifact ID
//     // int repoArtifactId = Integer.parseInt(requestBody.get("repo_artifact_id"));
//     // RepositoryArtifact repositoryArtifact = new RepositoryArtifact();
//     // repositoryArtifact.setId(repoArtifactId);
//     // appArtifact.setRepo_artifact(repositoryArtifact);

//     // // Save the AppArtifact object to the database
//     // AppArtifact createdAppArtifact =
//     // app_artifact_service.createOrUpdateApp(appArtifact);

//     // return new ResponseEntity<>("AppArtifact created with ID: " +
//     // createdAppArtifact.getId(),
//     // HttpStatus.CREATED);
//     // } catch (NumberFormatException e) {
//     // return new ResponseEntity<>("Invalid repo_artifact_id format",
//     // HttpStatus.BAD_REQUEST);
//     // } catch (Exception e) {
//     // return new ResponseEntity<>("Failed to create AppArtifact",
//     // HttpStatus.INTERNAL_SERVER_ERROR);
//     // }
//     // }

//     @PostMapping("")
//     public ResponseEntity<String> createAppArtifact(@Valid @RequestBody Map<String, String> requestBody) {
//         try {
//             // Parsing the repositoryArtifact ID
//             int repoArtifactId = Integer.parseInt(requestBody.get("repo_artifact_id"));

//             // Check if the repositoryArtifact exists
//             RepositoryArtifact repositoryArtifact = repo_artifact_service.getRepositoryById(repoArtifactId);
//             if (repositoryArtifact == null) {
//                 return new ResponseEntity<>("RepositoryArtifact with ID " + repoArtifactId + " not found",
//                         HttpStatus.NOT_FOUND);
//             }

//             // Check if the maximum number of app artifacts is exceeded
//             int maxAppArtifacts = 2;
//             if (repositoryArtifact.getApp_artifact().size() >= maxAppArtifacts) {
//                 return new ResponseEntity<>("Maximum number of AppArtifacts per RepositoryArtifact exceeded",
//                         HttpStatus.BAD_REQUEST);
//             }

//             // Create the new AppArtifact
//             AppArtifact appArtifact = new AppArtifact();
//             appArtifact.setName(requestBody.get("name"));
//             appArtifact.setRepo_artifact(repositoryArtifact);

//             // Save the AppArtifact object to the database
//             AppArtifact createdAppArtifact = app_artifact_service.createOrUpdateApp(appArtifact);

//             return new ResponseEntity<>("AppArtifact created with ID: " + createdAppArtifact.getId(),
//                     HttpStatus.CREATED);
//         } catch (NumberFormatException e) {
//             return new ResponseEntity<>("Invalid repo_artifact_id format", HttpStatus.BAD_REQUEST);
//         } catch (Exception e) {
//             // Log the exception for debugging purposes
//             e.printStackTrace();
//             return new ResponseEntity<>("Failed to create AppArtifact", HttpStatus.INTERNAL_SERVER_ERROR);
//         }
//     }

//     @PutMapping("{AppId}")
//     public ResponseEntity<AppArtifact> updateAppArtifact(@Valid @RequestBody Map<String, String> requestBody,
//             @PathVariable int appId) {
//         try {
//             AppArtifact app_artifact = app_artifact_service.getAppById(appId);
//             if (app_artifact != null) {
//                 app_artifact.setName(requestBody.get("name"));
//                 int repoArtifactId = Integer.parseInt(requestBody.get("repo_artifact_id"));
//                 RepositoryArtifact repositoryArtifact = new RepositoryArtifact();
//                 repositoryArtifact.setId(repoArtifactId);
//                 app_artifact.setRepo_artifact(repositoryArtifact);
//                 app_artifact_service.createOrUpdateApp(app_artifact);
//                 return new ResponseEntity<>(app_artifact, HttpStatus.CREATED);
//             } else {
//                 return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
//             }
//         } catch (Exception e) {
//             return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//         }
//     }

//     @DeleteMapping("{appId}")
//     public ResponseEntity deleteAppByID(@PathVariable int appId) {
//         try {
//             AppArtifact app_artifact = app_artifact_service.getAppById(appId);
//             if (app_artifact != null) {
//                 app_artifact_service.deleteApp(appId);
//                 return new ResponseEntity<>("App deleted successfully", HttpStatus.OK);
//             } else {
//                 return new ResponseEntity<>("App not found", HttpStatus.NOT_FOUND);
//             }
//         } catch (Exception e) {
//             return ResponseEntity.badRequest().body("Error deleting the App" + e.getMessage());
//         }
//     }

//     @ResponseStatus(HttpStatus.BAD_REQUEST)
//     @ExceptionHandler(MethodArgumentNotValidException.class)
//     public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {

//         Map<String, String> errors = new HashMap<>();

//         ex.getBindingResult().getAllErrors().forEach((error) -> {
//             String fieldName = ((FieldError) error).getField();
//             String errorMessage = error.getDefaultMessage();
//             errors.put(fieldName, errorMessage);
//         });

//         return errors;
//     }
// }
