import logoKenzieHub from "../../img/Logo.svg";
import {StyledLoginPage} from "./styles.js";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema.js";
import { useNavigate } from "react-router";



export function LoginPage(){

    const navigate = useNavigate()
    function handleClick() {
        navigate('/register')
      }

    const {register, handleSubmit, formState: { errors },reset} = useForm({
        mode: "onBlur",
        defaultValues:{
        email: "", 
        password: "", 
        },
        resolver: yupResolver(loginSchema),
        
    })
function submit(data){
    reset()
    console.log(data)
}
    return(
       <StyledLoginPage>
        <img src={logoKenzieHub} alt="logo da Kenzie Hub" className="logoKenziHub"/>
        
        <div className="areaLogin">
            <h1 className="titleLogin">Login</h1>
            
        <form className="formLogin" onSubmit={handleSubmit(submit)}>

            <label htmlFor="email" className="areaLabel">Email</label>
            <input type="email" placeholder="Digite seu email" className="areaInput" {...register("email")}/>
            {errors.email && <p className="areaError">{errors.email.message}</p>}

            <label htmlFor="password" className="areaLabel">Senha</label>
            <input type="password" placeholder="Digite sua senha" className="areaInput" {...register("password")}/>
            {errors.password && <p className="areaError">{errors.password.message}</p>}

            <button type="submit" className="btOpen">Entrar</button>
        </form>

        <p className="messageLogin">Ainda não possui uma conta?</p>
        <button type="button" className="btGoRegister" onClick={handleClick}>Cadastre-se</button>

        </div>

        </StyledLoginPage>
    )
}