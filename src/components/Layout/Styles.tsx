import styled, { createGlobalStyle } from "styled-components"

import { color, size, text } from "../../shared/utils/styles"

export const GlobalStyle = createGlobalStyle`
  body {
    ${text.body1}
    color: ${color.textBlack};
    line-height: 1.2;
  }

  p {
      line-height: 1.5;
  }

  a {
    color: ${color.textLink};
    text-decoration: none;
    border-bottom: 1px solid ${color.textLink};
  }

  section {
    max-width: ${size.xl};
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 158px);
`
