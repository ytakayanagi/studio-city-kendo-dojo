const HeroCard = (): JSX.Element => {
  return (
    <div className="relative my-6">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="/hero.jpg"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-blue-900 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Kendo is a traditional</span>
              <span className="block text-blue-300">Japanese martial art</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
              It is not just a sport wearing heavy armor and weilding bamboo
              sword, but a martial art that involves developing your mind, body
              and spirit. Our dojo welcomes all ages and it&apos;s never too
              late to start Kendo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
