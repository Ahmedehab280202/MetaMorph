// package com.server.gateway.models;

// import jakarta.persistence.CascadeType;
// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
// import jakarta.persistence.OneToMany;
// import jakarta.validation.Valid;
// import jakarta.validation.constraints.NotBlank;
// import jakarta.validation.constraints.NotNull;
// import jakarta.validation.constraints.Size;

// import java.util.List;

// import org.hibernate.annotations.OnDelete;
// import org.hibernate.annotations.OnDeleteAction;

// import com.fasterxml.jackson.annotation.JsonIdentityInfo;
// import com.fasterxml.jackson.annotation.JsonIdentityReference;
// import com.fasterxml.jackson.annotation.ObjectIdGenerators;

// @Entity
// public class AppArtifact {

//     @Valid

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;

//     @Column(name = "name")
//     @NotBlank(message = "name is mandatory")
//     @NotNull(message = "name is mandatory")
//     @Size(min = 4, max = 50, message = "the minimum amount of charachters is 7 !")
//     private String name;

//     // @OneToMany(mappedBy = "appArtifact",  cascade = CascadeType.REMOVE, orphanRemoval = true)
//     // List<FileArtifact> fileArtifacts;

//     @ManyToOne
//     @JoinColumn(name = "repo_artifact_id", referencedColumnName = "id") // Specify the name of the foreign key column
//     @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
//     @JsonIdentityReference(alwaysAsId = true)
//     @OnDelete(action = OnDeleteAction.CASCADE)
//     private RepositoryArtifact repo_artifact;

//     public AppArtifact() {
//     }

//     public AppArtifact(int id, String name/* , List<FileArtifact> fileArtifacts*/, RepositoryArtifact repo_artifact) {
//         this.id = id;
//         this.name = name;
//         // this.fileArtifacts = fileArtifacts;
//         this.repo_artifact = repo_artifact;
//     }

//     public int getId() {
//         return this.id;
//     }

//     public void setId(int id) {
//         this.id = id;
//     }

//     public String getName() {
//         return this.name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     // public List<FileArtifact> getFileArtifacts() {
//     //     return this.fileArtifacts;
//     // }

//     // public void setFileArtifacts(List<FileArtifact> fileArtifacts) {
//     //     this.fileArtifacts = fileArtifacts;
//     // }

//     public RepositoryArtifact getRepo_artifact() {
//         return this.repo_artifact;
//     }

//     public void setRepo_artifact(RepositoryArtifact repo_artifact) {
//         this.repo_artifact = repo_artifact;
//     }
    
// }
