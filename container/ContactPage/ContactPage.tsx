import Seo from '../../components/Seo/Seo'
import { CheckCircleIcon, MapPinIcon } from '@heroicons/react/24/outline'

import ContactForm from './ContactForm/ContactForm'
import PageHeader from '../../components/PageHeader/PageHeader'
import { address, practices, saturday } from '../../lib/site'

const expectations = [
  'Watch a practice for free',
  'Try up to two practices free',
  'No need to buy gear first',
  'Kids and adults welcome',
]

export default function ContactPage(): React.JSX.Element {
  return (
    <>
      <Seo title="Contact" />
      <PageHeader eyebrow="Contact" title="Come try kendo with us" kanji="礼">
        <p>
          Questions about kendo, a free trial practice, or signing up your
          child? Send us a message and we will get back to you.
        </p>
      </PageHeader>

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-black/10 ring-1 ring-gray-200 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative isolate overflow-hidden bg-blue-700 px-6 py-10 sm:px-10 xl:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-500/50 blur-3xl"
              />
              <h2 className="font-display text-3xl font-extrabold text-white">
                Before you visit
              </h2>
              <p className="mt-3 text-base text-blue-100">
                Please contact us before visiting our dojo.
              </p>
              <ul role="list" className="mt-6 space-y-3">
                {expectations.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-white">
                    <CheckCircleIcon
                      className="h-6 w-6 shrink-0 text-blue-200"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 font-display text-xl font-bold text-white">
                Dojo Location
              </h3>
              <address className="mt-2 flex gap-3 text-base not-italic text-blue-100">
                <MapPinIcon
                  className="h-6 w-6 shrink-0 text-blue-200"
                  aria-hidden="true"
                />
                <span>
                  {address.venue}
                  <br />
                  {address.street}
                  <br />
                  {address.city}
                </span>
              </address>
              <p className="mt-3 text-sm text-blue-100">{address.entryNote}</p>
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50"
              >
                Get directions &rarr;
              </a>
              <h3 className="mt-10 font-display text-xl font-bold text-white">
                Practice
              </h3>
              <ul
                role="list"
                className="mt-2 space-y-1 text-base text-blue-100"
              >
                {practices.map((practice) => (
                  <li key={practice.name}>
                    {practice.name}: Fri {practice.time}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-base text-blue-100">
                <span className="font-semibold text-white">Saturdays:</span>{' '}
                {saturday.frequency.toLowerCase()} at the {saturday.venue},{' '}
                {saturday.street}, {saturday.city}. {saturday.note}
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
