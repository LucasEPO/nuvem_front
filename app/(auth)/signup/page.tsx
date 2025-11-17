"use client";
import { useState } from "react";
import { validateSignup, validateLogin, AuthErrors } from "@/validators/authValidator";
import { signupController } from "@/controllers/signup";

export default function SignUpPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<AuthErrors>({});
  const [loading, setLoading] = useState(false);
  const [backendError, setBackendError] = useState<string | null>(null);
  const { handleAuth } = signupController();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setBackendError(null);

    const validation = isLogin ? validateLogin(email, password) : validateSignup(email, password, confirmPassword);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    try {
      setLoading(true);

      await handleAuth(isLogin ? "login" : "signup", email, password, name);

    } catch (err: any) {
        setBackendError(err.message || "Erro inesperado.");
    } finally {
        setLoading(false);
    }
};

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Entrar na Conta" : "Criar Conta"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-gray-500">
          {!isLogin && (
            <input
              type="text"
              placeholder="Nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          )}
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border rounded-lg p-3 w-full focus:ring-2 outline-none ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`border rounded-lg p-3 w-full focus:ring-2 outline-none ${
              errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          {!isLogin && (
            <div>
              <input
                type="password"
                placeholder="Confirmar senha"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`border rounded-lg p-3 w-full focus:ring-2 outline-none ${
                  errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`bg-linear-to-r from-blue-500 to-sky-400 text-white rounded-lg p-3 transition-all duration-500 hover:shadow-xl hover:opacity-90 font-medium cursor-pointer ${
              loading ? "opacity-70 cursor-not-allowed hover:shadow-none hover:opacity-70" : ""
            }`}
          >
            {loading ? "Enviando..." : isLogin ? "Entrar" : "Cadastrar"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          {isLogin ? "Ainda não tem conta?" : "Já tem conta?"}{" "}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setErrors({});
              setBackendError(null);
            }}
            className="text-blue-600 hover:underline font-medium cursor-pointer"
          >
            {isLogin ? "Criar" : "Entrar"}
          </button>
        </p>
      </div>
    </main>
  );
}