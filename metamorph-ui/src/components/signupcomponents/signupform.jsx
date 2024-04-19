import React, { useState } from 'react';
import eyeIcon from '../../assists/eye icon.png'; 
import "../../CSS/signup.css";

function SignUpForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <div className="signup-page-createaccount">
            <p className='signup-page-text'>Create Account</p>
            <p className='signup-page-text02'> Already have an account? Login</p>
            <form className="">
                <input type="text" className="signup-page-firstnamefield" placeholder="First Name" required />
                <input type="text" className="signup-page-lastnamefield" placeholder="Last Name" required />
                <input type="text" className="signup-page-emailfield" placeholder="Email" required />
                    <input
                        type={passwordVisible ? "text" : "password"}
                        className="signup-page-passwordfield"
                        placeholder="Password"
                        required
                    />
                    <img
                        src={eyeIcon}
                        alt="Show/Hide Password"
                        className="signup-page-eyeicon"
                        onClick={togglePasswordVisibility}
                    />
                    <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        className="signup-page-passwordfield1"
                        placeholder="Confirm Password"
                        required
                    />
                    <img
                        src={eyeIcon}
                        alt="Show/Hide Password"
                        className="signup-page-eyeicon1"
                        onClick={toggleConfirmPasswordVisibility}
                    />
                <button type="submit" className="signup-page-createaccountbutton">Create Account</button>
            </form>
        </div>
    );
}

export default SignUpForm;
