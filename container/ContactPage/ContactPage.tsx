import { NextSeo } from 'next-seo'
import { CheckCircleIcon, MapPinIcon } from '@heroicons/react/24/outline'

import ContactForm from './ContactForm/ContactForm'
import PageHeader from '../../components/PageHeader/PageHeader'
import { address } from '../../lib/site'

const expectations = [
  'Watch a practice for free',
  'Try up to two practices free',
  'No need to buy gear first',
  'Kids and adults welcome',
]

export default function ContactPage(): JSX.Element {
  return (
    <>
      <NextSeo title="Contact" />
      <PageHeader eyebrow="Contact" title="Come try kendo with us" kanji="礼">
        <p>
          Questions about kendo, a free trial practice, or signing up your
          child? Send us a message and we will get back to you.
        </p>
      </PageHeader>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-3">
            {/* Contact information */}
            <div className="bg-blue-700 px-6 py-10 sm:px-10 xl:p-12">
              <h2 className="text-xl font-semibold text-white">
                Before you visit
              </h2>
              <p className="mt-3 text-base text-blue-100">
                Please contact us before visiting our dojo.
              </p>
              <ul role="list" className="mt-6 space-y-3">
                {expectations.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-white">
                    <CheckCircleIcon
                      className="h-6 w-6 flex-shrink-0 text-blue-200"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 text-lg font-medium text-white">
                Dojo Location
              </h3>
              <address className="mt-2 flex gap-3 text-base not-italic text-blue-100">
                <MapPinIcon
                  className="h-6 w-6 flex-shrink-0 text-blue-200"
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
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-white underline hover:text-blue-100"
              >
                Get directions &rarr;
              </a>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
