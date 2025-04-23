import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-courteous-blue">
                Me.Up<span className="text-coral-orange">()</span>
              </span>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <a
                href="#"
                className="text-courteous font-medium px-3 py-2 rounded-md hover:bg-blue-50"
              >
                Accueil
              </a>
              <a
                href="#"
                className="text-gray-700 font-medium px-3 py-2 rounded-md hover:bg-blue-50"
              >
                Entraide
              </a>
              <a
                href="#"
                className="text-gray-700 font-medium px-3 py-2 rounded-md hover:bg-blue-50"
              >
                Conférences
              </a>
              <a
                href="#"
                className="text-gray-700 font-medium px-3 py-2 rounded-md hover:bg-blue-50"
              >
                Projets
              </a>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <button
              onClick={handleLogin}
              className="bg-courteous-blue text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700"
            >
              Connexion
            </button>
            <button
              onClick={handleRegister}
              className="ml-4 bg-coral-orange text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600"
            >
              Inscription
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-courteous hover:bg-blue-50"
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-courteous bg-blue-50"
            >
              Accueil
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50"
            >
              Entraide
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50"
            >
              Conférences
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50"
            >
              Projets
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              <button
                onClick={handleLogin}
                className="w-full text-center bg-courteous-blue text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700"
              >
                Connexion
              </button>
              <button
                onClick={handleRegister}
                className="w-full text-center bg-coral-orange text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600"
              >
                Inscription
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
