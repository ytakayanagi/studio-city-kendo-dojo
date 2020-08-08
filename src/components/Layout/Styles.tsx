import styled, { createGlobalStyle } from "styled-components"

import { color, size, text } from "../../shared/utils/styles"

export const GlobalStyle = createGlobalStyle`
  body {
    ${text.body1}
    color: ${color.textBlack};
    background-color: #ffffff;
    line-height: 1.2;
  }

  p {
      line-height: 1.5;
  }

  a {
    color: ${color.textLink};
    text-decoration: none;
    border-bottom: 1px solid ${color.textLink};

    &:hover {
      color: ${color.textLinkHover};
    }
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
export const Notification = styled.div`
  text-align: center;
  margin-top: 80px;
  padding: 10px 35px;
  background-color: #222;
  color: #fff;

  a {
    color: #ae8932;
    text-decoration: none;
    border-bottom: 1px solid #ae8932;
  }
`

export const Footer = styled.div`
  margin-top: auto;
  padding: 10px 35px;
  text-align: center;
  color: #efecea;
  background-color: ${color.primary};
`
