import { Navbar, Container, Button } from 'react-bootstrap';
import { PiButterfly } from "react-icons/pi";

function ViewCodeNavBar() {
    return (
        <Navbar expand="lg" style={{ background: 'purple' }}>
            <Button style={{padding:'10px 20px', marginTop:'15px'}} variant='light' className='ms-4'>
                Back
            </Button>
        <Container className='nav-logo-details'>
          <Navbar.Brand className='logo_name' style={{padding: '10px 10px'}} href="/">
            <PiButterfly size={50} className='nav_logo_icon'/>
            MetaMorph
          </Navbar.Brand>
        </Container>
        </Navbar>
    );
}

export default ViewCodeNavBar;
