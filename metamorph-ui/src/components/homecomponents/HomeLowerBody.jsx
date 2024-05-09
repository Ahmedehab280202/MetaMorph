import React from "react";
import "../../CSS/home_styling/homelowerbody.css";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa6";
import { PiButterfly } from "react-icons/pi";

function HomeLowerBody() {
  return (
    <section className="hero_bottom_container">
      <div className="bottom_container_wrapper">
        <span className="bottom-container-header">How it works</span>
        <h2 className="hero-bottom-title">
          <span className="">Create Stunning </span>
          <span className="">Static websites and UI elements </span>
          <span className="">through a seamless workflow</span>
        </h2>
        <p>
          integerate an advaned design to code automation framework tool for
          rapid code generation
        </p>
      </div>
      <div className="card-container-wrapper">
        <div className="card-optimizer">
          <div className="card-optimizer-1">
            <div className="card-item-container">
              <span className="card-header">Import</span>
              <span className="card-body">
                convert your designs on figma into ready made Html & Css code
                instantly{" "}
              </span>
              <div className="card-footer">
                <div className="card-footer-icon">
                  <FaFigma className="card-icon" />
                </div>
              </div>
            </div>

            <div className="card-item-container">
              <span className="card-header">Integrate</span>
              <span className="card-body">
                create and develop Custom functionalities with our integerated
                front-end development tools.{" "}
              </span>
              <div className="card-footer">
                <div className="card-footer-icon">
                  <FaGithub className="card-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="card-optimizer-1">
            <div className="card-item-container">
              <span className="card-header">Export & inspect</span>
              <span className="card-body">
                Export your fullstack project code and downloaded as a zipped
                file or inspect your code in a code editor view.{" "}
              </span>
              <div className="card-footer">
                <div className="card-footer-icon">
                  <FaRegEye className="card-icon" />
                  <FaFileExport className="card-icon" />
                </div>
              </div>
            </div>

            <div className="card-item-container">
              <span className="card-header">Customize</span>
              <span className="card-body">
                Add custom code, modify visually, create widgets and
                interactions with our powerful front-end UI Editor.{" "}
              </span>
              <div className="card-footer">
                <div className="card-footer-icon">
                  <PiButterfly className="card-icon-butterfly" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeLowerBody;
