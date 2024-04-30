import HomePageBody from "../components/homepagebody.jsx"
import HomeNavBar from "../components/homenavbar.jsx"
import '../CSS/homepage.css';

function HomePage() {
    return(
        <div className="home-page-container">
            <HomeNavBar />
            {/* <HomePageBody /> */}
        </div>
    )
}

export default HomePage;