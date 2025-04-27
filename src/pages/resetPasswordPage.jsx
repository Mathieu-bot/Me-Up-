import React, { useState, useEffect, useRef } from "react";
import { Lock, Loader2 } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../api/axiosInstance";
import PasswordInput from "../components/ui/PasswordInput";
import Button from "../components/ui/Button";
import Message from "../components/ui/Message";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../utils/validation";
import { MESSAGE_TEXT } from "../constants/messages";

const ResetPasswordPage = () => {
  const [message, setMessage] = useState({ type: "", text: "" });
  const [tokenExpired, setTokenExpired] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  // Clear token from URL after reading to avoid exposing it in browser history
  useEffect(() => {
    if (token) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      setTokenExpired(true);
    }
  }, [token]);

  const onSubmit = async (data) => {
    setMessage({ type: "", text: "" });
    setIsLoading(true);
    try {
      await api.post("/auth/reset-password", { password: data.password, token });
      toast.success(MESSAGE_TEXT.RESET_SUCCESS);
      navigate("/login");
    } catch (err) {
      const msg = err.response?.data?.message || MESSAGE_TEXT.RESET_ERROR;
      if (msg.toLowerCase().includes("expir")) {
        setTokenExpired(true);
      } else {
        setMessage({ type: "error", text: msg });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const messageRef = useRef(null);
  useEffect(() => {
    if (message.text || tokenExpired) {
      messageRef.current?.scrollIntoView?.({ behavior: "smooth" });
    }
  }, [message.text, tokenExpired]);

  if (tokenExpired) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg text-center">
          <div ref={messageRef}>
            <Message type="error" text={MESSAGE_TEXT.RESET_EXPIRED} />
          </div>
          <Button onClick={() => navigate("/forgot-password")} className="mt-4">
            Renvoyer un mail
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <div className="max-w-md p-6 rounded-lg bg-white shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Réinitialiser le mot de passe</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
          <fieldset disabled={isLoading} className="space-y-4" noValidate>
            <div ref={messageRef}>
              <Message type={message.type} text={message.text} />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="password" className="flex items-center gap-2 w-full">
                <Lock size={40} className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white" />
                <PasswordInput id="password" placeholder="Nouveau mot de passe" {...register("password")} />
              </label>
            </div>
            {errors.password && <p aria-live="assertive" className="text-red-600 text-xs mt-1">{errors.password.message}</p>}
            <div className="flex items-center gap-2">
              <label htmlFor="confirmPassword" className="flex items-center gap-2 w-full">
                <Lock size={40} className="bg-courteous-blue p-1 rounded-ss-md rounded-ee-md fill-coral-orange text-white" />
                <PasswordInput id="confirmPassword" placeholder="Confirmer mot de passe" {...register("confirmPassword")} />
              </label>
            </div>
            {errors.confirmPassword && <p aria-live="assertive" className="text-red-600 text-xs mt-1">{errors.confirmPassword.message}</p>}
            <Button type="submit" className="w-full bg-courteous-blue text-white py-2 rounded-md hover:bg-blue-700 flex justify-center items-center transition-colors">
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Réinitialisation...
                </>
              ) : (
                "Réinitialiser"
              )}
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
