const Footer = (): JSX.Element => {
  return (
    <footer className="mt-24 bg-gray-800" aria-labelledby="footerHeading">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-8 lg:px-8">
        <div className=" md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2"></div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Studio City Kendo Dojo. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
