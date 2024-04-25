import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/homepage.css";

function HomeNavBar() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="#" className="nav_logo">
            MetaMorph
          </a>
          <ul className="nav_items">
            <li className="nav_item">
              <a href="#" className="nav_link">
                Home
              </a>
              <a href="#" className="nav_link">
                Product
              </a>
              <a href="#" className="nav_link">
                Services
              </a>
              <a href="#" className="nav_link">
                Contact
              </a>
            </li>
          </ul>
          <button className="button" id="form-open" onClick={toggleModal}>
            Login
          </button>
        </nav>
      </header>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Login</h2>
            <form action="#">
              <div class="input_box">
                <input
                  type="username"
                  placeholder="Enter your username"
                  required
                />
                <i class="uil uil-envelope-alt username"></i>
              </div>
              <div class="input_box">
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <i class="uil uil-lock password"></i>
                <i class="uil uil-eye-slash pw_hide"></i>
              </div>
              <button class="button">Login</button>
              <div class="login_signup">
                Don't have an account?{" "}
                <Link to="/register" className="" id="form-open">
                  Signup
                </Link>
              </div>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default HomeNavBar;
