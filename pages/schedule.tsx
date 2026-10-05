import Link from 'next/link'
import { NextSeo } from 'next-seo'
import {
  ChatBubbleLeftRightIcon,
  EyeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'

import CallToAction from '../components/CallToAction/CallToAction'
import PageHeader from '../components/PageHeader/PageHeader'
import { address } from '../lib/site'

const calendarSrc =
  'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&showTitle=0&showTz=0&showCalendars=0&showTabs=0&src=c3R1ZGlvY2l0eWtlbmRvQGdtYWlsLmNvbQ&color=%23039be5'
const agendaSrc =
  'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&showTitle=0&showTz=0&showCalendars=0&showTabs=0&mode=AGENDA&src=c3R1ZGlvY2l0eWtlbmRvQGdtYWlsLmNvbQ&color=%23039be5'

export default function Schedule(): JSX.Element {
  return (
    <>
      <NextSeo title="Schedule" />
      <PageHeader
        eyebrow="Schedule"
        title="Practice and Events Schedule"
        kanji="稽古"
      >
        <p>
          Practices, exams and events are all on our calendar below. Planning
          your first visit? Let us know you are coming.
        </p>
      </PageHeader>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex gap-4 rounded-xl border border-gray-200 p-5">
              <MapPinIcon
                className="h-6 w-6 flex-shrink-0 text-blue-700"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-gray-900">Where</p>
                <p className="mt-1 text-sm text-gray-600">
                  {address.venue}, {address.street}, {address.city}
                </p>
                <a
                  href={address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-blue-700 hover:text-blue-600"
                >
                  Get directions &rarr;
                </a>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-gray-200 p-5">
              <ChatBubbleLeftRightIcon
                className="h-6 w-6 flex-shrink-0 text-blue-700"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-gray-900">First time?</p>
                <p className="mt-1 text-sm text-gray-600">
                  Please contact us before visiting our dojo.
                </p>
                <Link
                  href="/contact"
                  className="mt-2 inline-block text-sm font-semibold text-blue-700 hover:text-blue-600"
                >
                  Send a message &rarr;
                </Link>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-gray-200 p-5">
              <EyeIcon
                className="h-6 w-6 flex-shrink-0 text-blue-700"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-gray-900">Free to watch</p>
                <p className="mt-1 text-sm text-gray-600">
                  Observe a practice at no charge, or join up to two practices
                  as a free trial.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            {/* Desktop Calendar */}
            <div className="hidden md:block">
              <div className="relative w-full" style={{ paddingBottom: '70%' }}>
                <iframe
                  title="Studio City Kendo Dojo calendar"
                  src={calendarSrc}
                  className="absolute left-0 top-0 h-full w-full"
                  style={{ border: 0 }}
                  frameBorder="0"
                  scrolling="no"
                />
              </div>
            </div>

            {/* Mobile Calendar - Agenda View */}
            <div className="md:hidden">
              <div
                className="relative w-full"
                style={{ paddingBottom: '100%' }}
              >
                <iframe
                  title="Studio City Kendo Dojo calendar"
                  src={agendaSrc}
                  className="absolute left-0 top-0 h-full w-full"
                  style={{ border: 0 }}
                  frameBorder="0"
                  scrolling="yes"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
