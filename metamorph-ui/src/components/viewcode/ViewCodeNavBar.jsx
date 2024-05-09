import { useState } from "react";
import { PiButterfly } from "react-icons/pi";
import { FaFileExport } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "../../CSS/code_view/codeviewnav.css";
import {
  getFrontEndData,
  getProjectNameLocalStorage,
} from "../../services/FrontEndCodeService";
import { RepositoryData } from "../../models/GithubPublish";
import { publishRepository } from "../../services/PublishService";

import { exportService } from "../../services/ExportService";

function ViewCodeNavBar() {
  const projectName = getProjectNameLocalStorage();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [githubUserName, setGithubUserName] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [repositoryName, setRepositoryName] = useState("");
  const [html_css_code, sethtml_css_code] = useState("");
  const [java_code, setjava_code] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    getFrontEndData(projectName).then(async (response) => {
      const data = JSON.parse(response.data[0].responseData);

      if (
        githubUserName === "" ||
        accessToken === "" ||
        repositoryName === ""
      ) {
        console.log("Please fill all the fields");
        return;
      } else {
        const publishData = new RepositoryData(
          githubUserName,
          accessToken,
          repositoryName,
          data.html_css_code,
          data.java_code
        );
        console.log("publishData:", publishData);
        try {
          const response = await publishRepository(publishData);
          console.log(response)
          return response;
        } catch (error) {
          console.error("publish to github  error:", error);
        }
      }
    });
  };

  const handleExport = (e) => {
    e.preventDefault();

    getFrontEndData(projectName).then((response) => {
      const data = JSON.parse(response.data[0].responseData);
      exportService(data).then(async (response) => {
        if (response.status == 200) {
          const blob = new Blob([response.data], { type: "application/zip" });

          // Create a URL for the Blob
          const url = window.URL.createObjectURL(blob);

          // Create a link element and click it to trigger the download
          const link = document.createElement("a");
          link.href = url;
          link.download = "MyGenApp.zip";
          link.click();

          // Clean up by revoking the URL
          window.URL.revokeObjectURL(url);
        }
      });
    });

    console.log("testing export button!");
  };

  return (
    <>
      <div className="navbar">
        <div className="code-view-logo">
          <PiButterfly className="nav_logo_icon" />
        </div>

        <div className="code-view-project-name-container">
          <div className="project-title-wrapper">{projectName} Project</div>
        </div>

        <div className="code-view-nav-buttons">
          <button class="export-btn">
            <div className="export-btn-container" onClick={handleExport}>
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
            <div className="codeview-modal-header">
              <h2>Publish your code to github Repository</h2>
            </div>
            <form action="#" className="login-form" onSubmit={handleSubmit}>
              <div className="input_box">
                <label for="Github Username">
                  <b>Github Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Github Username"
                  name="Github Username"
                  onChange={(e) => setGithubUserName(e.target.value)}
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
                  onChange={(e) => setAccessToken(e.target.value)}
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
                  onChange={(e) => setRepositoryName(e.target.value)}
                />
              </div>
              <div className="button-container">
                <button className="publish-button">Publish</button>
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
