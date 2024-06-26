import React from "react";
import '../../CSS/workspace_styling/project.css';
import { useNavigate } from "react-router-dom";
import { setProjectsByUser } from '../../services/MetadataService';
import { setProjectNameLocalStorage } from "../../services/FrontEndCodeService";


const Project = ({ project, onSelect, projectName  }) => {

  let navigate =  useNavigate();

  const handleClick = () => {
    console.log(projectName);
    setProjectNameLocalStorage(projectName);
    navigate("/codeview")
  };

  return (
    <div className="project_card" onClick={() => handleClick(projectName)}>
      <div className="card_avatar">
        <div className="card_icon_logo">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#999"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.037 12.48l-2.9-1.655a5.802 5.802 0 001.762-2.03 5.73 5.73 0 00.046-5.208 5.797 5.797 0 00-1.728-2.06 5.914 5.914 0 00-5.184-.923 5.865 5.865 0 00-2.345 1.335A5.777 5.777 0 006.2 4.176H3.453a2.51 2.51 0 00-1.752.723 2.454 2.454 0 00-.73 1.732v6.413c.001.65.263 1.275.728 1.735a2.51 2.51 0 001.754.725h5.018v2.437c0 1.074.552 1.695 1.337 1.695a2.188 2.188 0 001.07-.322l7.168-4.086c1.314-.756 1.314-1.992-.01-2.748zm-.396 2.07l-7.168 4.087a1.39 1.39 0 01-.675.218c-.476 0-.551-.573-.551-.909V9.77c0-.341.072-.908.551-.908.24.013.473.088.675.218l7.168 4.086c.368.215.598.475.598.696 0 .222-.223.476-.598.69zM1.761 6.631c0-.444.178-.87.496-1.185a1.71 1.71 0 011.196-.494h2.522a5.724 5.724 0 00.312 3.388 5.8 5.8 0 002.184 2.629v3.746H3.453a1.71 1.71 0 01-1.194-.491 1.671 1.671 0 01-.498-1.18V6.63zm5.291-2.455A5.005 5.005 0 018.453 2.31a5.08 5.08 0 012.104-1.039 5.115 5.115 0 012.35.013 5.08 5.08 0 012.091 1.063 5.003 5.003 0 011.38 1.882 4.95 4.95 0 01-.35 4.508 5.027 5.027 0 01-1.655 1.652L10.881 8.39a2.187 2.187 0 00-1.07-.321c-.79 0-1.336.623-1.336 1.695v.227a4.99 4.99 0 01-1.576-2.282 4.937 4.937 0 01.153-3.533z"></path>
          </svg>
        </div>
      </div>

      <div className="card_content">
        <p className="card_content_header">{project.projectName}</p>
        <div className="projects_details">
          <small className="edit_details">
            Edited 18 hours ago
            <span className="details_dot"> . </span>
          </small>
          <small className="creation_date"> created on 22 Apr 24 </small>
        </div>
      </div>
    </div>
  );
};

export default Project;
