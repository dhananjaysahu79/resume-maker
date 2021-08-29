import React, {useState, useEffect} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';
import { Button } from '../../globalStyles';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItems,
  NavLinks,
  MobileIcon
} from './Navbar.elements'



function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
     <>
       <Nav>
        <NavbarContainer>
          <NavLogo >
            Freeka-resume
          </NavLogo>
          <NavMenu click={click}>
            <NavItems>
              <NavLinks to = '/portfolio-website' onClick = {handleClick}>
                Resume Templates
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to = '/portfolio-website/about' onClick = {handleClick}>
              CV Templates
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to = '/portfolio-website/works' onClick = {handleClick}>
                Cover Letters
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to = '/portfolio-website/works' onClick = {handleClick}>
                Career Blog
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to = '/portfolio-website/works' onClick = {handleClick}>
                Pricing
              </NavLinks>
            </NavItems>
            <Button color = '#01C4A7' fontColor = '#fff'>
              Register
            </Button>
            <Button color = '#E1E1E1' fontColor = '#242D33'>
              Sign In
            </Button>
          </NavMenu>
          <MobileIcon onClick = {handleClick}>
            {click ? <FaTimes/> :<FaBars/>}
          </MobileIcon>
        </NavbarContainer>
       </Nav>
     </>
  );
}

export default Navbar;