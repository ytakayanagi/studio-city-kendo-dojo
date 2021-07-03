import { NavigationType } from './Header'
import { NavLink } from './NavLink'

type MainMenuProps = {
  navigation: NavigationType
}

const MainMenu = ({ navigation }: MainMenuProps): JSX.Element => {
  return (
    <div className="hidden md:ml-6 md:flex md:space-x-8">
      {navigation.map((link) => (
        <NavLink
          key={link.name}
          href={link.href}
          activeClassName="border-indigo-500 text-gray-900"
        >
          <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            {link.name}
          </a>
        </NavLink>
      ))}
    </div>
  )
}

export default MainMenu
