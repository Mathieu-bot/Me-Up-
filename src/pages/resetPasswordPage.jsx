import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: envoyer la nouvelle valeur de mot de passe au serveur
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <div className="max-w-md p-6 rounded-lg bg-white shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          Réinitialiser le mot de passe
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Nouveau mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pr-10 p-2 bg-gray-100 outline-none rounded-md border border-gray-300 ring-1 ring-gray-300 focus:ring-courteous-blue focus:ring-2 focus:bg-gray-100"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirmer mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pr-10 p-2 bg-gray-100 outline-none rounded-md border border-gray-300 ring-1 ring-gray-300 focus:ring-courteous-blue focus:ring-2 focus:bg-gray-100"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirm ? <EyeClosed size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-courteous-blue text-white py-2 rounded-md hover:bg-blue-700"
          >
            Réinitialiser le mot de passe
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
