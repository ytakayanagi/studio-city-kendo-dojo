import { NavigationType } from './Header'
import { NavLink } from './NavLink'

type MainMenuProps = {
  navigation: NavigationType
}

const MainMenu = ({ navigation }: MainMenuProps): JSX.Element => {
  return (
    <div className="hidden md:mr-6 md:flex md:space-x-8">
      {navigation.map((link) => (
        <NavLink
          key={link.name}
          href={link.href}
          activeClassName="border-gray-300"
        >
          <a className="border-transparent text-gray-300 hover:border-white hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm">
            {link.name}
          </a>
        </NavLink>
      ))}
    </div>
  )
}

export default MainMenu
