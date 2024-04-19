import React, { useState } from 'react';
import eyeIcon from '../../assists/eye icon.png'; 
import "../../CSS/login.css";

function LoginForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='login-page-logintoaccount'>
            <p className='login-page-text'>Log in to MetaMorph</p>
            <p className='login-page-text02'>Don't have an account yet? Sign up</p>
            <form className="login-page-container">
                <input className="login-page-emailfield" placeholder="Name@gmail.com" type="email" required />
                <div className="login-page-password-container">
                    <input
                        className="login-page-passwordfield"
                        placeholder="Password"
                        type={passwordVisible ? "text" : "password"}
                        required
                    />
                    <img
                        src={eyeIcon}
                        alt="Show/Hide Password"
                        className="login-page-eyeicon"
                        onClick={togglePasswordVisibility}
                    />
                </div>
                <button className="login-page-loginbutton" type="submit"> Log in</button>
            </form>
        </div>
    );
}

export default LoginForm;
