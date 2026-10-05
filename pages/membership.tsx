import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

import CallToAction from '../components/CallToAction/CallToAction'
import PageHeader from '../components/PageHeader/PageHeader'
import { cx } from '../lib/cx'

const membershipFees = [
  {
    type: 'Child (17yrs and under)',
    tuition: 60,
    initiationFee: 10,
    sckoAnnualFee: 25,
    auskfAnnualFee: 30,
  },
  {
    type: 'Adult (18yrs and over)',
    tuition: 75,
    initiationFee: 10,
    sckoAnnualFee: 35,
    auskfAnnualFee: 60,
  },
  {
    type: 'Two Children same family',
    tuition: 90,
    initiationFee: 20,
    sckoAnnualFee: 50,
    auskfAnnualFee: 60,
  },
  {
    type: 'Adult + Child same family',
    tuition: 115,
    initiationFee: 20,
    sckoAnnualFee: 60,
    auskfAnnualFee: 90,
  },
  {
    type: 'Two Adults same family',
    tuition: 115,
    initiationFee: 20,
    sckoAnnualFee: 70,
    auskfAnnualFee: 120,
  },
]

const faqs = [
  {
    id: 1,
    question:
      'I want to join the practice. Is there any trial session available?',
    answer: 'Yes, we do offer free trials for up to two practices.',
  },
  {
    id: 2,
    question:
      'I am interested in Kendo. Can I observe your practice before joining practice?',
    answer:
      'Yes, you can observe our practice at no charge. Please get in touch with us before coming to watch.',
  },
  {
    id: 3,
    question: 'What is the age recommendation for Kendo?',
    answer:
      'There is no age restriction in Kendo. Most people outside of Japan start as adults. In our dojo, the oldest we had started in their 50s, and the youngest was 5. We recommend that kids begin when they have a good attention span.',
  },
  {
    id: 4,
    question: 'I have experience in Kendo. Can I join?',
    answer: 'Of course! Please get in touch with us before coming to practice.',
  },
  {
    id: 5,
    question: 'Where can I buy gear?',
    answer:
      'Please consult us before buying any gear unless you are experienced in Kendo.',
  },
  {
    id: 6,
    question: 'What do you teach beginners?',
    answer:
      'We start by teaching basic etiquette. You will learn a few techniques, including footwork, postures, and how to hold the shinai. In addition, you may also start learning various kinds of practice swings called suburi.',
  },
  {
    id: 7,
    question: 'How long do I practice without armor?',
    answer:
      'It depends on your dedication and ability. On average it can take anywhere from 3 months to a year.',
  },
]

const joinSteps = [
  {
    name: 'Try it out',
    description:
      'Come to up to two practices for free. You can also watch a practice first at no charge.',
  },
  {
    name: 'Sign up',
    description:
      'If you decide to join us, we will ask you to sign a few documents.',
  },
  {
    name: 'Pay membership fees',
    description:
      'Fees cover dojo tuition plus SCKO and AUSKF memberships, which you need to take part in exams and tournaments.',
  },
]

export default function Membership(): JSX.Element {
  return (
    <>
      <NextSeo title="Membership" />
      <PageHeader
        eyebrow="Membership"
        title="How to join our dojo"
        kanji="入門"
      >
        <p>
          We recommend you trying out Kendo before joining. We offer a free
          trial session for the first two weeks. If you decide to join us, we
          will need you to sign documents and pay membership fees to participate
          in exams and tournaments.
        </p>
      </PageHeader>

      {/* Steps */}
      <section className="border-b border-gray-200 bg-white">
        <ol className="mx-auto grid max-w-7xl gap-px bg-gray-200 md:grid-cols-3">
          {joinSteps.map((step, index) => (
            <li key={step.name} className="bg-white px-4 py-10 sm:px-8">
              <span className="text-sm font-semibold text-blue-700">
                Step {index + 1}
              </span>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                {step.name}
              </h2>
              <p className="mt-2 text-base text-gray-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Fees */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Membership Fee
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Please{' '}
              <Link
                href="/contact"
                className="font-semibold text-blue-700 underline hover:text-blue-600"
              >
                contact
              </Link>{' '}
              us for more details about the fees.
            </p>
          </div>
          <ul
            role="list"
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {membershipFees.map((fee) => (
              <li
                key={fee.type}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {fee.type}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${fee.tuition}
                  </span>
                  <span className="text-sm font-semibold text-gray-500">
                    tuition / quarter
                  </span>
                </p>
                <dl className="mt-6 space-y-3 border-t border-gray-100 pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-600">Initiation fee</dt>
                    <dd className="text-right font-medium text-gray-900">
                      ${fee.initiationFee}{' '}
                      <span className="font-normal text-gray-500">
                        one time only
                      </span>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-600">SCKO membership</dt>
                    <dd className="text-right font-medium text-gray-900">
                      ${fee.sckoAnnualFee}{' '}
                      <span className="font-normal text-gray-500">
                        annually
                      </span>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-600">AUSKF membership</dt>
                    <dd className="text-right font-medium text-gray-900">
                      ${fee.auskfAnnualFee}{' '}
                      <span className="font-normal text-gray-500">
                        annually
                      </span>
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.id} className="py-5">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between gap-6 text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <ChevronDownIcon
                          className={cx(
                            'mt-1 h-5 w-5 flex-shrink-0 text-blue-700 transition-transform',
                            open && 'rotate-180',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-3 pr-11">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
