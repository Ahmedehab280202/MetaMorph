import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginModel } from "../models/AuthModel";
import { login } from "../services/AuthService";
import "../CSS/homepage.css";

import FormInput from "./FormInput";

function HomeNavBar() {
  const [modal, setModal] = useState(false);

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
      console.log("before pressing login debug")
      const logindata = new LoginModel(username, password);

      console.log("login data:", logindata);
      toggleModal();
      try{
        console.log("test before executing the login service !")
        const response = await login(logindata);
        console.log('response elhandle submit:',response)

        localStorage.setItem("token",response.data.token)
        // console.log("the token :", token)

        // localStorage.setItem("user",)
        // const user_test = JSON.stringify(logindata.username);
        const user_test = JSON.stringify(logindata.username);
        console.log(user_test);

      }catch(error){
        console.error('Registration error:', error);
      }
    }

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
            <div className="modal-header">
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
