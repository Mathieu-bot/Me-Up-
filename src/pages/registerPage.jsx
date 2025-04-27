import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from "react-helmet";
import { User as UserIcon, Mail as MailIcon, Lock as LockIcon, Loader2 as Loader2Icon } from "lucide-react";
import api from "../api/axiosInstance";
import PasswordInput from "../components/ui/PasswordInput";
import Button from "../components/ui/Button";
import Message from "../components/ui/Message";
import ErrorPopup from "../components/ui/ErrorPopup";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/validation";
import { MESSAGE_TEXT } from "../constants/messages";

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const messageRef = useRef(null);
  useEffect(() => {
    if (message.text && messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message.text]);
  const navigate = useNavigate();

  const onSubmit = useCallback(async (data) => {
    setMessage({ type: "", text: "" });
    setIsLoading(true);
    try {
      await api.post("/auth/register", data);
      navigate("/login");
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || MESSAGE_TEXT.GLOBAL_ERROR;
      setMessage({ type: "error", text: msg });
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const content = (
    <div className="flex items-center justify-center">
      <div className="max-w-sm md:max-w-[52rem] p-5 grid grid-cols-1 md:grid-cols-2 rounded-3xl bg-white shadow-lg">
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
            <h1 className="font-bold text-3xl md:mb-4">
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

          {/* inline Message removed; errors shown in ErrorPopup */}

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <fieldset disabled={isLoading} className="space-y-4">
              <div>
              <label htmlFor="userName" className="flex items-center gap-2 w-full">
                <UserIcon size={40} className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white" />
                <input
                  id="userName"
                  type="text"
                  placeholder="Nom d'utilisateur"
                  className="w-full p-2 bg-gray-100 outline-none rounded-md border border-gray-300 focus:ring-courteous-blue focus:ring-2"
                  {...register("userName")}
                  aria-label="Nom d'utilisateur"
                  aria-required="true"
                />
              </label>
              {errors.userName && <p aria-live="assertive" className="text-red-600 text-xs mt-1">{errors.userName.message}</p>}</div>
              <div>
              <label htmlFor="email" className="flex items-center gap-2 w-full">
                <MailIcon size={40} className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white" />
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 bg-gray-100 outline-none rounded-md border border-gray-300 focus:ring-courteous-blue focus:ring-2"
                  {...register("email")}
                  aria-label="Email"
                  aria-required="true"
                />
              </label>
              {errors.email && <p aria-live="assertive" className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
              <label htmlFor="password" className="flex items-center gap-2 w-full">
                <LockIcon size={40} className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white" />
                <PasswordInput
                  id="password"
                  placeholder="Mot de passe"
                  {...register("password")}
                  aria-label="Mot de passe"
                  aria-required="true"
                />
              </label>
              {errors.password && <p aria-live="assertive" className="text-red-600 text-xs mt-1">{errors.password.message}</p>}
              </div>
              <div>
              <label htmlFor="confirmPassword" className="flex items-center gap-2 w-full">
                <LockIcon size={40} className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white" />
                <PasswordInput
                  id="confirmPassword"
                  placeholder="Confirmer mot de passe"
                  {...register("confirmPassword")}
                  aria-label="Confirmer mot de passe"
                  aria-required="true"
                />
              </label>
              {errors.confirmPassword && <p aria-live="assertive" className="text-red-600 text-xs mt-1">{errors.confirmPassword.message}</p>}
              </div>
              <p className="text-xs">
                Déjà un compte ? {" "}
                <NavLink to="/login" className="text-courteous-blue hover:underline">
                  Connexion
                </NavLink>
              </p>
              <Button
                type="submit"
                className="w-full bg-courteous-blue text-white py-2 rounded-md hover:bg-blue-700 flex justify-center items-center transition-colors"
              >
                {isLoading ? (
                  <>
                    <Loader2Icon className="animate-spin mr-2 h-4 w-4" />
                    Inscription...
                  </>
                ) : (
                  "S'inscrire"
                )}
              </Button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{`${process.env.VITE_APP_TITLE || 'Me.Up()'} - Inscription`}</title>
        <meta name="description" content={`Inscription sur ${process.env.VITE_APP_TITLE || 'Me.Up()'}, votre application de promotion d'élites technique et relationnelle.`} />
      </Helmet>
      <ErrorPopup message={message.text} onClose={() => setMessage({ type: '', text: '' })} />
      {content}
    </>
  );
};

export default SignupPage;
