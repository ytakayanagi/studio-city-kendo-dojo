import Link from 'next/link'
import Seo from '../components/Seo/Seo'
import {
  ArrowUpRightIcon,
  EyeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'

import CallToAction from '../components/CallToAction/CallToAction'
import Eyebrow from '../components/Eyebrow/Eyebrow'
import PageHeader from '../components/PageHeader/PageHeader'
import { address, practices, saturday } from '../lib/site'
import { useNextPractice } from '../lib/useNextPractice'

const hours = ['7pm', '8pm', '9pm']

export default function Schedule(): React.JSX.Element {
  const nextDate = useNextPractice()

  return (
    <>
      <Seo title="Schedule" />
      <PageHeader
        eyebrow="Schedule"
        title="We practice every Friday."
        kanji="稽古"
      >
        <p>
          Practice is every Friday evening, plus two Saturday afternoons most
          months. First time? Please contact us before visiting our dojo so we
          know to expect you.
        </p>
      </PageHeader>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-3xl bg-black p-8 text-white sm:p-10 lg:col-span-2">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow dark>Weekly practice</Eyebrow>
                <p className="mt-5 font-display text-5xl font-extrabold tracking-tight">
                  Friday
                </p>
              </div>
              {nextDate && (
                <p className="rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold">
                  Next: {nextDate}
                </p>
              )}
            </div>

            {/* Timeline, 7pm to 9pm: all levels 7:00-8:35, advanced 8:40-9:00 */}
            <div className="mt-10" aria-hidden="true">
              <div className="flex justify-between">
                <div className="w-[79%] rounded-2xl bg-blue-700 px-4 py-5">
                  <p className="font-display text-lg font-bold">All levels</p>
                </div>
                <div className="w-[17%] rounded-2xl bg-blue-500/30 px-2 py-5 ring-1 ring-inset ring-blue-500 sm:px-4">
                  <p className="truncate font-display text-sm font-bold sm:text-lg">
                    Adv.
                  </p>
                </div>
              </div>
              <div className="mt-3 flex justify-between text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                {hours.map((hour) => (
                  <span key={hour}>{hour}</span>
                ))}
              </div>
            </div>

            <ul
              role="list"
              className="mt-10 divide-y divide-white/10 border-t border-white/10"
            >
              {practices.map((practice) => (
                <li
                  key={practice.name}
                  className="flex flex-wrap items-baseline justify-between gap-2 py-5"
                >
                  <span className="text-lg text-gray-300">{practice.name}</span>
                  <span className="whitespace-nowrap font-display text-2xl font-bold">
                    {practice.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-400">
              Planning a first visit?{' '}
              <Link
                href="/contact"
                className="font-semibold text-blue-400 underline hover:text-blue-300"
              >
                Send us a message
              </Link>{' '}
              to confirm the date.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-gray-50 p-8 ring-1 ring-inset ring-gray-200">
              <MapPinIcon
                className="h-8 w-8 text-blue-700"
                aria-hidden="true"
              />
              <h2 className="mt-6 font-display text-2xl font-bold text-gray-900">
                {address.venue}
              </h2>
              <address className="mt-2 text-base not-italic leading-7 text-gray-600">
                {address.street}
                <br />
                {address.city}
              </address>
              <p className="mt-4 rounded-2xl bg-white p-4 text-sm leading-6 text-gray-700 ring-1 ring-inset ring-gray-200">
                <span className="font-semibold text-gray-900">Heads up:</span>{' '}
                {address.entryNote}
              </p>
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Get directions
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="flex-1 rounded-3xl bg-blue-700 p-8 text-white">
              <EyeIcon className="h-8 w-8 text-blue-200" aria-hidden="true" />
              <h2 className="mt-6 font-display text-2xl font-bold">
                Free to watch
              </h2>
              <p className="mt-2 text-blue-100">
                Observe a practice at no charge, or join up to two practices as
                a free trial.
              </p>
            </div>
          </div>

          {/* Saturday practices */}
          <div className="grid gap-8 rounded-3xl bg-gray-50 p-8 ring-1 ring-inset ring-gray-200 sm:p-10 lg:col-span-3 lg:grid-cols-2">
            <div>
              <Eyebrow>Monthly practice</Eyebrow>
              <p className="mt-5 font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Saturday
              </p>
              <p className="mt-4 text-lg text-gray-700">
                {saturday.frequency}.
              </p>
              <p className="mt-2 text-gray-600">
                {saturday.note}{' '}
                <Link
                  href="/contact"
                  className="font-semibold text-blue-700 underline hover:text-blue-600"
                >
                  Contact us
                </Link>
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-inset ring-gray-200">
              <MapPinIcon
                className="h-8 w-8 text-blue-700"
                aria-hidden="true"
              />
              <h2 className="mt-6 font-display text-2xl font-bold text-gray-900">
                {saturday.venue}
              </h2>
              <address className="mt-2 text-base not-italic leading-7 text-gray-600">
                {saturday.street}
                <br />
                {saturday.city}
              </address>
              <a
                href={saturday.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Get directions
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
