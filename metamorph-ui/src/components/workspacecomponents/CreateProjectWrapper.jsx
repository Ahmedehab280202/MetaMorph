import React from "react";
import { useState, useEffect } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { RawDataModel } from "../../models/MetadataModel";
import csvtojson from "csvtojson";
import axios from "axios";
import "../../CSS/workspace_styling/createprojectwrapper.css";

const CreateProjectWrapper = () => {
  /* the figma design data required usestates */
  const [projectName, setProjectName] = useState("");
  const [figmaToken, setFigmaToken] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [rawUiData, setRawUiData] = useState(null);
  const [error, setError] = useState(null);

  /* the csv file required usestates */
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  const [filename, setFileName] = useState("No selected file");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "No selected File");
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
    setFileName(droppedFile ? droppedFile.name : "No selected File");
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (
      projectName === "" ||
      figmaToken === "" ||
      fileUrl === "" ||
       file === null
    ) {
      console.log("Please fill all the fields");
      return;
    } else {
      const match = fileUrl.match(/\/file\/([^\/?]+)/);
      const fileKey = match ? match[1] : null; //daha keda m3nah en ana ba5osh fawel matching group law btmatch

      const url = `https://api.figma.com/v1/files/${fileKey}`;
      const headers = {
        "X-Figma-Token": figmaToken,
      };

      try {
        const response = await axios.get(url, { headers });
        const rawData = response.data.document.children.find(
          (node) => node.type === "CANVAS"
        ).children;
        setRawUiData(JSON.stringify(rawData, null, 2));
        console.log(rawUiData)
        setError(null);
      } catch (error) {
        console.error("Error:", error);
        setError(
          "Failed to fetch data. Please check your Figma token and file URL."
        );
      }

      if (file) {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async (event) => {
          const csvData = event.target.result;
          console.log("elraw daata");
          console.log(csvData);
          const jsonArray = await csvtojson().fromString(csvData);
          setJsonData(jsonArray);
          console.log("eljsondata taht 1!");
          console.log(jsonData);
          console.log("eljsondata fo2 1!"); 
        };
      }

      // try{
      //   console.log("test")
      //   const projectData = new rawDataModel(projectName, figmaToken, fileUrl, rawUiData, jsonData);
      //   console.log(projectData);
      // }catch(error){
      //   console.log("error while creating the project object !")
      // }
    }
  };

  useEffect(() => {
    // Log jsonData whenever it changes
    // console.log("eljsondata useeffect taht 2");
    // console.log(jsonData);
    // console.log("eljsondata fo2 2");
    // console.log("eljsondata useeffect taht 2");
    // console.log(console.log(JSON.stringify(rawUiData, null, 2)));
    // console.log("eljsondata fo2 2");
    // console.log("with rawdata men 8er JSON.stringify(rawUiData, null, 2))")
    const projectData = new RawDataModel(projectName, figmaToken, fileUrl, rawUiData, jsonData);
    console.log(projectData)
    console.log(rawUiData);
    // console.log("rawdata with JSON.stringify(rawUiData, null, 2))")
    // const testprojectData = new rawDataModel(projectName, figmaToken, fileUrl, JSON.stringify(rawUiData, null, 2), jsonData);
    // console.log("projectdata: ", projectData)

  }, [jsonData]);

  return (
    <div className="create-project-input-wrapper">
      <div className="create-project-header">
        <h2>Create Project</h2>
      </div>
      <form action="" className="create-project-form">
        <div className="create-project-inputs">
          <div className="input_box">
            <label for="project name">
              <b>Project Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter project name"
              name="projectname"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label for="figmalink">
              <b>Figma Link</b>
            </label>
            <input
              type="text"
              placeholder="Enter figma link"
              name="figmalink"
              value={fileUrl}
              onChange={(e) => setFileUrl(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label for="figma token">
              <b>Figma Token</b>
            </label>
            <input
              type="text"
              placeholder="Enter figma token"
              name="username"
              value={figmaToken}
              onChange={(e) => setFigmaToken(e.target.value)}
            />
          </div>
        </div>
        {/*  */}
        <div
          onClick={() => document.querySelector(".input-field").click()}
          className="input-upload-container"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".csv"
            name=""
            id=""
            className="input-field"
            hidden
            onChange={handleFileChange}
          />
          {file ? (
            <img src="" width={150} height={150} alt={filename} />
          ) : (
            <>
              <MdCloudUpload color="#7f1077" size={60} />
              <p>Browse Files to upload</p>
            </>
          )}
        </div>
        <section className="uploaded-row">
          <AiFillFileImage color="#fff" />
          <span>
            {filename}
            <MdDelete
              onClick={() => {
                setFileName("No selected File");
                setFile(null);
              }}
            />
          </span>
        </section>
        {/*  */}
        <div className="create-project-btn-container">
          <button className="create-project-btn" onClick={handleUpload}>
            create project
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectWrapper;
