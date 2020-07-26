import React from "react"

import { StyledButton } from "./Styles"

type ButtonProps = {
  className?: string
  children: React.ReactNode
  fullWidth?: boolean
  type?: "button" | "submit" | "reset" | undefined
}

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
