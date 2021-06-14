import { NavigationType } from './Header'
import { NavLink } from './NavLink'

type MobileMenuProps = {
  navigation: NavigationType
}

const MobileMenu = ({ navigation }: MobileMenuProps) => {
  return (
    <div className="pt-2 pb-3 space-y-1">
      {navigation.map((link) => (
        <NavLink
          href={link.href}
          activeClassName="bg-blue-50 border-blue-500 text-blue-700"
        >
          <a className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            {link.name}
          </a>
        </NavLink>
      ))}
    </div>
  )
}

export default MobileMenu
