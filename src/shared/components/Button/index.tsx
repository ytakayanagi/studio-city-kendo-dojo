import React from "react"
import styled from "styled-components"

import { color, font } from "../../utils/styles"

type ButtonProps = {
  className?: string
  children: React.ReactNode
  fullWidth?: boolean
  type?: "button" | "submit" | "reset" | undefined
}

const StyledButton = styled.button<ButtonProps>`
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
  ${props => (props.fullWidth ? "width: 100%;" : null)}

  &:hover {
    background-color: ${color.primary};
  }
`

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  fullWidth,
  type,
}) => (
  <StyledButton type={type} className={className} fullWidth={fullWidth}>
    {children}
  </StyledButton>
)

export default Button
