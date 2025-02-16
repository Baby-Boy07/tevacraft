
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { navdata } from '../../constant/Nav';
function Topnav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-5">
    <Navbar.Brand href="#home"><img src={navdata.image} className="logo" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <NavDropdown title="What we do" id="basic-nav-dropdown" className='topnavdrop'>
          <NavDropdown.Item href="#action/3.1"className='navfont'>AI Services for Translation requirements</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
          Human Translation 
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">MT Audits</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Transcription</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">Video Localization&Subtitles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">Website Localization </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.7">E-Learning materials </NavDropdown.Item>
        </NavDropdown >
        <NavDropdown title="Industries" id="basic-nav-dropdown" className='topnavdrop2'>
          <NavDropdown.Item href="#action/3.1">Healthcare</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
          Automotive
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Media and Entertainment</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">E-commerce</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">Software Localization</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Topnav;