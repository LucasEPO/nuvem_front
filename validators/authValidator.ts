export interface AuthErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export function validateSignup(
  email: string,
  password: string,
  confirmPassword: string
): AuthErrors {
  const errors: AuthErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) 
    errors.email = "Informe um e-mail válido";
  

  if (!password || password.length < 6) 
    errors.password = "A senha deve ter pelo menos 6 caracteres";
  

  if (password !== confirmPassword) 
    errors.confirmPassword = "As senhas não coincidem";
  

  return errors;
}

export function validateLogin(email: string, password: string): AuthErrors {
  const errors: AuthErrors = {};

  if (!email) 
    errors.email = "O e-mail é obrigatório";
  

  if (!password)
    errors.password = "A senha é obrigatória";

  return errors;
}