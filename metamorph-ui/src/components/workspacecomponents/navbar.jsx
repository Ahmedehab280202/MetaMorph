import Logo from "../../assists/Logo.png";
import userprofile from "../../assists/userprofile.png";
import "../../CSS/workspace.css"

function Navbar() {
    return(
        <nav className="">
            <img src={Logo} alt="logo" className='workspacepage-logo' />
            <div className="useraccount">
                <button className="account-button">
                    <img src={userprofile} alt="logo" className='userprofile' />
                    <span className="workspacepage-text">My Account</span>
                </button>
            </div>

        </nav>
        
    )
}
export default Navbar;