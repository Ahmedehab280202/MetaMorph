import AddCsv from '../components/addprojectcomponents/addcsv';
import Addfigma from '../components/addprojectcomponents/addfigmaurl';
import NavBar from '../components/addprojectcomponents/navbar';
import '../CSS/figma.css';

function AddProjectPage() {
    return (
        <div className="container">
            <div className="addproject">  
                <NavBar />
                <AddCsv />  
                <Addfigma />    
            </div>
        </div>
    );
}
export default AddProjectPage;