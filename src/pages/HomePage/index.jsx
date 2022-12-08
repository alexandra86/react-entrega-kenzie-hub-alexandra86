import { StyledHomePage } from "./styles.js";
import logoKenzieHub from "../../img/Logo.svg";
import React from "react";
import { useNavigate } from "react-router";
import { CardTech } from "../../components/CardTech/index.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { AddTechnologyModal } from "../../components/AddTechnologyModal/index.jsx";
import { TechnologyContext } from "../../contexts/TechnologyContext.jsx";

export function HomePage() {
  const { user } = useContext(AuthContext);
  const { modalIsOpen, handleModal } = useContext(TechnologyContext);
  const navigate = useNavigate();

  function goLoginClick({ user }) {
    navigate("/");
    user = null;
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  }

  return (
    <StyledHomePage>
      <header className="headerHome">
        <img
          src={logoKenzieHub}
          alt="logo da Kenzie Hub"
          className="logoKenziHub"
        />
        <button className="btComeBackLogin" onClick={goLoginClick}>
          Sair
        </button>
      </header>

      <div className="areaUser">
        <h2 className="areaWelcome">Olá, {user.user.name}</h2>
        <p className="course">{user.user.course_module}</p>
      </div>

      <div className="areaInformation">
        <div className="areaTechnology">
          <h3 className="titleTechnology">Tecnologias</h3>
          <button
            type="button"
            className="btOpenModal"
            onClick={() => handleModal()}
          >
            +
          </button>
        </div>
        <ul className="ulCardTech">
          <CardTech />
          <CardTech />
        </ul>
      </div>
      {modalIsOpen && <AddTechnologyModal />}
    </StyledHomePage>
  );
}
