import Link from 'next/link'

import { address, affiliations, navigation } from '../../../lib/site'

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-800" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold text-white">
              Studio City Kendo Dojo
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
              Helping our neighbors in the San Fernando Valley learn kendo for
              more than 20 years. Beginners of every age are welcome.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Visit</p>
            <address className="mt-3 text-sm not-italic leading-6 text-gray-400">
              {address.venue}
              <br />
              {address.street}
              <br />
              {address.city}
            </address>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Practice every Friday
              <br />
              7:00pm – 10:00pm
            </p>
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Get directions &rarr;
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Explore</p>
            <ul role="list" className="mt-3 space-y-2">
              {navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Studio City Kendo Dojo. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-400">
            Member of{' '}
            {affiliations.map((org, index) => (
              <span key={org.shortName}>
                <a
                  href={org.href}
                  target="_blank"
                  rel="noreferrer"
                  title={org.name}
                  className="hover:text-white"
                >
                  {org.shortName}
                </a>
                {index < affiliations.length - 1 && ' · '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
