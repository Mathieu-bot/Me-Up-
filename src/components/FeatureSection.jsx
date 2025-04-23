import React from "react";
import { CalendarIcon, Users2Icon, GraduationCapIcon } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      title: "Système d'entraide",
      description:
        "Publiez vos demandes d'aide ou proposez votre soutien à d'autres étudiants via notre calendrier collaboratif.",
      icon: <CalendarIcon size={40} className="text-courteous-blue" />,
    },
    {
      title: "Conférences et débats",
      description:
        "Organisez ou participez à des conférences et débats pour développer vos soft skills et enrichir vos connaissances.",
      icon: <Users2Icon size={40} className="text-courteous-blue" />,
    },
    {
      title: "Projets collaboratifs",
      description:
        "Créez ou rejoignez des projets pour collaborer avec d'autres étudiants et mettre en pratique vos compétences.",
      icon: <GraduationCapIcon size={40} className="text-courteous-blue" />,
    },
  ];
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Nos fonctionnalités
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Me.Up() vous offre tous les outils nécessaires pour réussir vos
            études et préparer votre avenir professionnel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeatureSection;
