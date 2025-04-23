import React from "react";
const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-courteous-blue to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Me.Up<span className="text-coral-orange">()</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-6">
              Prépare le "toi" de demain
            </p>
            <p className="text-lg mb-8">
              Une plateforme d'entraide entre étudiants au sein de votre
              université, favorisant le partage de connaissances, le
              développement des soft skills et le réseautage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-coral-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg">
                Rejoindre la communauté
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-6 rounded-lg">
                En savoir plus
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Étudiants travaillant ensemble"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
