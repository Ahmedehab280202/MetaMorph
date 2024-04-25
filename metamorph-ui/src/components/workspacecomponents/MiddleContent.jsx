import React, { useState } from "react";
import "../../CSS/workspace_styling/middlecontent.css";

const MiddleContent = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

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
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <div className="content-wrapper">
              <div className="left-content">
                <h4>Generate Front End code</h4>
                <div className="input-box">
                  <span className="details">Figma Url</span>
                  <input
                    type="text"
                    placeholder="Enter the Figma Url"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Figma token</span>
                  <input
                    type="text"
                    placeholder="Enter Figma access token"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Project Name</span>
                  <input
                    type="text"
                    placeholder="Enter Project Name"
                    required
                  />
                </div>
              </div>
              <div className="vertical-line"></div>
              <div className="right-content">
                <h4>Generate Back End code</h4>
                
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiddleContent;
