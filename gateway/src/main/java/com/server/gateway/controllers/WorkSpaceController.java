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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.gateway.models.WorkSpace;
import com.server.gateway.repositories.UserRepository;
import com.server.gateway.models.User;

import com.server.gateway.services.WorkSpaceService;

import jakarta.validation.Valid;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@RestController
@RequestMapping("workspace")
public class WorkSpaceController {

    @Autowired
    WorkSpaceService workspace_service;

    @Autowired
    UserRepository user_repo;

    @GetMapping("")
    public ResponseEntity getAllWorkSpaces() {
        try {
            List<WorkSpace> work_spaces = workspace_service.getAllWorkSpaces();
            if (work_spaces != null) {
                return new ResponseEntity<>(work_spaces, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("No workspaces found !", HttpStatus.OK);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error getting the Workspaces!" + e.getMessage());
        }
    }

    @GetMapping("{workspaceID}")
    public ResponseEntity getWorkSpaceById(@PathVariable int workspaceID) {
        try {
            WorkSpace work_space = workspace_service.getWorkSpaceById(workspaceID);
            if (work_space != null) {
                return new ResponseEntity<>(work_space, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("No workspace found with this id: " + workspaceID, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body("error getting the Workspace with this id: " + workspaceID + e.getMessage());
        }
    }

    @PostMapping("")
    public ResponseEntity<String> createWorkSpace(@Valid @RequestBody Map<String, String> request_body) {
        try {
            String name = request_body.get("name");
            String description = request_body.get("description");
            int project_limit = Integer.parseInt(request_body.get("project_limit"));
    
            // Retrieve the currently logged-in user
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            User loggedInUser = (User) authentication.getPrincipal();
    
            // Create a new workspace
            WorkSpace work_space = new WorkSpace();
            work_space.setName(name);
            work_space.setDescription(description);
            work_space.setProject_limit(project_limit);
    
            // Set the workspace owner
            work_space.setWorkspace_owner(loggedInUser);
    
            // Save the workspace
            workspace_service.createOrUpdate(work_space);
    
            // Associate the workspace with the user
            loggedInUser.setWork_space(work_space);
    
            // Save the updated user with the workspace association
            user_repo.save(loggedInUser);
    
            return new ResponseEntity<>("WorkSpace created successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error creating the Workspace: " + e.getMessage());
        }
    }

    @PutMapping("{workspaceID}")
    public ResponseEntity<String> updateWorkSpace(@PathVariable int workspaceID, @RequestBody Map<String,String> request_body){
        try{
            WorkSpace work_space = workspace_service.getWorkSpaceById(workspaceID);
            if(work_space != null){
                work_space.setName((String) request_body.get("name"));
                work_space.setDescription((String) request_body.get("description"));
                work_space.setProject_limit(Integer.parseInt((String) request_body.get("project_limit")));
                workspace_service.createOrUpdate(work_space);
                return new ResponseEntity<>("WorkSpace with ID: " + workspaceID + " is updated successfully", HttpStatus.CREATED);
            }else {
                return new ResponseEntity<>("No workspace found with this id: " + workspaceID, HttpStatus.NOT_FOUND);
            }
        }catch(Exception e){
            return ResponseEntity.badRequest().body("Error updating the Workspace of ID: " + workspaceID + e.getMessage());
        }
    }

    @DeleteMapping("{workspaceID}")
    public ResponseEntity deleteWorkSpace(@PathVariable int workspaceID){
        try{
            WorkSpace work_space = workspace_service.getWorkSpaceById(workspaceID);
            if(work_space != null){
                workspace_service.deleteWorkspace(workspaceID);
                return new ResponseEntity<>("WorkSpace with ID: " + workspaceID + " is deleted successfully", HttpStatus.OK);
            }else{
                return new ResponseEntity<>("No workspace found with this id: " + workspaceID, HttpStatus.NOT_FOUND);
            }
        }catch(Exception e){
            return ResponseEntity.badRequest().body("Error deleting the Workspace of ID: " + workspaceID + e.getMessage());
        }
    }
}
