import React from "react";
import {
  UserIcon,
  BookIcon,
  AwardIcon,
  StarIcon,
  ClockIcon,
} from "lucide-react";
const ProfilePage = () => {
  const userProfile = {
    name: "Sarah Martin",
    year: "L3",
    department: "Informatique",
    points: 145,
    helpProvided: 12,
    helpReceived: 5,
    conferencesOrganized: 2,
    skills: ["Java", "Python", "Algorithmique", "Bases de données", "Web"],
    badges: ["Mentor", "Organisateur", "Expert Python"],
  };
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-start">
          <div className="bg-[#1a4b8c] rounded-full p-6">
            <UserIcon className="w-16 h-16 text-white" />
          </div>
          <div className="ml-6">
            <h1 className="text-3xl font-bold text-[#1a4b8c]">
              {userProfile.name}
            </h1>
            <p className="text-gray-600">
              {userProfile.year} • {userProfile.department}
            </p>
            <div className="flex items-center mt-2">
              <AwardIcon className="w-5 h-5 text-[#ff7f50] mr-2" />
              <span className="font-semibold">{userProfile.points} points</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-[#1a4b8c] mb-4 flex items-center">
            <StarIcon className="w-5 h-5 mr-2 text-[#ff7f50]" />
            Compétences
          </h2>
          <div className="flex flex-wrap gap-2">
            {userProfile.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-[#1a4b8c] px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-[#1a4b8c] mb-4 flex items-center">
            <AwardIcon className="w-5 h-5 mr-2 text-[#ff7f50]" />
            Badges
          </h2>
          <div className="flex flex-wrap gap-2">
            {userProfile.badges.map((badge) => (
              <span
                key={badge}
                className="bg-orange-100 text-[#ff7f50] px-3 py-1 rounded-full text-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-[#1a4b8c] mb-4 flex items-center">
            <BookIcon className="w-5 h-5 mr-2 text-[#ff7f50]" />
            Statistiques
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Aide fournie</span>
              <span className="font-semibold">
                {userProfile.helpProvided} sessions
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Aide reçue</span>
              <span className="font-semibold">
                {userProfile.helpReceived} sessions
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Conférences organisées</span>
              <span className="font-semibold">
                {userProfile.conferencesOrganized}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-[#1a4b8c] mb-4 flex items-center">
            <ClockIcon className="w-5 h-5 mr-2 text-[#ff7f50]" />
            Activité récente
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-[#ff7f50] pl-4">
              <p className="text-gray-600">A aidé en Algorithmique</p>
              <p className="text-sm text-gray-500">Il y a 2 jours</p>
            </div>
            <div className="border-l-2 border-[#ff7f50] pl-4">
              <p className="text-gray-600">
                A organisé une conférence sur l'IA
              </p>
              <p className="text-sm text-gray-500">Il y a 5 jours</p>
            </div>
            <div className="border-l-2 border-[#ff7f50] pl-4">
              <p className="text-gray-600">A reçu le badge "Expert Python"</p>
              <p className="text-sm text-gray-500">Il y a 1 semaine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
