import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

export default function NavigationBar(){
    return (
    <Navbar sticky='top' className='flex-column Sidebar'>
        <Nav.Item>
          <Nav.Link as={NavLink} to='/car'>Car List</Nav.Link>
        </Nav.Item>
    </Navbar>
    )
}