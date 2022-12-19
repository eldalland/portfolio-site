import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Erik Dalland
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects"
               to='projects'
               smooth={true}
               duration={500}
               spy={true}
               exact='true'
              >Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="testimonials"
               to='testimonials'
               smooth={true}
               duration={500}
               spy={true}
               exact='true'
              >Testimonials</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
