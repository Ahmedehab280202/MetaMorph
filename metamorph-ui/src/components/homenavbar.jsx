import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PiButterfly } from "react-icons/pi";

import { LoginModel } from "../models/AuthModel";
import { login } from "../services/AuthService";
import "../CSS/homepage.css";

import FormInput from "./FormInput";

function HomeNavBar() {
  const [modal, setModal] = useState(false);

  let navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      console.log("Please fill all the fields");
      return;
    } else {
      console.log("before pressing login debug");
      const logindata = new LoginModel(username, password);

      console.log("login data:", logindata);
      toggleModal();
      try {
        console.log("test before executing the login service !");
        const response = await login(logindata);
        console.log("response elhandle submit:", response);

        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user_name", JSON.stringify(logindata.username));
          navigate("/workspace"); // Navigate to workspace dashboard upon successful login
        } else {
          console.log("An error occurred while trying to login");
        }

        // localStorage.setItem("user",JSON.stringify(logindata.username)
        // const user_test = JSON.stringify(logindata.username);
        const user_test = JSON.stringify(logindata.username);
        console.log(user_test);
      } catch (error) {
        console.error("Registration error:", error);
      }
    }
  };

  var user = JSON.parse(localStorage.getItem("user_name"));
  console.log(user);

  return (
    <>
      <nav className="nav">
        <div className="nav-logo-details">
          <PiButterfly className="nav_logo_icon" />
          <span className="logo_name">MetaMorph</span>
        </div>
        <ul className="nav_items-list">
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
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="login-modal-header">
              <h2>Login</h2>
            </div>
            <form action="#" className="login-form" onSubmit={handleSubmit}>
              <div className="input_box">
                <label for="username">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input_box">
                <label for="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="button-container">
                <button className="form-button">Login</button>
              </div>
              <div className="login_signup">
                Don't have an account?{" "}
                <Link to="/register" className="" id="form-open">
                  Signup
                </Link>
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
export default HomeNavBar;
