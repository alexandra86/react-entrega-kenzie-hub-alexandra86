import { createContext, useState } from "react";
import { api } from "../services/axiosClient";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
Modal.setAppElement("#root");

export const TechnologyContext = createContext({});

export function TechnologyProvider({ children }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function RegisterTechnology(data) {
    try {
      setLoading(true);
      const response = await api.post("users/techs", data);
      toast.success("Sucesso! Tecnologia cadastrada!");
      setTimeout(() => {
        navigate("/home");
      }, 5000);
    } catch (error) {
      toast.error("Algo não está certo!");
    } finally {
      setLoading(false);
    }
  }
  function handleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <TechnologyContext.Provider
      value={{
        handleModal,
        modalIsOpen,
        setIsOpen,
        RegisterTechnology,
        setLoading,
        loading,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
}
