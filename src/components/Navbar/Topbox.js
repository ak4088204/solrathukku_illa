import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Topbox.css";

function Topbox() {
  return (
    <div className='top'>
      <b id="drop">Location</b><br></br>
      <select id="drop">
        <option>Mumbai</option>
        <option>Chennai</option>
      </select>
      <button id="button" className='rounded' >Logout</button>
    </div>
  );
}
export default Topbox;