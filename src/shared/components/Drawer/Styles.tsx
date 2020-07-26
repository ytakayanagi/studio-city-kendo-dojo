import styled from "styled-components"

type DrawerProps = {
  isOpen: boolean
}

export const StyledDrawer = styled.div<DrawerProps>`
  height: 100%;
  width: ${props => (props.isOpen ? 100 : 0)}%;
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
`
export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
`
