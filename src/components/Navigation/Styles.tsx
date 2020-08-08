import styled from "styled-components"
import { Link } from "gatsby"

import Logo from "../Logo"

import {
  color,
  device,
  font,
  text,
  zIndexValues,
} from "../../shared/utils/styles"

type NavDrawerProps = {
  isOpen: boolean
}

export const Header = styled.header`
  display: block;
  width: 100%;
  padding: 0;
  height: 80px;
  background-color: #ffffff;
  z-index: ${zIndexValues.navigation};
  top: 0;
  position: fixed;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`

export const NavContainer = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    width: 325px;
    display: inline-block;
    line-height: inherit;
    font-size: 0;
    padding: 0;
    border: none;
    text-decoration: none;
  }
`

export const StyledLogo = styled(Logo)`
  height: 41px;
`

export const Nav = styled.nav`
  display: none;

  @media ${device.lg} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;

    ul {
      display: flex;
      justify-content: flex-start;
      flex: 1;
      list-style-type: none;
      margin: 0 15px;
      padding: 0;

      li a {
        ${text.body1}
        display: inline-block;
        margin: 0 1rem;
        position: relative;
        width: auto;
        color: #231f20;
        border: none;

        &:hover {
          color: #ae8932;
          transition: color 200ms ease-in-out 0s;
        }
      }
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`

export const JoinButton = styled(Link)`
  display: none;

  @media ${device.lg} {
    display: inline-block;
    cursor: pointer;
    padding: 0.75rem 1rem;
    white-space: nowrap;
    flex-basis: auto;
    border-radius: 4px;
    border: 0;
    text-align: center;
    line-height: 1rem;
    ${font.robotoBold}
    background-color: ${color.primary};
    color: ${color.textWhite};

    &:hover {
      background-color: ${color.primary};
    }
  }
`

export const NavButton = styled.button`
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

  @media ${device.lg} {
    display: none;
  }
`
export const NavDrawer = styled.div<NavDrawerProps>`
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

export const NavDrawerHeader = styled.div`
  padding: 20px 30px;
  height: 41px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const EndButton = styled.button`
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

export const NavDrawerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 20px 30px;

  a {
    color: ${color.textBlack};
  }
`
