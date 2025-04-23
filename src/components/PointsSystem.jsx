import React from "react";
const PointsSystem = () => {
  const pointsItems = [
    {
      action: "Demander de l'aide",
      points: 1,
      color: "bg-blue-100 text-blue-800",
    },
    {
      action: "Offrir de l'aide",
      points: 5,
      color: "bg-green-100 text-green-800",
    },
    {
      action: "Organiser une conférence/débat",
      points: 8,
      color: "bg-purple-100 text-purple-800",
    },
    {
      action: "Compléter une tâche de projet",
      points: 1,
      color: "bg-orange-100 text-orange-800",
    },
  ];
  return (
    <section>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Système de points
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Gagnez des points en participant activement à la communauté et en
              aidant les autres étudiants.
            </p>
          </div>
          <div className="bg-gradient-to-r from-courteous-blue/90 to-courteous-blue rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pointsItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${item.color}`}
                  >
                    +{item.points} {item.points > 1 ? "points" : "point"}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.action}
                  </h3>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-white">
              <p className="text-lg">
                Ces points pourraient être pris en compte dans une note de
                participation ou bonus de fin de semestre, en partenariat avec
                l'administration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 py-12 md:py-24">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Prépare le "toi" de demain
              </h2>
              <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Rejoignez Me.Up() et développez les compétences qui feront de
                vous l'élite de demain.
              </p>
            </div>
            <a href="/register">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-blue-600 hover:bg-gray-100">
                Commencer maintenant
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PointsSystem;
