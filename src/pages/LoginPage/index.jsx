import logoKenzieHub from "../../img/Logo.svg"
import {StyledLoginPage} from "./styles.js"
export function LoginPage(){
    return(
       <StyledLoginPage>
        <img src={logoKenzieHub} alt="logo da Kenzie Hub" className="logoKenziHub"/>
        
        <div className="areaLogin">
            <h1 className="titleLogin">Login</h1>
            
        <form className="formLogin">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite aqui seu e-mail"/>
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite aqui sua senha"/>
            <button type="submit">Entrar</button>
        </form>
        <p className="messageLogin">Ainda não possui uma conta?</p>
        <button type="button">Cadastre-se</button>
        </div>

        </StyledLoginPage>
    )
}