import Eyebrow from '../Eyebrow/Eyebrow'

type PageHeaderProps = {
  eyebrow: string
  title: string
  kanji?: string
  children?: React.ReactNode
}

const PageHeader = ({
  eyebrow,
  title,
  kanji,
  children,
}: PageHeaderProps): React.JSX.Element => {
  return (
    <div className="relative isolate overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="absolute -left-40 -top-40 -z-10 h-128 w-lg rounded-full bg-blue-700/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 right-0 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
      />
      {kanji && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 bottom-0 -z-10 select-none font-display text-[10rem] font-bold leading-none text-white/6 sm:text-[18rem]"
        >
          {kanji}
        </span>
      )}
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44 lg:px-8">
        <div className="animate-rise">
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            {title}
          </h1>
          {children && (
            <div className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
