import React, { useState } from "react";
import { Mail, Lock, Eye, EyeClosed, SmileIcon } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <div className="max-w-4xl p-5 grid grid-cols-1 md:grid-cols-2 rounded-3xl bg-white shadow-lg">
        <div className="hidden bg-courteous-blue rounded-lg md:flex felx-col w-full h-full justify-center items-center">
          <img
            src="/src/assets/NoBg.png"
            alt="Connexion illustration"
            className="rounded-lg w-1/2 h-1/2 object-cover"
          />
        </div>
        <div className="px-6 md:px-10 flexc flex-col gap-5 md:gap-6">
          <h1 className="font-bold text-3xl">
            Connexion{" "}
            <span className="text-courteous-blue">
              Me.Up<span className="text-coral-orange">()</span>
            </span>
          </h1>
          <p className="text-lg">
            Heureux de te revoir
            {
              <SmileIcon
                size={24}
                className="text-courteous-blue rounded-full bg-yellow-600 inline-block mx-1"
              />
            }
            !
          </p>
          <form className="py-4 flex flex-col gap-4">
            <div className="flex gap-2 ">
              <Mail
                size={40}
                className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white"
              />
              <input
                type="email"
                name="email"
                id="email"
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
                id="password"
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
            <div className="flex justify-between items-center text-xs">
              <label className="flex items-center gap-1 text-gray-700">
                <input
                  type="checkbox"
                  name="remember"
                  className="w-4 h-4 rounded border-gray-300 text-courteous-blue focus:ring-courteous-blue"
                />
                Se souvenir de moi
              </label>
              <a
                href="/forgot-password"
                className="text-xs text-courteous-blue hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-courteous-blue text-white py-2 rounded-md hover:bg-blue-700"
            >
              Se connecter
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Se connecter avec Google
            </button>
            <p className="text-center text-xs">
              Pas de compte ?{" "}
              <a href="/signup" className="text-courteous-blue hover:underline">
                S'inscrire
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
