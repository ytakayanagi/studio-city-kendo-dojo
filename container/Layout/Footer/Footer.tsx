import Link from 'next/link'

import { address, affiliations, navigation, practices } from '../../../lib/site'

const Footer = (): React.JSX.Element => {
  return (
    <footer
      className="relative overflow-hidden bg-gray-800"
      aria-labelledby="footerHeading"
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl font-bold text-white">
              Studio City Kendo Dojo
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
              Helping our neighbors in the San Fernando Valley learn kendo for
              more than 20 years. Beginners of every age are welcome.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Book a free trial
            </Link>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Visit
            </p>
            <address className="mt-4 text-sm not-italic leading-6 text-gray-300">
              {address.venue}
              <br />
              {address.street}
              <br />
              {address.city}
            </address>
            <p className="mt-2 text-xs leading-5 text-gray-400">
              {address.entryNote}
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
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Practice
            </p>
            <ul role="list" className="mt-4 space-y-3 text-sm text-gray-300">
              {practices.map((practice) => (
                <li key={practice.name}>
                  <span className="block text-white">{practice.name}</span>
                  {practice.day.slice(0, 3)} {practice.time}
                </li>
              ))}
              <li>
                <span className="block text-white">Saturdays</span>
                Twice a month, email to confirm
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Explore
            </p>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-16 select-none font-display text-[18vw] font-extrabold leading-none tracking-tighter text-white/4 lg:text-[11rem]"
        >
          剣道 Kendo
        </p>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
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
