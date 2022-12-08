import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/axiosClient";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function NewRegister(data) {
    try {
      setLoading(true);
      const response = await api.post("users", data);
      toast.success("Cadastro relizado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      toast.error("Usuário já cadastrado!");
    } finally {
      setLoading(false);
    }
  }

  async function NewLogin(data) {
    try {
      setLoading(true);
      const response = await api.post("sessions", data);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data);
      toast.success("Login relizado com sucesso!");
    } catch (error) {
      toast.error("Usuário não encontrado!");
    } finally {
      setLoading(false);
    }
  }
  return (
    <AuthContext.Provider
      value={{ NewLogin, loading, user, setLoading, NewRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
}
