import '../../CSS/figma.css';
import backicon from '../../assists/back button.png';

function NavBar() {
    return (
        <nav className="navbar">
            <button className="addproject-backbutton">
                <img src={backicon} alt="Back" />
            </button>
        </nav>
    );
}
export default NavBar;