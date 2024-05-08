import React from "react";
import "../../CSS/home_styling/homeupperbody.css";
import { FaArrowRight } from "react-icons/fa";

function HomeUpperBody() {
  return (
    <section className="hero_container">
      <div className="hero-text-container">
        <header className="hero-header-container">
          <h1 className="hero-text-heading-1">
            <span className="hero-text-heading-remaining">
              Create. Code. Publish.
            </span>
            <span className="hero-text-heading-together">Together</span>
          </h1>
          <p className="hero-text-details">
            <span className="hero-text-details-container">
              Metamorph is a revolutionary tool designed to streamline the
              transition from design to code in the software development life
              cycle. It aims to eliminate common challenges faced during this
              phase, ensuring accuracy, efficiency, and consistency in the
              generated code.
            </span>
          </p>
          <div className="hero-buttons-wrapper">
            <a href="" className="get-started-button">
              <span className="get-started-button-text">
                Get started - it's free
              </span>
              <FaArrowRight className="get-started-button-icon" />
            </a>
            <a href="" className="see-howitworks-button">
              <span className="get-started-button-text">see how it works</span>
            </a>
          </div>
        </header>
      </div>
    </section>
  );
}

export default HomeUpperBody;
