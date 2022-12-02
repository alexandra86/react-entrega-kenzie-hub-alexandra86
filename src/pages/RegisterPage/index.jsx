import React from "react";
import { Header } from "../../components/Header/index.jsx";
import {StyledRegisterPage} from "./styles.js";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema.js";
import logoKenzieHub from "../../img/Logo.svg"
import { useNavigate } from "react-router";

export function RegisterPage(){

    const navigate = useNavigate()
    function goLoginClick() {
        navigate("/")
      }

    const {register, handleSubmit, formState: { errors },reset} = useForm({
            mode: "onBlur",
            defaultValues:{
            name: "",
            email: "", 
            password: "", 
            bio: "",  
            contact:"",
            courseModule:"",
            },
            resolver: yupResolver(registerSchema),
            
        })
   
    async function submit(data){
        console.log(data)
        const information = {...data}
        delete information.passwordConfirm
        // await NewRegister(information)
        reset()
    }
    return(
        <StyledRegisterPage>

            <Header>
            <img src={logoKenzieHub} alt="logo da Kenzie Hub" className="logoKenziHub"/>
            <button className="btComeBackLogin" onClick={goLoginClick}>Voltar</button>
            </Header>

       <div className="areaRegister">
            <h1 className="titleRegister">Crie sua Conta</h1>

            <p className="messageRegister">Rápido e grátis, vamos nessa!</p>
            
        <form className="formRegister" onSubmit={handleSubmit(submit)}>

            <label htmlFor="name" className="areaLabel">Nome</label>
            <input type="name" placeholder="Digite seu nome" className="areaInput" {...register("name")}/>
            {errors.name && <p className="areaError">{errors.name.message}</p>}

            <label htmlFor="email" className="areaLabel">Email</label>
            <input type="email" placeholder="Digite seu email" className="areaInput" {...register("email")}/>
            {errors.email && <p className="areaError">{errors.email.message}</p>}

            <label htmlFor="password" className="areaLabel">Senha</label>
            <input type="password" placeholder="Digite sua senha" className="areaInput" {...register("password")}/>
            {errors.password && <p className="areaError">{errors.password.message}</p>}


            <label htmlFor="confirmPassword" className="areaLabel">Confirmar Senha</label>
            <input type="confirmPassword" placeholder="Confirme sua senha" className="areaInput" {...register("password")}/>
            {errors.password && <p className="areaError">{errors.password.message}</p>}

            <label htmlFor="bio" className="areaLabel">Bio</label>
            <input type="bio" placeholder="Fale sobre você" className="areaInput" {...register("bio")}/>
            {errors.bio && <p className="areaError">{errors.bio.message}</p>}

            <label htmlFor="contact" className="areaLabel">Contato</label>
            <input type="contact" placeholder="Opção de contato" className="areaInput" {...register("contact")}/>
            {errors.contact && <p className="areaError">{errors.contact.message}</p>}

            <label htmlFor="course_module" className="areaLabel">Selecionar Módulo</label>
           <select name="course_module" id="course_module" className="areaInput" {...register("course_module")}>
            <option value="">Selecione</option>
            <option value="primeiro_modulo">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="segundo_modulo">Segundo módulo (Frontend Avançado)</option>
            <option value="terceiro_modulo">Terceiro módulo (Introdução ao Backend)</option>
            <option value="quarto_modulo">Quarto módulo (Backend Avançado)</option>
           </select>
           {errors.course_module && <p className="areaError">{errors.course_module.message}</p>}

            <button type="submit" className="btRegister">Cadastrar</button>
        </form>
        </div>
        </StyledRegisterPage>
    )
}