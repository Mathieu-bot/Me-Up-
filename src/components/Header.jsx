import { NavLink } from 'react-router-dom'
import { FaHome, FaUsers, FaCalendarAlt, FaLightbulb } from 'react-icons/fa'
import { MenuIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

const menuItems = [
  { to: '/', label: 'Accueil', Icon: FaHome },
  { to: '/help', label: 'Entraide', Icon: FaUsers },
  { to: '/events', label: 'Conférences', Icon: FaCalendarAlt },
  { to: '/projects', label: 'Projets', Icon: FaLightbulb },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/60 backdrop-blur-sm shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-4xl font-bold text-courteous-blue">
          Me.Up<span className="text-coral-orange">()</span>
        </NavLink>
        <ul className="hidden md:flex space-x-8">
          {menuItems.map(({ to, label, Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-sm font-medium transition-colors
                   ${isActive ? 'text-courteous-blue' : 'text-gray-700 hover:text-courteous-blue'}
                   relative after:absolute after:-bottom-1 after:left-0 after:h-0.5
                   after:w-0 after:bg-courteous-blue
                   after:transition-all
                   hover:after:w-full`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/login"
            className="px-4 py-2 rounded-lg bg-courteous-blue text-white hover:bg-blue-700 transition"
          >
            Connexion
          </NavLink>
          <NavLink
            to="/register"
            className="px-4 py-2 rounded-lg border border-coral-orange text-coral-orange bg-white hover:bg-coral-orange hover:text-white transition"
          >
            Inscription
          </NavLink>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-700 hover:text-courteous hover:bg-blue-50"
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50"
              >
                {label}
              </NavLink>
            ))}
          </ul>
          <div className="px-3 pb-3 border-t border-gray-200 space-y-2">
            <NavLink
              to="/login"
              className="block w-full text-center px-4 py-2 rounded-lg bg-courteous-blue text-white hover:bg-blue-700"
            >
              Connexion
            </NavLink>
            <NavLink
              to="/register"
              className="block w-full text-center px-4 py-2 rounded-lg border border-coral-orange text-coral-orange bg-white hover:bg-coral-orange hover:text-white"
            >
              Inscription
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
