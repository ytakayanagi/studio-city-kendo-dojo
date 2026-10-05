import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { cx } from '../../../lib/cx'
import { navigation } from '../../../lib/site'

const Header = (): JSX.Element => {
  const { pathname } = useRouter()

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 border-b border-white/10 bg-black"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-700 text-lg font-bold text-white"
                >
                  剣
                </span>
                <span className="text-lg font-semibold text-white">
                  Studio City Kendo Dojo
                </span>
              </Link>

              <div className="hidden items-center gap-8 md:flex">
                {navigation.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className={cx(
                      'border-b-2 py-1 text-sm font-medium transition-colors',
                      pathname === link.href
                        ? 'border-blue-600 text-white'
                        : 'border-transparent text-gray-300 hover:text-white',
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Try Kendo Free
                </Link>
              </div>

              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 md:hidden">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="border-t border-white/10 md:hidden">
            <div className="space-y-1 px-4 py-3">
              {navigation.map((link) => (
                <Disclosure.Button
                  key={link.name}
                  as={Link}
                  href={link.href}
                  className={cx(
                    'block rounded-md px-3 py-2 text-base font-medium',
                    pathname === link.href
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white',
                  )}
                >
                  {link.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as={Link}
                href="/contact"
                className="mt-2 block rounded-md bg-blue-700 px-3 py-3 text-center text-base font-semibold text-white hover:bg-blue-600"
              >
                Try Kendo Free
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
