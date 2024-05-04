import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { IoLayersOutline } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { getFrontEndData } from "../../services/FrontEndCodeService";
import CodeEditor from "./CodeEditor";
import "../../CSS/code_view/utilitysidebar.css";

const ViewCodeSideUtilityBar = () => {

  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const projectName = "l"; // wala hot hena esm elproject yala mtnsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaash------>!!!!!!!!!1
    getFrontEndData(projectName).then((response) => {
      const htmlFiles = response.data
        .filter((data) => data.htmlCode)
        .map((data) => ({
          name: "Index.html",
          code: data.htmlCode,
        }));
  
      const cssFiles = response.data
        .filter((data) => data.CssCode)
        .map((data) => ({
          name: "style.css",
          code: data.CssCode,
        }));

      const modelFiles = response.data
        .filter((data) => data.models)
        .map((data) => ({
          name: "models.java",
          code: data.models,
        }));
      
      const controllerFiles = response.data
        .filter((data) => data.controllers)
        .map((data) => ({
          name: "controllers.java",
          code: data.controllers,
        }));

      const serviceFiles = response.data
        .filter((data) => data.services)
        .map((data) => ({
          name: "services.java",
          code: data.services,
        }));

        const RepositoryFiles = response.data
        .filter((data) => data.repositories)
        .map((data) => ({
          name: "repositories.java",
          code: data.repositories,
        }));
  
      setFiles([...htmlFiles, ...cssFiles, ...modelFiles, ...controllerFiles, ...serviceFiles, ...RepositoryFiles]);
    });
  }, []);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  return (
    <div className="code-view-page-body">
      <div className="utility-sidebar">
        <div className="utility-icons-wrapper">
          <div className="top-buttons-wrapper">
            <div className="layers-content">
              <IoLayersOutline className="code-view-layer-component"/>
            </div>
            <div className="navigator-arrow">
              <FaArrowLeft className="code-view-navigator-arrow" />
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
          <div className="code-structure-body">
            <h3 className="code-structure-body-header">Project Code:</h3>
            <div className="frontend-group">
              {files.map((file, index) => (
                <button
                  key={index}
                  type="button"
                  className={`list-group-item list-group-item-action ${
                    selectedFile === file ? "active" : ""
                  }`}
                  onClick={() => handleFileSelect(file)}
                  style={{
                    fontSize: "15px",
                    padding: "10px 10px",
                    height: "30px",
                    width: "150px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  {/* button */}
                  <div>
                    <FaFileAlt />
                  </div>
                  <span>{file.name}</span>
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
        <CodeEditor
          code={selectedFile ? selectedFile.code : "No code"}
          style={{ fontSize: "24px" }}
        />
      </div>
    </div>
  );
};

export default ViewCodeSideUtilityBar;
