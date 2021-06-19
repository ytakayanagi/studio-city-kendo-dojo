const Footer = () => {
  return (
    <footer className="mt-24 bg-gray-800" aria-labelledby="footerHeading">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-8 lg:px-8">
        <div className=" md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="https://www.digitalocean.com/?refcode=9fb0cf67186b&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
              <img
                src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg"
                alt="DigitalOcean Referral Badge"
              />
            </a>
          </div>
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
