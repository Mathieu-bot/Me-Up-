import * as yup from "yup";

// Shared regex for email validation
export const emailRegex = /^\S+@\S+\.\S+$/;

// Schema for registration form
export const registerSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Vous avez oublié votre nom d'utilisateur"),
  email: yup
    .string()
    .required("Vous avez oublié votre email")
    .matches(emailRegex, "Adresse email invalide"),
  password: yup
    .string()
    .required("Veuillez entrer votre mot de passe")
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .matches(/(?=.*[A-Z])/, "Doit contenir au moins une majuscule")
    .matches(/(?=.*\d)/, "Doit contenir au moins un chiffre"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Les mots de passe ne correspondent pas")
    .required("Veuillez confirmer votre mot de passe"),
});

// Schema for reset-password form
export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Veuillez entrer un mot de passe")
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .matches(/(?=.*[A-Z])/, "Doit contenir au moins une majuscule")
    .matches(/(?=.*\d)/, "Doit contenir au moins un chiffre"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Les mots de passe ne correspondent pas")
    .required("Veuillez confirmer votre mot de passe"),
});

// Schema for forgot-password form
export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required("Veuillez entrer une adresse email valide")
    .matches(emailRegex, "Adresse email invalide"),
});

// Schema for login form
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Adresse email requise")
    .matches(emailRegex, "Adresse email invalide"),
  password: yup
    .string()
    .required("Veuillez entrer votre mot de passe"),
});
