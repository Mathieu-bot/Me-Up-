import React, { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: envoyer le lien de réinitialisation
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <div className="max-w-md p-6 rounded-lg bg-white shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Mot de passe oublié</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:ring-courteous-blue focus:ring-2"
          />
          <button
            type="submit"
            className="bg-courteous-blue text-white py-2 rounded-md hover:bg-blue-700"
          >
            Envoyer le lien
          </button>
        </form>
        <p className="mt-4 text-sm">
          Retourner à <a href="/login" className="text-courteous-blue hover:underline">Connexion</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
