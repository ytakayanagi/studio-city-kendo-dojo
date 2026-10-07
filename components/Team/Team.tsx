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

const initials = (name: string) => {
  const parts = name.split(' ')
  return parts.length > 1
    ? parts[0][0] + parts[parts.length - 1][0]
    : parts[0][0]
}

export default function Team({
  title,
  subtitle,
  people,
}: TeamProps): React.JSX.Element {
  return (
    <div>
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
      </div>
      <ul role="list" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <li
            key={person.name}
            className="group flex items-center gap-4 rounded-3xl bg-white p-5 ring-1 ring-inset ring-gray-200 transition-shadow hover:shadow-lg"
          >
            <span
              aria-hidden="true"
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-black font-display text-xl font-bold text-white transition-colors group-hover:bg-blue-700"
            >
              {initials(person.name)}
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-gray-900">
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
