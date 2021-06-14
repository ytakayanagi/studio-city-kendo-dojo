import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/solid'

type AlertProps = {
  children: React.ReactNode
  className: string
  href?: string
}

const Alert = ({ children, className }: AlertProps) => {
  return (
    <div className={'rounded-md bg-blue-50 p-4 ' + className}>
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon
            className="h-5 w-5 text-blue-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700">{children}</p>
          {/*<p className="mt-3 text-sm md:mt-0 md:ml-6">*/}
          {/*  {href && (*/}
          {/*    <Link href={href}>*/}
          {/*      <a className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">*/}
          {/*        Details <span aria-hidden="true">&rarr;</span>*/}
          {/*      </a>*/}
          {/*    </Link>*/}
          {/*  )}*/}
          {/*</p>*/}
        </div>
      </div>
    </div>
  )
}

export default Alert
