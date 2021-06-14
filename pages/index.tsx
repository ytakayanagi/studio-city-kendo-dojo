import HeroCard from '../components/HeroCard/HeroCard'
import LogoCloud from '../components/LogoCloud/LogoCloud'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo title="Learn Japanese Sword Martial Arts" />
      <HeroCard />
      <LogoCloud />
    </>
  )
}
