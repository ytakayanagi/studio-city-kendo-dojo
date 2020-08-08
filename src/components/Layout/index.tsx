import React from "react"
import { Link } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import "normalize.css"
import "react-tippy/dist/tippy.css"

import { Footer, GlobalStyle, Main, Notification } from "./Styles"
import Navigation from "../Navigation"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GatsbySeo
        title="Learn Japanese Sword Martial Arts"
        titleTemplate="%s | Studio City Kendo Dojo"
        description="Studio City Kendo Dojo is located in Studio City, California. We welcome any level of experience."
      />
      <GlobalStyle theme="purple" />
      <Navigation />
      <Notification>
        All practices at dojo has been canceled due to COVID 19 until further
        notice. If you want to join our Zoom practice, please{" "}
        <Link to="/contact">contact us</Link>.
      </Notification>
      <Main>{children}</Main>
      <Footer>
        &copy; Copyright {new Date().getFullYear()} Studio City Kendo Dojo
      </Footer>
    </>
  )
}

export default Layout
