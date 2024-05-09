import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterModel } from '../models/AuthModel'
import { register } from '../services/AuthService'
import FormInput from '../components/FormInput';
import '../CSS/register.css';

function RegisterPage() {

  let navigate = useNavigate()
  const [values,setValues] = useState({
    firstname:"",
    lastname:"",
    email:"",
    username:"",
    password:"",
  })

  const inputs = [
    {
      id:1,
      name: "firstname",
      input_name: "firstname",
      input_type: "text",
      // errorMessage:"firstname should be written in charachters only",
      placeholder: "Enter your firstname",
      // pattern: "^[A-Za-z]{2-8}$",
      // required: true,
    },
    {
      id:2,
      name: "lastname",
      input_name: "lastname",
      input_type: "text",
      // errorMessage:"lastname should be written in charachters only",
      placeholder: "Enter your lastname",
      // pattern: "^[A-Za-z]{2-8}$",
      // required: true,
    },

    {
      id:3,
      name: "email",
      // type: "email",
      input_name: "email",
      input_type: "text",
      // errorMessage:" should be valid email address",
      placeholder: "Enter your email",

      // required: true,
    },
    {
      id:4,
      name: "username",
      input_name: "username",
      input_type: "text",
      // errorMessage:"username should be 3-16 and has no special chars",
      placeholder: "Enter your username",
      // pattern: "^[A-Za-z0-9]{2-8}$",
      // required: true,
    },
    {
      id:5,
      name: "password",
      input_name: "password",
      input_type: "text",
      // errorMessage:"password should be 8-20 charachters",
      placeholder: "Enter your password",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z]){8,20}$`, //atleast one number and one letter and between 8 and 20
      // required: true,
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    var { firstname, lastname, email, username, password } = values;
    console.log("values before submit:", values);
    const registerData = values;

    console.log("registerData",registerData);

    console.log("handel submit wslet lehnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!!!!!!!")

    try {
      const response = await register(registerData);
      navigate("/")
      console.log('response elhandle submit:',response);

    } catch (error) {
      console.error('Registration error:', error);
    }
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values)

  return (
    <div className="register-container">
      <div className="title">Registration</div>
      <div className="content">
        <form action="#" onSubmit={handleSubmit}>
          <div className="user-details">
            {inputs.map((input)=>(
              <FormInput key={input.id} {...input} value={values[input.input_name]} onChange={onChange} errorMessage={input.errorMessage}/>
            ))}
          </div>
          <div className="button_container">
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
