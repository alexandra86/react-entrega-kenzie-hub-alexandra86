import Modal from "react-modal";
import { React, useContext } from "react";
import { StyledContainerModal } from "./style.js";
import { TechnologyContext } from "../../contexts/TechnologyContext.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalEditSchema } from "./modalEditSchema.js";
Modal.setAppElement("#root");

export function EditTechnologyModal() {
  const { modalIsEditOpen, handleEditModal, EditTechnology, selectTech } =
    useContext(TechnologyContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      id: selectTech.id,
      title: selectTech.title,
      status: selectTech.status,
    },
    resolver: yupResolver(modalEditSchema),
  });

  async function submit(data) {
    await EditTechnology(data);
    reset();
  }

  return (
    <StyledContainerModal>
      <div
        isOpen={modalIsEditOpen}
        onRequestClose={handleEditModal}
        className="modalContent"
      >
        <div className="headerModal">
          <h2 className="titleModal">Cadastrar Tecnologia</h2>
          <button onClick={() => handleEditModal()} className="btCloseModal">
            X
          </button>
        </div>
        <form className="formModal" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="title" className="labelModal">
            Nome
          </label>
          <input
            type="text"
            name="title"
            placeholder="Nome da tecnologia"
            className="inputModal"
            {...register("title")}
          />
          {errors.title && <p className="areaError">{errors.title.message}</p>}
          <label htmlFor="status" className="labelModal">
            Selecionar Status
          </label>
          <select
            name="status"
            id="status"
            className="selectModal"
            {...register("status")}
          >
            <option value="">Selecione</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status && (
            <p className="areaError">{errors.status.message}</p>
          )}
          <button type="submit" className="btRegisterModal">
            Editar Tecnologia
          </button>
        </form>
      </div>
    </StyledContainerModal>
  );
}
