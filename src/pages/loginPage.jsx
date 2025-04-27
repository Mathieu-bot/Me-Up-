import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";
import { Mail as MailIcon, Lock as LockIcon, Smile as SmileIcon, Loader2 as Loader2Icon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import api from "../api/axiosInstance";
import PasswordInput from "../components/ui/PasswordInput";
import Button from "../components/ui/Button";
import Message from "../components/ui/Message";
import ErrorPopup from '../components/ui/ErrorPopup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/validation";
import { MESSAGE_TEXT } from "../constants/messages";

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const messageRef = useRef(null);
  const handleGoogleSignIn = () => {
    window.location.href = `${process.env.VITE_API_BASE_URL}/auth/google`;
  };

  useEffect(() => {
    if (message.text && messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message.text]);

  const onSubmit = useCallback(async (data) => {
    setMessage({ type: "", text: "" });
    setIsLoading(true);
    try {
      await api.post("/auth/login", { email: data.email, password: data.password, remember: data.remember });
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || MESSAGE_TEXT.GLOBAL_ERROR;
      setMessage({ type: "error", text: msg });
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  // Content wrapper 
  const content = (
    <div className="flex items-center justify-center">
      <div className="max-w-sm md:max-w-[52rem] p-5 grid grid-cols-1 md:grid-cols-2 rounded-3xl bg-white shadow-lg">
        <div className="hidden bg-courteous-blue rounded-lg md:flex flex-col w-full h-full justify-center items-center">
          <img
            src="/src/assets/NoBg.png"
            alt="Connexion illustration"
            className="rounded-lg w-1/2 h-1/2 object-cover"
          />
        </div>
        <div className="px-6 md:px-10 flex flex-col gap-2 ">
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

          {/* inline Message removed; errors shown in popup */}

          <form onSubmit={handleSubmit(onSubmit)} className="pb-4 flex flex-col gap-4" noValidate>
            <fieldset disabled={isLoading} className="space-y-4">
              <div>
                <label htmlFor="email" className="flex items-center gap-2 w-full">
                  <MailIcon size={40} className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white" />
                  <input id="email" type="email" placeholder="Email" className="w-full p-2 bg-gray-100 outline-none rounded-md border border-gray-300 ring-1 ring-gray-300 focus:ring-courteous-blue focus:ring-2 focus:bg-gray-100" {...register("email")} aria-label="Adresse email" aria-required="true" />
                </label>
                {errors.email && <p aria-live="assertive" className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="password" className="flex items-center gap-2 w-full">
                  <LockIcon size={40} className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white" />
                  <PasswordInput id="password" placeholder="Mot de passe" {...register("password")} aria-label="Mot de passe" aria-required="true" />
                </label>
                {errors.password && <p aria-live="assertive" className="text-red-600 text-xs mt-1">{errors.password.message}</p>}
              </div>
              <div className="flex justify-between items-center text-xs">
                <label className="flex items-center gap-1 text-gray-700">
                  <input
                    {...register('remember')}
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="w-4 h-4 rounded border-gray-300 text-courteous-blue focus:ring-courteous-blue"
                    disabled={isLoading}
                  />
                  Se souvenir de moi
                </label>
                <NavLink
                  to="/forgot-password"
                  className="text-xs text-courteous-blue hover:underline"
                >
                  Mot de passe oublié ?
                </NavLink>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-courteous-blue text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                {isLoading ? (
                  <>
                    <Loader2Icon className="animate-spin mr-2 h-4 w-4" />
                    Connexion en cours...
                  </>
                ) : (
                  "Se connecter"
                )}
              </Button>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                disabled={isLoading}
              >
                <FcGoogle className="h-5 w-5" />
                <span>Se connecter avec Google</span>
              </button>
              <p className="text-center text-xs">
                Pas de compte ?{" "}
                <NavLink
                  to="/register"
                  className="text-courteous-blue hover:underline"
                >
                  S'inscrire
                </NavLink>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{`${process.env.VITE_APP_TITLE || 'Me.Up()'} - Connexion`}</title>
        <meta name="description" content={`Connexion à ${process.env.VITE_APP_TITLE || 'Me.Up()'}, votre application de promotion d'élites technique et relationnelle.`} />
      </Helmet>
      <ErrorPopup message={message.text} onClose={() => setMessage({ type: '', text: '' })} />
      {content}
    </>
  );
};

export default LoginPage;