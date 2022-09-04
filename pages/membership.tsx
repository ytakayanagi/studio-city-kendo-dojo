import Link from 'next/link'
import { NextSeo } from 'next-seo'

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
    question: "I want to join the practice. Is there any trial session available?",
    answer:
      "Yes, we do offer free trials for up to two practices.",
  },
  {
    id: 2,
    question: "I am interested in Kendo. Can I observe your practice before joining practice?",
    answer:
      "Yes, you can observe our practice at no charge. Please get in touch with us before coming to watch.",
  },
  {
    id: 3,
    question: "What is the age recommendation for Kendo?",
    answer:
      "There is no age restriction in Kendo. We recommend kids to start at any age as long as they can follow simple instructions from senseis. The youngest age we had in our dojo was five years old. For adults, you can start anytime. The oldest we had that started Kendo was over 50.",
  },
  {
    id: 4,
    question: "I have experience in Kendo. Can I join?",
    answer:
      "Of course! Please get in touch with us before coming to practice.",
  },
]

export default function Membership(): JSX.Element {
  return (
    <>
      <NextSeo title="Membership" />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Membership
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              How to join our dojo
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We recommend you trying out Kendo before joining. We offer a free
              trial session for the first two weeks. If you decide to join us,
              we will need you to sign documents and pay membership fees to
              participate in exams and tournaments.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
        Membership Fee
      </h2>
      <p className="text-center mt-4 text-base text-gray-500">
        Please{' '}
        <Link href="/contact">
          <a>contact</a>
        </Link>{' '}
        us for more details about the fees.
      </p>
      <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >

                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tuition
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Initiation Fee
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      SCKO Annual Membership
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      AUSKF Annual Membership
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {membershipFees.map((fee, feeIndex) => (
                    <tr
                      key={fee.type}
                      className={feeIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {fee.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${fee.tuition}{' '}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Quarterly
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${fee.initiationFee}{' '}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          One time only
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${fee.sckoAnnualFee}{' '}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Annually
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${fee.auskfAnnualFee}{' '}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Annually
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
          <div className="mt-12">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg font-medium leading-6 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
