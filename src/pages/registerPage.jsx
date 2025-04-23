import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeClosed } from "lucide-react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <div className="max-w-4xl p-5 grid grid-cols-1 md:grid-cols-2 rounded-3xl bg-white shadow-lg">
        <div className="hidden bg-courteous-blue rounded-lg md:flex justify-center items-center flex-col w-full h-full">
          <img
            src="/src/assets/signUp.png"
            alt="Inscription illustration"
            className="rounded-lg w-1/2 h-1/2 object-contain"
          />
          <p className="text-white w-10/12 text-center">
            Rejoignez la communauté <span className="font-bold">Me.Up</span>
            <span className="text-coral-orange font-bold">()</span>. Ensemble,
            créons une promotion d'élites où chacun développe ses compétences
            techniques et relationnelles.
          </p>
        </div>
        <div className="px-6 md:px-10 flex flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl">
              Inscription{" "}
              <span className="text-courteous-blue">
                Me.Up<span className="text-coral-orange">()</span>
              </span>
            </h1>
            <p className="block md:hidden w-full text-start leading-tight">
              Rejoignez la communauté{" "}
              <span className="text-courteous-blue font-bold">Me.Up</span>
              <span className="text-coral-orange font-bold">()</span>. Ensemble,
              créons une promotion d'élites où chacun développe ses compétences
              techniques et relationnelles.
            </p>
          </div>
          <form className="py-4 flex flex-col gap-4">
            <div className="flex gap-2">
              <User
                size={40}
                className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white"
              />
              <input
                type="text"
                name="username"
                placeholder="Nom d'utilisateur"
                className="w-full p-2 bg-gray-100 outline-none rounded-md border border-gray-300 ring-1 ring-gray-300 focus:ring-courteous-blue focus:ring-2 focus:bg-gray-100"
              />
            </div>
            <div className="flex gap-2">
              <Mail
                size={40}
                className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 bg-gray-100 outline-none rounded-md border border-gray-300 ring-1 ring-gray-300 focus:ring-courteous-blue focus:ring-2 focus:bg-gray-100"
              />
            </div>
            <div className="relative flex items-center gap-2">
              <Lock
                size={40}
                className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Mot de passe"
                className="w-full pr-10 p-2 bg-gray-100 outline-none rounded-md border border-gray-300 ring-1 ring-gray-300 focus:ring-courteous-blue focus:ring-2 focus:bg-gray-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="relative flex items-center gap-2">
              <Lock
                size={40}
                className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white"
              />
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirmer mot de passe"
                className="w-full pr-10 p-2 bg-gray-100 outline-none rounded-md border border-gray-300 ring-1 ring-gray-300 focus:ring-courteous-blue focus:ring-2 focus:bg-gray-100"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-2 text-gray-500 hover:text-gray-700"
              >
                {showConfirm ? <EyeClosed size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p>
              Déjà un compte ?{" "}
              <a href="/login" className="text-courteous-blue hover:underline">
                Connexion
              </a>
            </p>
            <button
              type="submit"
              className="w-full bg-courteous-blue text-white py-2 rounded-md hover:bg-blue-700"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
