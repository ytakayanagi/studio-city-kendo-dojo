import Link from 'next/link'
import Sticky from 'react-stickynode'

import MobileMenu from './MobileMenu'
import MainMenu from './MainMenu'

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

type NavigationItemType = {
  name: string
  href: string
}

export type NavigationType = Array<NavigationItemType>

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Membership', href: '/membership' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  return (
    <Sticky top={0} innerZ={1001} activeClass="isHeaderSticky">
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/">
                      <a>
                        <img
                          className="block lg:hidden h-8 w-auto"
                          src="/logo.svg"
                          alt="Studio City Kendo Dojo"
                        />
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <img
                          className="hidden lg:block h-8 w-auto"
                          src="/logo-full.svg"
                          alt="Studio City Kendo Dojo"
                        />
                      </a>
                    </Link>
                  </div>
                  <MainMenu navigation={navigation} />
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/contact">
                      <a>
                        <button
                          type="button"
                          className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span>Try Kendo</span>
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
