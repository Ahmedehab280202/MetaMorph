import figmaicon from '../../assists/figmaicon.png';

function Addfigma() {
    return (
        <div>
            <div className="addfigmaurl">
                <div className="group19">
                    <span className="text1">
                    <span>Sync your design</span>
                    </span>
                    <span className="text3">
                    <span>
                        Import Figma design URL to sync your design to your project.
                    </span>
                    </span>
                    <input type="text" placeholder="Enter Figma Design URL" className="inputfield"/>
                    <img
                    src={figmaicon}
                    alt="figmaicon"
                    className= "figmaicon"
                    />
                     <button className="submitbutton">
                    <span className="text04">
                        <span>Submit</span>
                    </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Addfigma;