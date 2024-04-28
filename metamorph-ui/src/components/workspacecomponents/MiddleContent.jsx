import React, { useState } from "react";
import FileUploader from "./FileUploader";
import "../../CSS/workspace_styling/middlecontent.css";

const MiddleContent = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [file, setFile] = useState();

  function handleFile(event) {
    setFile(event.target.files[0]);
    console.log(file);
  }

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
              height: "550px", // Set height to 500px
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="create-project-input-wrapper">
              <div className="create-project-header">
                <h2>Create Project</h2>
              </div>
              {/* men awel hena tmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaam */}
              <form action="" className="create-project-form">
                <div className="create-project-inputs">
                  <div className="input_box">
                    <label for="project name">
                      <b>project name</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter project name"
                      name="projectname"
                    />
                  </div>
                  <div className="input_box">
                    <label for="figmalink">
                      <b>figma link</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter figma link"
                      name="figmalink"
                    />
                  </div>
                  <div className="input_box">
                    <label for="figma token">
                      <b>figma token</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter figma token"
                      name="username"
                    />
                  </div>
                </div>
                  <FileUploader />
              </form>
            </div>
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
