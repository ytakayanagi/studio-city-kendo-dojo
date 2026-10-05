import { affiliations } from '../../lib/site'

const LogoCloud = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {affiliations.map((org) => (
        <a
          key={org.shortName}
          href={org.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
        >
          <img className="h-12 w-12 object-contain" src={org.logo} alt="" />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {org.shortName}
            </p>
            <p className="text-sm text-gray-500">{org.name}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default LogoCloud
