import HomeNavBar from "../components/homenavbar.jsx"
import HomeUpperBody from "../components/homecomponents/HomeUpperBody.jsx";
import '../CSS/homepage.css';
import HomeLowerBody from "../components/homecomponents/HomeLowerBody.jsx";
import Footer from "../components/homecomponents/Footer.jsx";

function HomePage() {
    return(
        <div className="home-page-container">
            <HomeNavBar />
            <HomeUpperBody />
            <HomeLowerBody />
            <Footer />
        </div>
    )
}

export default HomePage;