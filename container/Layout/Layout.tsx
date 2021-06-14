import React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
