// import { Navbar, Container, Button } from 'react-bootstrap';
import { PiButterfly } from "react-icons/pi";
import { FaFileExport } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import '../../CSS/code_view/codeviewnav.css'

function ViewCodeNavBar() {
    return (
        // <Navbar expand="lg" style={{ background: 'purple' }}>
        //     <Button style={{padding:'10px 20px', marginTop:'15px'}} variant='light' className='ms-4'>
        //         Back
        //     </Button>
        // <Container className='nav-logo-details'>
        //   <Navbar.Brand className='logo_name' style={{padding: '10px 10px'}} href="/">
        //     <PiButterfly size={50} className='nav_logo_icon'/>
        //     MetaMorph
        //   </Navbar.Brand>
        // </Container>
        // </Navbar>
        <div className='navbar'>
          <div className="code-view-logo">
            <PiButterfly className='nav_logo_icon'/>
          </div>

          <div className="code-view-project-name-container">
            <div className="project-title-wrapper">Ali Ismail's Project</div>
          </div>

          <div className="code-view-nav-buttons">
            <button class="export-btn">
              <div className="export-btn-container">
                <div><FaFileExport /></div>
                <span className=''>Export</span>
              </div>
            </button>

            <button class="publish-btn">
              <div className="publish-btn-container">
                <div><FaGithub /></div>
                <span className=''>Publish</span>
              </div>
            </button>
          </div>
        </div>
    );
}

export default ViewCodeNavBar;