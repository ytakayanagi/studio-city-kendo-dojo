import React, { useState } from "react"
import { Link } from "gatsby"
import { FaBars, FaChevronRight, FaTimes } from "react-icons/fa"

import {
  ButtonContainer,
  EndButton,
  Header,
  JoinButton,
  LogoContainer,
  Nav,
  NavButton,
  NavContainer,
  NavDrawer,
  NavDrawerHeader,
  NavDrawerList,
  StyledLogo,
} from "./Styles"
import Logo from "../Logo"
import Divider from "../../shared/components/Divider"

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen(!isOpen)

  return (
    <Header>
      <NavContainer>
        <LogoContainer>
          <Link to="/">
            <StyledLogo />
          </Link>
        </LogoContainer>
        <ButtonContainer>
          <Nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/schedule">Schedule</Link>
              </li>
              <li>
                <Link to="/membership">Membership</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Nav>
          <JoinButton to="/membership">Join Us</JoinButton>
          <NavButton onClick={toggleDrawer}>
            <FaBars size="1.6em" />
          </NavButton>
        </ButtonContainer>
      </NavContainer>
      <NavDrawer isOpen={isOpen}>
        <NavDrawerHeader>
          <Logo />
          <EndButton onClick={toggleDrawer}>
            <FaTimes size="1.6em" />
          </EndButton>
        </NavDrawerHeader>
        <Divider />
        <Link to="/about">
          <NavDrawerList>
            About
            <EndButton>
              <FaChevronRight size="1.6em" />
            </EndButton>
          </NavDrawerList>
        </Link>
        <Divider />
      </NavDrawer>
    </Header>
  )
}

export default Navigation
