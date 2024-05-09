// package com.server.gateway.services;

// import java.util.List;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.server.gateway.models.AppArtifact;
// import com.server.gateway.models.ProjectArtifact;
// import com.server.gateway.models.RepositoryArtifact;
// import com.server.gateway.models.User;
// import com.server.gateway.repositories.ProjectArtifactRepository;

// @Service
// public class ProjectArtifactService {

//     @Autowired
//     ProjectArtifactRepository proj_artifact_repo;

//     public List<ProjectArtifact> getAllProjects() {
//         return proj_artifact_repo.findAll();
//     }

//     public ProjectArtifact getProjById(Integer id) {
//         return proj_artifact_repo.findById(id).orElse(null);
//     }

//     public ProjectArtifact createOrUpdate(ProjectArtifact proj_artifact) {
//         return proj_artifact_repo.save(proj_artifact);
//     }

//     public void deleteProj(Integer id) {
//         proj_artifact_repo.deleteById(id);
//     }

//     public List<AppArtifact> getAppsByProjectId(Integer projectId) {
//         // Fetch the project artifact by ID
//         ProjectArtifact projectArtifact = proj_artifact_repo.findById(projectId).orElse(null);
//         if (projectArtifact == null) {
//             // Project not found
//             return null;
//         }

//         // Get the associated repository artifact
//         RepositoryArtifact repositoryArtifact = projectArtifact.getRepo_artifact();
//         if (repositoryArtifact == null) {
//             // Repository artifact not found
//             return null;
//         }

//         // Get the associated app artifacts
//         List<AppArtifact> appArtifacts = repositoryArtifact.getApp_artifact();
//         return appArtifacts;
//     }

//     public List<User> getCollaboratorsByProjectId(Integer projectId) {
//         ProjectArtifact projectArtifact = proj_artifact_repo.findById(projectId).orElse(null);
//         List<User> collaborators = projectArtifact.getCollaborators();
//         return collaborators;
//     }
// }
