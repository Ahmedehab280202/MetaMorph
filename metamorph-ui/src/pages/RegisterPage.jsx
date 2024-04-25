import React,{useState} from 'react';
import { RegisterModel } from '../models/AuthModel'
import { register } from '../services/AuthService'
import FormInput from '../components/FormInput';
import '../CSS/register.css';

function RegisterPage() {

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
      placeholder: "Enter your firstname"
    },
    {
      id:2,
      name: "lastname",
      input_name: "lastname",
      input_type: "text",
      placeholder: "Enter your lastname"
    },

    {
      id:3,
      name: "email",
      input_name: "email",
      input_type: "text",
      placeholder: "Enter your email"
    },
    {
      id:4,
      name: "username",
      input_name: "username",
      input_type: "text",
      placeholder: "Enter your username"
    },
    {
      id:5,
      name: "password",
      input_name: "password",
      input_type: "text",
      placeholder: "Enter your password"
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
      console.log(response);

      if (response.success) {
        alert('Registration successful!'); 
      } else {
        alert('Registration failed: ' + response.message); 
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values)

  return (
    <div className="container">
      <div className="title">Registration</div>
      <div className="content">
        <form action="#" onSubmit={handleSubmit}>
          <div className="user-details">
            {inputs.map((input)=>(
              <FormInput key={input.id} {...input} value={values[input.input_name]} onChange={onChange}/>
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
