import React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import HeroCard from '../../components/HeroCard/HeroCard'
import { useRouter } from 'next/router'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();
  const showHeroCard = router.pathname === "/";

  return (
    <>
      <Header />
      {showHeroCard && <HeroCard />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
