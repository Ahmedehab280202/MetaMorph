package com.server.gateway.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.server.gateway.models.AppArtifact;
import com.server.gateway.models.FileArtifact;
import com.server.gateway.models.ProjectArtifact;
import com.server.gateway.models.User;
import com.server.gateway.models.WorkSpace;
import com.server.gateway.services.ProjectArtifactService;
import com.server.gateway.services.WorkSpaceService;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import jakarta.validation.Valid;

import org.springframework.validation.FieldError;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@RestController
@RequestMapping("projectartifact")
public class ProjectArtifactController {

    @Autowired
    ProjectArtifactService proj_arti_service;

    @Autowired
    WorkSpaceService work_space_Service;

    @GetMapping("")
    public ResponseEntity getAllProjArtifacts() {
        try {
            List<ProjectArtifact> proj_artifacts = proj_arti_service.getAllProjects();
            if (proj_artifacts != null) {
                return new ResponseEntity<>(proj_artifacts, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("No Project artifacts found!", HttpStatus.OK);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error getting the Projects!" + e.getMessage());
        }
    }

    @GetMapping("{projId}")
    public ResponseEntity getProjectArtifactById(@PathVariable int projId) {
        try {
            ProjectArtifact proj_arti = proj_arti_service.getProjById(projId);
            if (proj_arti != null) {
                return new ResponseEntity<>(proj_arti, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("No Project artifact found!", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error getting the Project!" + e.getMessage());
        }
    }

    @GetMapping("{projId}/apps")
    public ResponseEntity getAppsByprojectId(@PathVariable int projId) {
        try {
            ProjectArtifact proj_arti = proj_arti_service.getProjById(projId);
            if (proj_arti != null) {
                List<AppArtifact> appArtifacts = proj_arti_service.getAppsByProjectId(projId);

                if (appArtifacts != null) {
                    return new ResponseEntity<>(appArtifacts, HttpStatus.OK);
                } else {
                    return new ResponseEntity<>("there is no apps in this project", HttpStatus.NOT_FOUND);
                }
            } else {
                return new ResponseEntity<>("there is no project with id " + projId, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error getting the Project of id " + projId + " " + e.getMessage());
        }
    }

    @GetMapping("{projId}/collaborators")
    public ResponseEntity getCollaboratorsByProjectId(@PathVariable int projId) {
        try {
            ProjectArtifact proj_arti = proj_arti_service.getProjById(projId);
            if (proj_arti != null) {
                List<User> collaborators = proj_arti_service.getCollaboratorsByProjectId(projId);

                if (collaborators != null) {
                    return new ResponseEntity<>(collaborators, HttpStatus.OK);
                } else {
                    return new ResponseEntity<>("No collaborators found !", HttpStatus.NOT_FOUND);
                }
            } else {
                return new ResponseEntity<>("there is no project with id " + projId, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error getting the Project of id " + projId + " " + e.getMessage());
        }
    }

    @PostMapping("")
    public ResponseEntity createProjjectArtifact(@Valid @RequestBody Map<String, String> request_body) {
        try {
            // Retrieve the currently logged-in user
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            User loggedInUser = (User) authentication.getPrincipal();

            // Check if the user has a workspace
            WorkSpace workSpace = loggedInUser.getWork_space();
            if (workSpace == null) {
                return ResponseEntity.badRequest()
                        .body("User does not have a workspace. Please create a workspace first.");
            }

            // Retrieve the project count for the workspace
            int existingProjectsCount = work_space_Service.getProjectCountByWorkspaceId(workSpace.getId());
            if (existingProjectsCount >= 3) {
                return ResponseEntity.badRequest().body("Maximum number of projects reached for this workspace.");
            }

            String name = request_body.get("name");

            // Create a new project artifact
            ProjectArtifact proj_artifact = new ProjectArtifact();
            proj_artifact.setName(name);
            proj_artifact.setWork_space(workSpace);

            // Save the project artifact
            ProjectArtifact created_proj_artifact = proj_arti_service.createOrUpdate(proj_artifact);
            return new ResponseEntity<>(created_proj_artifact, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("{projId}")
    public ResponseEntity /* <ProjectArtifact> */ updateProjectArtifact(
            @Valid @RequestBody Map<String, String> request_body, @PathVariable int projId) {
        try {
            ProjectArtifact proj_arti = proj_arti_service.getProjById(projId);
            if (proj_arti != null) {
                proj_arti.setName(request_body.get("name"));
                int work_space_id = Integer.parseInt(request_body.get("work_space_id"));

                WorkSpace work_space = work_space_Service.getWorkSpaceById(work_space_id);

                if (work_space == null) {
                    return ResponseEntity.badRequest().body("WorkSpace with ID " + work_space_id + " not found");
                }
                work_space.setId(work_space_id);
                proj_arti.setWork_space(work_space);
                proj_arti_service.createOrUpdate(proj_arti);
                return new ResponseEntity<>(proj_arti, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("{projid}")
    public ResponseEntity deleteFileArtifact(@PathVariable int projid) {
        try {
            ProjectArtifact proj_arti = proj_arti_service.getProjById(projid);

            if (proj_arti != null) {
                proj_arti_service.deleteProj(projid);
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
