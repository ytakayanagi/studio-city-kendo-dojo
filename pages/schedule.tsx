import { NextSeo } from 'next-seo'
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyDfRemdtA4BPRq2o0bf-PXWXMXZ5qBbvbc";

let calendars = [
  { calendarId: "gob1db4pq3mb22o539vide2m8o@group.calendar.google.com" },
];

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

          <div className="mt-16 grid grid-cols-1 gap-4">
              <Calendar apiKey={API_KEY} calendars={calendars} />
          </div>
        </div>
      </div>
   </>
  )
}
