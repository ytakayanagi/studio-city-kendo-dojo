import styled from "styled-components"
import { color, font } from "../../utils/styles"

type StyledButtonProps = {
  fullWidth?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
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
