import HomeNavBar from "../components/homecomponents/homenavbar.jsx" 
import HomePageBody from "../components/homecomponents/homepagebody.jsx"
import '../CSS/homepage.css';

function HomePage() {
    return(
        <div className="home-page-container">
            <HomeNavBar />
            <HomePageBody />
        </div>
    )
}

export default HomePage;