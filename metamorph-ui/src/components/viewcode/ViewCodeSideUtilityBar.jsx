import React from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { IoLayersOutline } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import CodeEditor from "./CodeEditor";
import "../../CSS/code_view/utilitysidebar.css";

const ViewCodeSideUtilityBar = () => {
  const staticHtml =
    "<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>";
  const staticCss =
    "body {\n  background-color: lightblue;\n}\nh1 {\n  color: white;\n  text-align: center;\n}\np {\n  font-family: verdana;\n  font-size: 20px;\n}";

  // const [staticHtml, setStaticHtml] = useState("");
  // const [staticCss, setStaticCss] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleDownloadCode = () => {
    // Logic for downloading code
  };

  const handleExportToGitHub = () => {
    // Logic for exporting code to GitHub
  };

  // files array
  const files = [
    { name: "Index.html", code: staticHtml },
    { name: "Index.css", code: staticCss },
  ];

  return (
    <div className="code-view-page-body">
      <div className="utility-sidebar">
        <div className="utility-icons-wrapper">
          <div className="top-buttons-wrapper">
            <div className="layers-content">
              <IoLayersOutline className="code-view-layer-component" />
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
            <h3 className="code-structure-body-header">Frontend Code:</h3>
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
                    alignItems: "center"
                  }}
                >
                  {" "}
                  {/* button */}
                  <div><FaFileAlt /></div>
                  <span>{file.name}</span>
                  
                </button>
              ))}
            </div>
            {/* <h3 className="code-structure-body-header">Backend Code:</h3>
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
                }}
              >
                {" "}
                 button
                {file.name}
              </button>
            ))}
          </div> */}
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
