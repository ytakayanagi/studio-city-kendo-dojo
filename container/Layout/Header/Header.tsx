import Link from 'next/link'
import Sticky from 'react-stickynode'

import MobileMenu from './MobileMenu'
import MainMenu from './MainMenu'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline/'

type NavigationItemType = {
  name: string
  href: string
}

export type NavigationType = Array<NavigationItemType>

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Membership', href: '/membership' },
  { name: 'Contact', href: '/contact' },
]

const Header = (): JSX.Element => {
  return (
    <Sticky top={0} innerZ={1001} activeClass="isHeaderSticky">
      <Disclosure as="nav" className="bg-black shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <Link legacyBehavior href="/">
                      <a>
                        <h1 className="w-auto text-white text-lg font-semibold">
                          Studio City Kendo Dojo
                        </h1>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <MainMenu navigation={navigation} />
                  <div className="flex-shrink-0">
                    <Link legacyBehavior href="/contact">
                      <a>
                        <button
                          type="button"
                          className="invisible md:visible inline-flex items-center rounded-md bg-blue-700 px-5 py-3 text-sm leading-4 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Try Kendo
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <MobileMenu navigation={navigation} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Sticky>
  )
}

export default Header
