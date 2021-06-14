const LogoCloud = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              We are proud to be a member of AUSKF and SCKO
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              By being part of the All United States Kendo Federation and
              Southern California Kendo Organization, our members can
              participate in various tournaments and take promotional exams to
              advance to higher ranks.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-2 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="/auskf-logo.png" alt="AUSKF" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="/scko-logo.png" alt="SCKO" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoCloud
