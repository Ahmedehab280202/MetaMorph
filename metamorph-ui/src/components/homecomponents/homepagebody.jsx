import '../../CSS/homepage.css';
import figma from '../../assists/figma.png';
import csv from '../../assists/csvimage.png';
import github from '../../assists/github.png';
import fullstack from '../../assists/fullstack.png';
import Logo from '../../assists/Logo.png';

function HomePageBody() {
    return(
        <div>
            <div className="home-page-welcomemessage">
                <span className="home-page-text10"> Create. Code. Publish.</span>
                <p className="home-page-text13">MetaMorph is the collaborative front-end platform with integrated UI 
                development and content modelling tools. A powerful visual builder to create and publish 
                your headless static websites instantly.
            </p>
            </div>
            <p className="home-page-text12 ">Together</p>
            <button type="button" className="getstartedbtn"> Get Started Free</button>
            <button type="button" className="howitworkdbtn"> How It Works</button>
            <p className="home-page-text16">How It Works</p>
            <p className="text">Create stunning static websites and UI elements, through a seamless workflow</p>
            <p className="text2">Enable seamless collaboration between designers and developers.</p>

            <div className="home-page-servies">
                <div className="home-page-figma">
                    <span className="home-page-text24">
                        Import & convert Figma to code Generate code 
                        from your designs by exporting from Figma to MetaMorph.
                    </span>
                    <img src={figma} alt="figma" className="home-page-figmaicon1"/>
                </div>
                <div className="home-page-github">
                    <span className="home-page-text26"> 
                        GitHub Integration Keep track of your projects, 
                        easily explore the changes using GitHub.
                    </span>
                    <img src={github} alt="github" className="home-page-image5"/>
                </div>
                <div className="home-page-backend">
                    <span className="home-page-text31">
                        Import and covert CSV file to 
                        Generator code from your UML Class Diagram.  
                    </span>
                    <img src={csv} alt="csv" className="home-page-image25"/>
                </div>
                <div className="home-page-fullstack">
                    <span className="home-page-text33"> 
                        Integrating between Front-end designs and 
                        UML class diagram to produce a Full-stack Application.   
                    </span>
                    <img src={fullstack} alt="fullstack" className="home-page-image27"/>
                </div>
            </div>

            <div className="home-page-footer">
                <div className="home-page-copyright">
                    <img src={Logo} alt="Logo" className="home-page-logo11" />
                </div>
                <span className="home-page-text38">
                    Copyright © MetaMorph - 2023
                </span>
            </div>

        </div>
    )
}

export default HomePageBody;