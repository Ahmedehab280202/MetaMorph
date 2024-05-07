import React from "react";
import { useState, useEffect } from "react";
import "react-treeview/react-treeview.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { IoLayersOutline } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { getFrontEndData } from "../../services/FrontEndCodeService";

import CodeEditor from "./CodeEditor";
import "../../CSS/code_view/utilitysidebar.css";

const ViewCodeSideUtilityBar = () => {
  let navigate = useNavigate();

  const [files, setFiles] = useState([]);
  const [htmlFiles, setHtmlFiles] = useState([]);

  const [modelFiles, setModelFiles] = useState([]);
  const [controllerFiles, setControllerFiles] = useState([]);
  const [repositoryFiles, setrepositroyFiles] = useState([]);
  const [serviceFiles, setserviceFiles] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const projectName = "l"; // wala hot hena esm elproject yala mtnsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaash------>!!!!!!!!!1
    getFrontEndData(projectName).then((response) => {
      const responseData = JSON.parse(response.data[0].responseData);
      console.log("response", JSON.parse(response.data[0].responseData));

      setHtmlFiles(
        responseData.html_css_code.map((obj) => ({
          name: obj.name,
          code: obj.html + "\n\n" + obj.css,
        }))
      );
      setModelFiles(
        responseData.java_code.map((obj) => ({
          name: obj.name,
          code: obj.model_file,
        }))
      );
      setControllerFiles(
        responseData.java_code.map((obj) => ({
          name: obj.name,
          code: obj.controller_file,
        }))
      );
      setserviceFiles(
        responseData.java_code.map((obj) => ({
          name: obj.name,
          code: obj.service_file,
        }))
      );
      setrepositroyFiles(
        responseData.java_code.map((obj) => ({
          name: obj.name,
          code: obj.repository_file,
        }))
      );
    });
  }, []);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleArrowicon = () => {
    navigate("/workspace");
  };

  return (
    <div className="code-view-page-body">
      <div className="utility-sidebar">
        <div className="utility-icons-wrapper">
          <div className="top-buttons-wrapper">
            <div className="layers-content">
              <IoLayersOutline className="code-view-layer-component" />
            </div>
            <div className="navigator-arrow">
              <FaArrowLeft
                className="code-view-navigator-arrow"
                onClick={handleArrowicon}
              />
            </div>
          </div>
          <div className="bottom-buttons-wrapper">
            <div className="code-view-documentation-container">
              <HiDocumentDuplicate className="code-view-documentation-icon" />
            </div>
            <div className="code-view-user-profile-wrapper">
              <FaUserCircle className="code-view-user-icon" />
            </div>
          </div>
        </div>
        <div className="code-structure">
          <div className="code-structure-header">
            <span>Explorer</span>
            <span>+</span>
          </div>
          <h3 className="code-structure-body-header">Project Code:</h3>
          <div class="scrollbox">
            <div class="scrollbox-inner">
              {htmlFiles.map((file, index) => (
                <button
                  key={index}
                  type="button"
                  className={`codeview-file-button ${selectedFile === file ? 'selected' : ''}`}
                  onClick={() => handleFileSelect(file)}
                >
                  {" "}
                  <div>
                    <FaFileAlt />
                  </div>
                  <span>{file.name}.html</span>
                </button>
              ))}
              {modelFiles.map((file, index) => (
                <button
                  key={index}
                  type="button"
                  className={`codeview-file-button ${selectedFile === file ? 'selected' : ''}`}
                  onClick={() => handleFileSelect(file)}
                >
                  {" "}
                  <div>
                    <FaFileAlt />
                  </div>
                  <span>{file.name}Model.java</span>
                </button>
              ))}
              {controllerFiles.map((file, index) => (
                <button
                  key={index}
                  type="button"
                  className={`codeview-file-button ${selectedFile === file ? 'selected' : ''}`}
                  onClick={() => handleFileSelect(file)}
                >
                  {" "}
                  <div>
                    <FaFileAlt />
                  </div>
                  <span>{file.name}Controller.java</span>
                </button>
              ))}
              {serviceFiles.map((file, index) => (
                <button
                  key={index}
                  type="button"
                  className={`codeview-file-button ${selectedFile === file ? 'selected' : ''}`}
                  onClick={() => handleFileSelect(file)}
                >
                  {" "}
                  <div>
                    <FaFileAlt />
                  </div>
                  <span>{file.name}Service.java</span>
                </button>
              ))}
              {repositoryFiles.map((file, index) => (
                <button
                  key={index}
                  type="button"
                  className={`codeview-file-button ${selectedFile === file ? 'selected' : ''}`}
                  onClick={() => handleFileSelect(file)}
                >
                  {" "}
                  <div>
                    <FaFileAlt />
                  </div>
                  <span>{file.name}Repository.java</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="code-inspection-view">
        <h2 className="mb-4" style={{ fontSize: "30px" }}>
          Generated Code
        </h2>
        {/* <CodeEditor
          code={selectedFile ? selectedFile.code : "No code"}
          style={{ fontSize: "24px" }}
        /> */}
      </div>
    </div>
  );
};

export default ViewCodeSideUtilityBar;
