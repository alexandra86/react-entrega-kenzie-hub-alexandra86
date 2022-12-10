import { useContext } from "react";
import { TechnologyContext } from "../../contexts/TechnologyContext.jsx";
import { EditTechnologyModal } from "../EditTechnologyModal/index.jsx";
import { StyleCardTech } from "./styles.js";

export function CardTech({ elem }) {
  const { modalIsEditOpen, handleEditModal, setSelectTech, removeTechnology } =
    useContext(TechnologyContext);
  return (
    <StyleCardTech key={elem.id}>
      <h3 className="technology">{elem.title}</h3>
      <div className="areaCourse">
        <p className="nivelCourse">{elem.status}</p>
        <button
          className="btEdit"
          onClick={() => {
            handleEditModal();
            setSelectTech(elem);
          }}
        ></button>
        <button
          type="button"
          className="btDelete"
          onClick={() => removeTechnology(elem.id)}
        ></button>
      </div>
      {modalIsEditOpen && <EditTechnologyModal />}
    </StyleCardTech>
  );
}
