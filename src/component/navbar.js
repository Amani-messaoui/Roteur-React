import React,{ useState } from 'react';
import {Link} from 'react-router-dom';

import {
    Collapse, Navbar, NavbarToggler,NavbarBrand,Nav, NavItem, NavLink, UncontrolledDropdown,DropdownToggle,DropdownMenu, DropdownItem,NavbarText
  } from 'reactstrap';
 

const Navbars = ({match}) => {
    const [isOpen, setIsOpen] = useState(false);
        
    const toggle = () => setIsOpen(!isOpen);
    return (
            
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href="/product">Product</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/admin">Admin Aria</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/category">Category</NavLink>
                    </NavItem>
                    
                   
                  </Nav>
                  <NavbarText>Welcome !!</NavbarText>
                </Collapse>
              </Navbar>
            
          );
        }
        

export default Navbars;