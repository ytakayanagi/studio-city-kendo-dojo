import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { cx } from '../../../lib/cx'
import { navigation } from '../../../lib/site'

const Header = (): React.JSX.Element => {
  const { pathname } = useRouter()

  return (
    <Disclosure
      as="nav"
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
    >
      {({ open }) => (
        <div className="mx-auto max-w-7xl rounded-3xl bg-black/75 shadow-lg shadow-black/20 ring-1 ring-white/10 backdrop-blur-xl">
          <div className="flex h-14 items-center justify-between pl-5 pr-2 sm:h-16 sm:pl-6">
            <Link
              href="/"
              className="font-display text-lg font-bold tracking-tight text-white"
            >
              Studio City{' '}
              <span className="font-medium text-gray-400">Kendo Dojo</span>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={cx(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white',
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-blue-600 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Try Kendo Free
              </Link>
            </div>

            <Disclosure.Button className="inline-flex items-center justify-center rounded-full p-2.5 text-gray-300 hover:bg-white/10 hover:text-white focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-blue-600 md:hidden">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>

          <Disclosure.Panel className="border-t border-white/10 md:hidden">
            <div className="space-y-1 p-3">
              {navigation.map((link) => (
                <Disclosure.Button
                  key={link.name}
                  as={Link}
                  href={link.href}
                  className={cx(
                    'block rounded-2xl px-4 py-3 text-base font-medium',
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
                className="mt-2 block rounded-2xl bg-blue-700 px-4 py-3 text-center text-base font-semibold text-white hover:bg-blue-600"
              >
                Try Kendo Free
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default Header
