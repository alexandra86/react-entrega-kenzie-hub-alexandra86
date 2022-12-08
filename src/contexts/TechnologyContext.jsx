import { createContext, useState } from "react";
import { api } from "../services/axiosClient";
import Modal from "react-modal";
import { toast } from "react-toastify";
Modal.setAppElement("#root");

export const TechnologyContext = createContext({});

export function TechnologyProvider({ children }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  async function RegisterTechnology(data) {
    try {
      setLoading(true);
      const response = await api.post("users/techs", data);
      setUser(response.data);
      toast.success("Sucesso! Tecnologia cadastrada!");
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
        user,
        setUser,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
}
