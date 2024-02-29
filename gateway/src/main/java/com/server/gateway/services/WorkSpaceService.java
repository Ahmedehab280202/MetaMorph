package com.server.gateway.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.gateway.models.WorkSpace;
import com.server.gateway.repositories.WorkSpaceRepository;

@Service
public class WorkSpaceService {
    
    @Autowired
    WorkSpaceRepository workspace_repo;

    public List<WorkSpace> getAllWorkSpaces(){
        return workspace_repo.findAll();
    }

    public WorkSpace getWorkSpaceById(int id){
        return workspace_repo.findById(id).orElse(null);
    }

    public WorkSpace createOrUpdate(WorkSpace work_space){
        return workspace_repo.save(work_space);
    }

    public void deleteWorkspace(int id){
        workspace_repo.deleteById(id);
    }

}
