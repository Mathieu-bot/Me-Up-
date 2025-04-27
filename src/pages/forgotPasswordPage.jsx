import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "../utils/validation";
import { Loader2 } from "lucide-react";
import api from "../api/axiosInstance";
import Button from "../components/ui/Button";
import Message from "../components/ui/Message";

const ForgotPasswordPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const onSubmit = async (data) => {
    setMessage({ type: "", text: "" });
    setIsLoading(true);
    try {
      await api.post("/auth/forgot-password", { email: data.email });
      setMessage({
        type: "success",
        text: "Si cette adresse email est associée à un compte, vous recevrez un lien de réinitialisation.",
      });
      reset();
    } catch (error) {
      setMessage({ type: "error", text: "Une erreur est survenue. Veuillez réessayer." });
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${process.env.VITE_APP_TITLE || 'Me.Up()'} - Mot de passe oublié`}</title>
        <meta name="description" content={`Mot de passe oublié pour ${process.env.VITE_APP_TITLE || 'Me.Up()'}. Réinitialisez votre mot de passe en quelques clics.`} />
      </Helmet>
      <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
        <div className="max-w-md w-full p-6 rounded-lg bg-white shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Mot de passe oublié</h1>
          
          <Message type={message.type} text={message.text} />
          
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
            <div>
              <input
                type="email"
                placeholder="Votre email"
                disabled={isLoading}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-courteous-blue focus:ring-2 focus:outline-none"
                {...register("email")}
              />
              <p id="email-description" className="mt-1 text-xs text-gray-500">
                Nous vous enverrons un lien pour réinitialiser votre mot de passe.
              </p>
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className={`${isLoading ? "bg-gray-400" : "bg-courteous-blue hover:bg-blue-700"} text-white py-2 rounded-md transition-colors flex justify-center items-center`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Envoi en cours...
                </>
              ) : (
                "Envoyer le lien"
              )}
            </Button>
          </form>
          
          <p className="mt-4 text-sm">
            Retourner à <a href="/login" className="text-courteous-blue hover:underline">Connexion</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;