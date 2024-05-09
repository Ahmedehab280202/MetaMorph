// package com.server.gateway.models;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
// import jakarta.validation.Valid;
// import jakarta.validation.constraints.DecimalMin;
// import jakarta.validation.constraints.NotBlank;
// import jakarta.validation.constraints.NotNull;
// import jakarta.validation.constraints.Size;


// import org.hibernate.annotations.OnDelete;
// import org.hibernate.annotations.OnDeleteAction;

// import com.fasterxml.jackson.annotation.JsonIdentityInfo;
// import com.fasterxml.jackson.annotation.JsonIdentityReference;
// import com.fasterxml.jackson.annotation.ObjectIdGenerators;

// @Entity
// public class FileArtifact {
    
//     @Valid

    
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;

//     @Column(name="name")
//     @NotBlank(message = "name is mandatory")
//     @NotNull(message = "name is mandatory")
//     @Size(min = 7, max = 50, message = "the minimum amount of charachters is 7 !")
//     private String name;

//     @Column(name="extension")
//     @NotBlank(message = "extension is mandatory")
//     @NotNull(message = "extension is mandatory")
//     @Size(min = 2, max = 20, message = "the minimum amount of charachters is 2 !")
//     private String extension;

//     @Column(name="language")
//     @NotBlank(message = "language is mandatory")
//     @NotNull(message = "language is mandatory")
//     @Size(min = 2, max = 50, message = "the minimum amount of charachters is 2 !")
//     private String language;

//     @Column(name="size")
//     @NotNull(message = "size is mandatory")
//     @DecimalMin(value = "0.9", inclusive = false, message = "size must be greater than 0.9")
//     private Double size;

//     @Column(name="text")
//     @NotBlank(message = "text is mandatory")
//     // @Size(min = 7, max = 50, message = "the minimum amount of charachters is 7 !")
//     private String text;

//     @Column(name="path_directory")
//     @NotBlank(message = "path_directory is mandatory")
//     @NotNull(message = "path_directory is mandatory")
//     private String path_directory;

//     @ManyToOne
//     @JoinColumn(name = "app_artifact_id", referencedColumnName = "id") // Specify the name of the foreign key column
//     @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
//     @JsonIdentityReference(alwaysAsId = true)
//     @OnDelete(action = OnDeleteAction.CASCADE)
//     private AppArtifact appArtifact;

//     public FileArtifact(){

//     }//When you use JPA entities, you need to provide a default (no-argument) constructor explicitly, along with your parameterized constructor,
//     // especially if you're defining a custom constructor with arguments 


//     public FileArtifact(int id, String name, String extension, String language, Double size, String text, String path_directory, AppArtifact appArtifact) {
//         this.id = id;
//         this.name = name;
//         this.extension = extension;
//         this.language = language;
//         this.size = size;
//         this.text = text;
//         this.path_directory = path_directory;
//         this.appArtifact = appArtifact;
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

//     public String getExtension() {
//         return this.extension;
//     }

//     public void setExtension(String extension) {
//         this.extension = extension;
//     }

//     public String getLanguage() {
//         return this.language;
//     }

//     public void setLanguage(String language) {
//         this.language = language;
//     }

//     public Double getSize() {
//         return this.size;
//     }

//     public void setSize(Double size) {
//         this.size = size;
//     }

//     public String getText() {
//         return this.text;
//     }

//     public void setText(String text) {
//         this.text = text;
//     }

//     public String getPath_directory() {
//         return this.path_directory;
//     }

//     public void setPath_directory(String path_directory) {
//         this.path_directory = path_directory;
//     }

//     public AppArtifact getAppArtifact() {
//         return this.appArtifact;
//     }

//     public void setAppArtifact(AppArtifact appArtifact) {
//         this.appArtifact = appArtifact;
//     }

// }
