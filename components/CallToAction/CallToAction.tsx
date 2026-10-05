import Button from '../Button/Button'

type CallToActionProps = {
  title?: string
  description?: string
}

const CallToAction = ({
  title = 'Curious? Come see a practice.',
  description = 'Watching is always free, and your first two practices are on us. Send us a note and we will help you pick a day.',
}: CallToActionProps): JSX.Element => {
  return (
    <section className="bg-blue-700">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-blue-100">{description}</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-shrink-0">
          <Button href="/contact" variant="light">
            Book a free trial
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
