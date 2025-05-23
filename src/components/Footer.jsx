import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Me.Up<span className="text-coral-orange">()</span>
            </h3>
            <p className="text-gray-300">Prépare le "toi" de demain</p>
            <p className="mt-2 text-gray-300">
              Une plateforme d'entraide entre étudiants universitaires.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Entraide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Conférences
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Projets
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">info@meup-university.fr</p>
            <p className="text-gray-300 mt-2">Campus Universitaire</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300 text-center">
            © {new Date().getFullYear()} Me.Up(). Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
