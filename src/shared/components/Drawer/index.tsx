import React from "react"

import { StyledDrawer } from "./Styles"

type Props = {
  children: React.ReactNode
  isOpen: boolean
}

const Drawer: React.FC<Props> = ({ children, isOpen }: Props) => (
  <StyledDrawer isOpen={isOpen}>{children}</StyledDrawer>
)

export default Drawer
