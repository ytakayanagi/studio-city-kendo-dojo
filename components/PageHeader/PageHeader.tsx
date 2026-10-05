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
}: PageHeaderProps): JSX.Element => {
  return (
    <div className="relative isolate overflow-hidden bg-black">
      {kanji && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-1/2 -z-10 -translate-y-1/2 select-none text-[11rem] font-bold leading-none text-white/5 sm:text-[16rem]"
        >
          {kanji}
        </span>
      )}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default PageHeader
