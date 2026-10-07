import { ArrowRightIcon } from '@heroicons/react/24/outline'

import Button from '../Button/Button'

type CallToActionProps = {
  title?: string
  description?: string
}

const CallToAction = ({
  title = 'Curious? Come see a practice.',
  description = 'Watching is always free, and your first two practices are on us. Send us a note and we will help you pick a Friday.',
}: CallToActionProps): React.JSX.Element => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-blue-700 px-6 py-16 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-500/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 left-1/3 -z-10 h-72 w-72 rounded-full bg-black/30 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 right-6 -z-10 select-none font-display text-[12rem] font-bold leading-none text-white/10"
        >
          礼
        </span>
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-blue-100">{description}</p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
          <Button href="/contact" variant="light">
            Book a free trial
            <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button href="/schedule" variant="outline">
            See practice times
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
