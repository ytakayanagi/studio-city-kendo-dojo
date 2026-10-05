type PersonType = {
  name: string
  rank: string
  role?: string
}

type TeamProps = {
  title: string
  subtitle: string
  people: Array<PersonType>
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

export default function Team({
  title,
  subtitle,
  people,
}: TeamProps): JSX.Element {
  return (
    <div>
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
      </div>
      <ul role="list" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <li
            key={person.name}
            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5"
          >
            <span
              aria-hidden="true"
              className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-black text-lg font-semibold text-white"
            >
              {initials(person.name)}
            </span>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {person.name}
              </h3>
              <div className="mt-1 flex flex-wrap gap-2">
                {person.rank && (
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                    {person.rank}
                  </span>
                )}
                {person.role && (
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                    {person.role}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
