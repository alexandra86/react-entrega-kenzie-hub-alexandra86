import { StyledHomePage } from "./styles.js"
import logoKenzieHub from "../../img/Logo.svg"
import React from "react";
import { useNavigate } from "react-router";

export function HomePage(){

    const navigate = useNavigate()
    function goLoginClick() {
        navigate("/")
    }

    return(
        <StyledHomePage>
            <header className="headerHome">
            <img src={logoKenzieHub} alt="logo da Kenzie Hub" className="logoKenziHub"/>
            <button className="btComeBackLogin" onClick={goLoginClick}>Sair</button>
            </header>

            <tr />
            <div className="areaUser">
                <h2 className="areaWelcome">Olá, Samuel Leão</h2>
                <p className="course">Primeiro módulo (Introdução ao Frontend)</p>
            </div>
            <tr />
            
            <div className="areaInformation">
                <p className="whatAShame">Que pena! Estamos em desenvolvimento:(</p>
                <span className="information">Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
            </div>

        </StyledHomePage> 
    )
}