import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'

import CallToAction from '../components/CallToAction/CallToAction'
import PageHeader from '../components/PageHeader/PageHeader'
import { address, practices } from '../lib/site'

export default function Schedule(): JSX.Element {
  return (
    <>
      <NextSeo title="Schedule" />
      <PageHeader
        eyebrow="Schedule"
        title="We practice every Friday"
        kanji="稽古"
      >
        <p>
          Practice is every Friday evening. First time? Please contact us before
          visiting our dojo so we know to expect you.
        </p>
      </PageHeader>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Weekly practice
            </h2>
            <ul
              role="list"
              className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200"
            >
              {practices.map((practice) => (
                <li
                  key={practice.name}
                  className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:gap-8"
                >
                  <div className="sm:w-64 sm:flex-shrink-0">
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                      {practice.day}
                    </p>
                    <p className="mt-1 flex items-center gap-2 whitespace-nowrap text-xl font-bold text-gray-900">
                      <ClockIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {practice.time}
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {practice.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Planning a first visit?{' '}
              <Link
                href="/contact"
                className="font-semibold text-blue-700 underline hover:text-blue-600"
              >
                Send us a message
              </Link>{' '}
              to confirm the date.
            </p>
          </div>

          <aside className="h-fit rounded-2xl bg-gray-50 p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <MapPinIcon
                className="h-5 w-5 text-blue-700"
                aria-hidden="true"
              />
              Where
            </h2>
            <address className="mt-3 text-base not-italic leading-7 text-gray-600">
              {address.venue}
              <br />
              {address.street}
              <br />
              {address.city}
            </address>
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:text-blue-600"
            >
              Get directions &rarr;
            </a>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Free to watch
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Observe a practice at no charge, or join up to two practices as
                a free trial.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
