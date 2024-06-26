import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../services/AuthService";
import "../CSS/register.css";

function RegisterPage() {
  let navigate = useNavigate();

  const schema = yup.object().shape({
    firstname: yup.string().required("Your firstname is required"),
    lastname: yup.string().required("Your lastname is required"),
    username: yup.string().required("Your username is required"),
    email: yup.string().email("Invalid email format").required("Your email is required"),
    age: yup.number().typeError("Age must be a number").positive("Age must be a positive number").integer("Age must be an integer").required("Your age is required"),
    phonenumber: yup.number().typeError("Phone number must be a number").positive("Phone number must be a positive number").integer("Phone number must be an integer").required("Your phone number is required"),
    job: yup.string().required("Job is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").max(20, "Password cannot exceed 20 characters").required("Your password is required")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [age,setAge] = useState("");
  const [phonenumber,setPhonenumber] = useState("");
  const [job,setJob] = useState("");

  const onSubmit = async (data,e) => {
    console.log(data);
    e.preventDefault();
    const logindata = new LoginModel(email, password);
  };

  return (
    <div>
      <section className="container">
        <header>Registration Form</header>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="column">
            <div className="input-box">
              <label>First Name</label>
              <input type="text" placeholder="Enter First Name" {...register("firstname")} />
              {errors.firstname && <p className="error">{errors.firstname.message}</p>}
            </div>
            <div className="input-box">
              <label>Last Name</label>
              <input type="text" placeholder="Enter Last Name" {...register("lastname")} />
              {errors.lastname && <p className="error">{errors.lastname.message}</p>}
            </div>
          </div>
          <div className="column">
            <div className="input-box">
              <label>User Name</label>
              <input type="text" placeholder="Enter User Name" {...register("username")} />
              {errors.username && <p className="error">{errors.username.message}</p>}
            </div>
            <div className="input-box">
              <label>Age</label>
              <input type="number" placeholder="Enter Age" {...register("age")} />
              {errors.age && <p className="error">{errors.age.message}</p>}
            </div>
          </div>
          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input type="number" placeholder="Enter phone number" {...register("phonenumber")} />
              {errors.phonenumber && <p className="error">{errors.phonenumber.message}</p>}
            </div>
            <div className="input-box">
              <label>Job</label>
              <input type="text" placeholder="Enter Job" {...register("job")} />
              {errors.job && <p className="error">{errors.job.message}</p>}
            </div>
          </div>
          <div className="column">
            <div className="input-box">
              <label>Email</label>
              <input type="text" placeholder="Enter Email" {...register("email")} />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="input-box">
              <label>Password</label>
              <input type="password" placeholder="Enter password" {...register("password")} />
              {errors.password && <p className="error">{errors.password.message}</p>}
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default RegisterPage;
