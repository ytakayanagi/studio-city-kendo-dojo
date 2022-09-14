import LogoCloud from '../components/LogoCloud/LogoCloud'
import { NextSeo } from 'next-seo'

export default function Home(): JSX.Element {
  return (
    <>
      <NextSeo title="Learn Japanese Sword Martial Arts" />
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:mx-auto lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome to Studio City Kendo Dojo!
            </h2>
            <p className="mt-4 text-gray-500">
              Studio City Kendo Dojo is in Studio City, in southeast San
              Fernando Valley. For more than 20 years, we have helped people in
              the area to learn Kendo.
            </p>
            <p className="mt-4 text-gray-500">
              Studio City Kendo Dojo aims to have students enjoy kendo practice
              and continue their kendo journey.
            </p>
          </div>
        </div>
      </div>
      <LogoCloud />
    </>
  )
}
