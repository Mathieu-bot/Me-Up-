import React from "react";
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Demandez ou proposez de l'aide",
      description:
        "Utilisez le calendrier collaboratif pour demander de l'aide ou proposer vos connaissances aux autres étudiants.",
    },
    {
      number: "02",
      title: "Participez aux événements",
      description:
        "Rejoignez des conférences ou débats pour développer vos soft skills et élargir votre réseau.",
    },
    {
      number: "03",
      title: "Collaborez sur des projets",
      description:
        "Créez ou rejoignez des projets collaboratifs pour mettre en pratique vos compétences en équipe.",
    },
  ];
  return (
    <div id="HowItWorks" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Comment ça marche
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            En quelques étapes simples, commencez à développer vos compétences
            et à aider les autres.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-sm h-full border-t-4 border-orange-500">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
