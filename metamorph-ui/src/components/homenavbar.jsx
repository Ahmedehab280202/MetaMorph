import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
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

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Your email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").max(20, "Password cannot exceed 20 characters").required("Your password is required")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data) => {
    console.log("before pressing login debug");
    const logindata = new LoginModel(data.email, data.password);

    console.log("login data:", logindata);
    toggleModal();
    try {
      console.log("test before executing the login service !");
      const response = await login(logindata);
      console.log("response elhandle submit:", response);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", JSON.stringify(logindata.email));
        localStorage.setItem("firstName", response.data.firstName);
        localStorage.setItem("lastName", response.data.lastName);
        navigate("/workspace"); // Navigate to workspace dashboard upon successful login
      } else {
        console.log("An error occurred while trying to login");
      }

      const user_test = JSON.stringify(logindata.email);
      console.log(user_test);
    } catch (error) {
      console.error("Registration error:", error);
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
        <div className="login-modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="login-modal-header">
              <h2>Login</h2>
            </div>
            <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
              <div className="input_box">
                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  {...register("email")}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
              </div>
              <div className="input_box">
                <label htmlFor="password">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  {...register("password")}
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
              </div>
              <div className="button-container">
                <button className="form-button" type="submit">Login</button>
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
