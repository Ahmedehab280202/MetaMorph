import "../../CSS/homepage.css";
import logo from '../../assists/Logo.png';

function HomeNavBar() {
    return(
        <div>
            <nav>
                <img src={logo} alt="logo" className='home-page-logo1' />
                <ul className="home-page-menus">
                    <li className="home-page-text">
                        <a href="">Contact</a>
                    </li>
                    <li className="home-page-text02">
                        <a href="">Help</a>
                    </li>
                    <li className="home-page-text04">
                        <a href="">About</a>
                    </li>
                </ul>
                <div className="home-signup">
                    <button type="button" className="home-page-text06"> Sign Up</button>
                </div>
                <div className="home-page-login">
                    <button type="button" className="home-page-text08"> Log in</button>
                </div>
            </nav>
        </div>
    )
}
export default HomeNavBar;