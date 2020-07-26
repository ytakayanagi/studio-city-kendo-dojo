import styled from "styled-components"

type Props = {
  backgroundColor?: string
}

export const StyledSection = styled.section<Props>`
  margin: 40px;
  max-width: none;
  ${props =>
    props.backgroundColor ? `background-color: ${props.backgroundColor}` : null}
`
