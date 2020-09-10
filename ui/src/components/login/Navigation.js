import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Navigation (props)  {
return (
      
        <div className="container-fluid">
            <Nav className="nav">
              <NavItem className='NavItem'>
                <NavLink to="/" className="nav-link">
                  Login
                </NavLink>
              </NavItem>
              <NavItem className='NavItem'>
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </NavItem>
            </Nav>
        </div>
      
  )
};
export default Navigation;