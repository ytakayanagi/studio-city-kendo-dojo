import React from "react"
import { Link } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import styled from "styled-components"
import "normalize.css"
import "react-tippy/dist/tippy.css"

import { GlobalStyle, Main } from "./Styles"
import Navigation from "../Navigation"

const Notification = styled.div`
  text-align: center;
  margin-top: 80px;
  padding: 10px 35px;
  background-color: #c99a05;

  color: #ffffff;

  a {
    color: #ffffff;
    text-decoration: none;
    border-bottom: 1px solid #ffffff;
  }
`

const Footer = styled.div`
  margin-top: auto;
  padding: 10px 35px;
  text-align: center;
  color: #666666;
  background-color: #000000;
`

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GatsbySeo
        title="Learn Japanese Sword Martial Arts"
        titleTemplate="%s | Studio City Kendo Dojo"
        description="This example uses more of the available config options."
      />
      <GlobalStyle theme="purple" />
      <Navigation />
      <Notification>
        All practices at dojo has been canceled due to COVID 19 until further
        notice. If you want to join our Zoom practice, please{" "}
        <Link to="/contact-us">contact us</Link>.
      </Notification>
      <Main>{children}</Main>
      <Footer>
        &copy; Copyright {new Date().getFullYear()} Studio City Kendo Dojo
      </Footer>
    </>
  )
}

export default Layout
