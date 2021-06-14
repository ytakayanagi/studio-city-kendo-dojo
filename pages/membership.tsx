import Link from 'next/link'
import { NextSeo } from 'next-seo'

const membershipFees = [
  {
    age: '17yrs and under',
    tuition: 60,
    registrationFee: 20,
    sckoAnnualFee: 20,
    auskfAnnualFee: 25,
  },
  {
    age: '18yrs and over',
    tuition: 75,
    registrationFee: 20,
    sckoAnnualFee: 35,
    auskfAnnualFee: 40,
  },
]

export default function Membership() {
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
      <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
        Membership Fee
      </h2>
      <p className="mt-4 text-base text-gray-500">
        We do offer discounts to families joining. Please{' '}
        <Link href="/contact">
          <a>contact</a>
        </Link>{' '}
        us for more details.
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
                      Age
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
                      Registration Fee
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
                      key={fee.age}
                      className={feeIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${fee.age}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${fee.tuition}{' '}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Quarterly
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${fee.registrationFee}{' '}
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
      </div>
    </>
  )
}
