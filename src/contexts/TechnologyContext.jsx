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

  const [modalIsEditOpen, setIsEditOpen] = useState(false);

  const [selectTech, setSelectTech] = useState(null);

  const [loading, setLoading] = useState(false);

  const techs = user?.techs;

  async function RegisterTechnology(data) {
    try {
      setLoading(true);

      await api.post("/users/techs", data);
      getUser();

      setIsOpen(false);

      toast.success("Sucesso! Tecnologia cadastrada!");
    } catch (error) {
      toast.error("Algo não está certo!");
    } finally {
      setLoading(false);
    }
  }

  async function EditTechnology(data) {
    try {
      setLoading(true);

      await api.put(`/users/techs/${data.id}`, data);
      getUser();

      setIsEditOpen(false);
      toast.success("Tecnologia alterada com sucesso!");
    } catch (error) {
      toast.error("Algo não está certo!");
    } finally {
      setLoading(false);
    }
  }

  function handleModal() {
    setIsOpen(!modalIsOpen);
  }

  function handleEditModal() {
    setIsEditOpen(!modalIsEditOpen);
  }

  async function removeTechnology(id) {
    try {
      setLoading(true);

      await api.delete(`/users/techs/${id}`);
      getUser();

      toast.info("Tecnologia removida com sucesso!");
    } catch (error) {
      toast.error("Algo não está certo!");
    } finally {
      setLoading(false);
    }
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
        EditTechnology,
        modalIsEditOpen,
        setIsEditOpen,
        handleEditModal,
        selectTech,
        setSelectTech,
        removeTechnology,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
}
