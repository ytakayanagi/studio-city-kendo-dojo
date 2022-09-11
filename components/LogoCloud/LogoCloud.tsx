const LogoCloud = (): JSX.Element => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-lg font-semibold text-gray-600">
          Proud member of the kendo community
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a href="https://www.socalkendo.org/" target="_blank">
              <img
                className="max-h-12"
                src="/logo-scko.png"
                alt="Southern California Kendo Organization"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a href="https://www.auskf.org/" target="_blank">
              <img
                className="max-h-12"
                src="/logo-auskf.png"
                alt="All United States Kendo Federation"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a href="https://www.kendo-fik.org/" target="_blank">
              <img
                className="max-h-12"
                src="/logo-fik.png"
                alt="International Kendo Federation"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoCloud
