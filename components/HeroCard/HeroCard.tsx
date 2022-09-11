const HeroCard = (): JSX.Element => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="/hero.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 text-center sm:py-64 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Studio City Kendo Dojo</h1>
        <p className="mt-6 text-xl text-white">
          in the city of Los Angeles, California
        </p>
      </div>
    </div>
  )
}

export default HeroCard
