import { StyledHomePage } from "./styles.js";
import logoKenzieHub from "../../img/Logo.svg";
import React from "react";
import { useNavigate } from "react-router";
import { CardTech } from "../../components/CardTech/index.jsx";

export function HomePage({ user }) {
  const navigate = useNavigate();
  function goLoginClick() {
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
          <button type="button" className="btOpenModal">
            +
          </button>
        </div>
        <ul className="ulCardTech">
          <CardTech />
          <CardTech />
        </ul>
      </div>
    </StyledHomePage>
  );
}
