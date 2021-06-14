import { ClockIcon, UsersIcon, VideoCameraIcon } from '@heroicons/react/outline'
import { NextSeo } from 'next-seo'

export default function Schedule(): JSX.Element {
  return (
    <>
      <NextSeo title="Schedule" />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                Schedule
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Practice and Events Schedule
              </span>
            </h1>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  In-Person Practice
                </h2>
                <div className="mt-3">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <ClockIcon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>Fri 7:00pm to 8:15pm PST</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-lg text-gray-500">
                    We are happy to announce that our in-person practice is now
                    available. We offer in-person Kendo practice to fully
                    vaccinated members only with RSVP for safety. Feel free to
                    contact us for more details on the COVID-19 situation with
                    the in-person Kendo practice.
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <UsersIcon
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Zoom Practice
                </h2>
                <div className="mt-3">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <ClockIcon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>Fri 7:00pm to 7:30pm PST</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-lg text-gray-500">
                    We are offering this practice during COVID-19. If you still
                    haven&apos;t completed your vaccine, too young to get a
                    vaccine or feel more secure practicing at home, this is a
                    good practice to join. Please contact us to join our Zoom
                    practice for more details.
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <VideoCameraIcon
                    className="h-7 w-7 text-blue-600"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
