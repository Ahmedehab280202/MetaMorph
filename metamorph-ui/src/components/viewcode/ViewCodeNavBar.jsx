import { useState } from "react";
import { PiButterfly } from "react-icons/pi";
import { FaFileExport } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "../../CSS/code_view/codeviewnav.css";

function ViewCodeNavBar() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="navbar">
        <div className="code-view-logo">
          <PiButterfly className="nav_logo_icon" />
        </div>

        <div className="code-view-project-name-container">
          <div className="project-title-wrapper">Ali Ismail's Project</div>
        </div>

        <div className="code-view-nav-buttons">
          <button class="export-btn">
            <div className="export-btn-container">
              <div>
                <FaFileExport />
              </div>
              <span className="">Export</span>
            </div>
          </button>

          <button class="publish-btn" onClick={toggleModal}>
            <div className="publish-btn-container">
              <div>
                <FaGithub />
              </div>
              <span className="">Publish</span>
            </div>
          </button>
        </div>
      </div>
      {modal && (
        <div className="publish-modal">
          <div onClick={toggleModal} className="codeview-overlay"></div>
          <div className="codeview-modal-content">
            <div className="login-modal-header">
              <h2>Publish your code to github Repository</h2>
            </div>
            <form action="#" className="login-form" >
              <div className="input_box">
                <label for="Github Username">
                  <b>Github Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Github Username"
                  name="Github Username"
                />
              </div>  
              <div className="input_box">
                <label for="Access Token">
                  <b>Access Token</b>
                </label>
                <input
                  type="text"
                  placeholder="Access Token"
                  name="Access Token"
                />
              </div>
              <div className="input_box">
                <label for="Repositoryname">
                  <b>Repositoryname</b>
                </label>
                <input
                  type="Repositoryname"
                  placeholder="Enter Repositoryname"
                  name="Repositoryname"
                />
              </div>
              <div className="button-container">
                <button className="form-button">Publish</button>
              </div>
            </form>
            <span className="close-modal" onClick={toggleModal}>
              &times;
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewCodeNavBar;
