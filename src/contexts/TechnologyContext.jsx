import { createContext, useState } from "react";
import { api } from "../services/axiosClient.js";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext.jsx";
import { useContext } from "react";
Modal.setAppElement("#root");

export const TechnologyContext = createContext({});

export function TechnologyProvider({ children }) {
  const { user, getUser } = useContext(AuthContext);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const techs = user?.techs;

  async function RegisterTechnology(data) {
    try {
      setLoading(true);

      const response = await api.post("/users/techs", data);
      getUser();

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
        techs,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
}
