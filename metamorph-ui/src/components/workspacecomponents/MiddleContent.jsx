import React, { useState } from "react";
import CreateProjectWrapper from "./CreateProjectWrapper";
import csvtojson from 'csvtojson';

import "../../CSS/workspace_styling/middlecontent.css";

const MiddleContent = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // const [jsonData, setJsonData] = useState(null);
  

  // const handleUpload = () => {
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsText(file);
  //     reader.onload = async (event) => {
  //       const csvData = event.target.result;
  //       const jsonArray = await csvtojson().fromString(csvData);
  //       setJsonData(jsonArray);
  //     };
  //   }
  // };



  return (
    <div className="dashboard_middle_content">
      <div className="dashboard_middle_content_text">
        <div className="dashboard_middle_content_text_title">
          <div className="dashboard_middle_content_text_title_wrapper">
            <span className="title_container">My workspace</span>
          </div>
        </div>
        <div className="dashboard_middle_content_details">
          <div className="dashboard_middle_content_details_info">
            <div className="workspace_plan_type">Free Plan</div>
            <div className="workspace_number_projects">
              1 of 3 projects used
            </div>
          </div>
          <button className="Manage_btn">
            <span className="manage_btn_text">Manage</span>
          </button>
        </div>
      </div>
      <div className="dashboard_middle_content_create_btn">
        <button className="create_project_btn" onClick={toggleModal}>
          + Create Project
        </button>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div
            className="modal-content"
            style={{
              position: "absolute",
              background: "#f1f1f1",
              padding: "14px 28px",
              borderRadius: "3px",
              width: "750px", // Set width to 700px
              height: "593px", // Set height to 500px
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CreateProjectWrapper />
            <span className="close-modal" onClick={toggleModal}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiddleContent;
