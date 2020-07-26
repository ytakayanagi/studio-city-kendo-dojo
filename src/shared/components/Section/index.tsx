import React from "react"

import { StyledSection } from "./Styles"

type Props = {
  children: React.ReactNode
  backgroundColor?: string
}

const Section: React.FC<Props> = ({ backgroundColor, children }: Props) => (
  <StyledSection backgroundColor={backgroundColor}>{children}</StyledSection>
)

export default Section
