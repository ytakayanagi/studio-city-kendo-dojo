import React, { useState } from "react"
import { Link } from "gatsby"
import { FaBars, FaChevronRight, FaTimes } from "react-icons/fa"
import styled from "styled-components"

import { color, device } from "../../shared/utils/styles"

import {
  ButtonContainer,
  Header,
  JoinButton,
  LogoContainer,
  Nav,
  NavButton,
  NavContainer,
  StyledLogo,
} from "./Styles"
import Logo from "../Logo"
import Divider from "../../shared/components/Divider"

type NavDrawerProps = {
  isOpen: boolean
}

const NavDrawer = styled.div<NavDrawerProps>`
  height: 100%;
  width: ${props => (props.isOpen ? 100 : 0)}%;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: #ffffff;
  overflow-x: hidden;
  transition: 0.5s;

  @media ${device.lg} {
    display: none;
  }
`

const NavDrawerHeader = styled.div`
  padding: 20px 30px;
  height: 41px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const EndButton = styled.button`
  justify-self: end;
  background: 0 0;
  border: none;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  padding: 0;

  &:active,
  &:visited,
  &:focus {
    border: none;
    outline: none;
  }
`

const NavDrawerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 20px 30px;

  a {
    color: ${color.textBlack};
  }
`

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
