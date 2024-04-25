import React,{useState} from 'react';
import { RegisterModel } from '../models/AuthModel'
import { register } from '../services/AuthService'
import FormInput from '../components/FormInput';
import '../CSS/register.css';

function RegisterPage() {

  const [values,setValues] = useState({
    Firstname:"",
    Lastname:"",
    PhoneNumber:"",
    Email:"",
    Username:"",
    Password:"",
  })

  const inputs = [
    {
      id:1,
      name: "Firstname",
      input_name: "Firstname",
      input_type: "text",
      placeholder: "Enter your Firstname"
    },
    {
      id:2,
      name: "Lastname",
      input_name: "Lastname",
      input_type: "text",
      placeholder: "Enter your Lastname"
    },
    {
      id:3,
      name: "PhoneNumber",
      input_name: "PhoneNumber",
      input_type: "text",
      placeholder: "Enter your PhoneNumber"
    },
    {
      id:4,
      name: "Email",
      input_name: "Email",
      input_type: "text",
      placeholder: "Enter your Email"
    },
    {
      id:5,
      name: "Username",
      input_name: "Username",
      input_type: "text",
      placeholder: "Enter your Username"
    },
    {
      id:6,
      name: "Password",
      input_name: "Password",
      input_type: "text",
      placeholder: "Enter your Password"
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Firstname, Lastname, PhoneNumber, Email, Username, Password } = values;
    
    const registerData = new RegisterModel(Firstname, Lastname, PhoneNumber, Email, Username, Password);

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
