import glass from '../../assists/glass.png';
import "../../CSS/workspace.css";

function Workspacebody() {
    return(
        <div>
            <div className="line"></div>
            <div className="line2"></div>
            <button className="showprojects"> All Projects </button>
            <input type="text" placeholder="Search For Project" className="searchinput"/>
            <div className="addprojectbtn">
                <button className="workspacepage-text2">Add Project</button>
            </div>
            <button className='searchbutton'>
            <img src={glass} alt="glass icon" />
            </button>
        </div>
    )
}
export default Workspacebody;