import React from 'react';
import '../CSS/register.css';

function RegisterPage() {




  return (
    <div className="container">
      <div className="title">Registration</div>
      <div className="content">
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input type="text" placeholder="Enter your Firstname" required />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input type="text" placeholder="Enter your Lastname" required />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="text" placeholder="Enter your PhoneNumber" required />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your Email" required />
            </div>
            <div className="input-box">
              <span className="details">User Name</span>
              <input type="text" placeholder="Enter your User Name" required />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="password" placeholder="Enter your Password" required />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input type="password" placeholder="Confirm Password" required />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
