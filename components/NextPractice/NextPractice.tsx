import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline'

import { address, practices } from '../../lib/site'
import { useNextPractice } from '../../lib/useNextPractice'

const NextPractice = (): React.JSX.Element => {
  const nextDate = useNextPractice()

  return (
    <div className="w-full max-w-sm rounded-3xl bg-white/10 p-6 text-white shadow-2xl ring-1 ring-inset ring-white/20 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
          Next practice
        </p>
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75 motion-reduce:hidden" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
        </span>
      </div>
      <p className="mt-3 flex items-center gap-2 font-display text-3xl font-bold">
        <CalendarDaysIcon
          className="h-7 w-7 text-blue-400"
          aria-hidden="true"
        />
        {nextDate ?? 'Friday'}
      </p>
      <ul role="list" className="mt-4 space-y-2 text-sm">
        {practices.map((practice) => (
          <li
            key={practice.name}
            className="flex items-center justify-between gap-4 rounded-xl bg-black/30 px-3 py-2"
          >
            <span className="text-gray-200">{practice.name}</span>
            <span className="whitespace-nowrap font-semibold">
              {practice.time}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex items-start gap-2 text-sm text-gray-300">
        <MapPinIcon
          className="mt-0.5 h-4 w-4 shrink-0"
          aria-hidden="true"
        />
        {address.venue}, {address.street}
      </p>
    </div>
  )
}

export default NextPractice
