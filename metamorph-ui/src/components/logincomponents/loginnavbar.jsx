import logo from '../../assists/Logo.png';
import "../../CSS/login.css";

function LoginNavBar() {
    return(
        <nav className='login-page-navbar'>
            <img src={logo} alt="logo" className='login-page-logo' />
        </nav>
    )
}
export default LoginNavBar;