import { React, useState } from "react";
import { Header } from "../../components/Header/index.jsx";
import { StyledRegisterPage } from "./styles.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema.js";
import logoKenzieHub from "../../img/Logo.svg";
import { useNavigate } from "react-router";
import { api } from "../../services/axiosClient.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  function goLoginClick() {
    navigate("/");
  }

  async function NewRegister(data) {
    try {
      setLoading(true);
      const response = await api.post("users", data);
      toast.success("Cadastro relizado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      toast.error("Usuário já cadastrado!");
    } finally {
      setLoading(false);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      bio: "",
      contact: "",
      course_module: "",
    },
    resolver: yupResolver(registerSchema),
  });

  async function submit(data) {
    const information = { ...data };
    delete information.passwordConfirm;
    await NewRegister(information);
    reset();
  }
  return (
    <>
      <StyledRegisterPage>
        <Header>
          <img
            src={logoKenzieHub}
            alt="logo da Kenzie Hub"
            className="logoKenziHub"
          />
          <button className="btComeBackLogin" onClick={goLoginClick}>
            Voltar
          </button>
        </Header>

        <div className="areaRegister">
          <h1 className="titleRegister">Crie sua Conta</h1>

          <p className="messageRegister">Rápido e grátis, vamos nessa!</p>

          <form
            className="formRegister"
            onSubmit={handleSubmit(submit)}
            noValidate
          >
            <label htmlFor="name" className="areaLabel">
              Nome
            </label>
            <input
              type="name"
              placeholder="Digite seu nome"
              className="areaInput"
              {...register("name")}
            />
            {errors.name && <p className="areaError">{errors.name.message}</p>}

            <label htmlFor="email" className="areaLabel">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="areaInput"
              {...register("email")}
            />
            {errors.email && (
              <p className="areaError">{errors.email.message}</p>
            )}

            <label htmlFor="password" className="areaLabel">
              Senha
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="areaInput"
              {...register("password")}
            />
            {errors.password && (
              <p className="areaError">{errors.password.message}</p>
            )}

            <label htmlFor="confirmPassword" className="areaLabel">
              Confirmar Senha
            </label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              className="areaInput"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="areaError">{errors.confirmPassword.message}</p>
            )}

            <label htmlFor="bio" className="areaLabel">
              Bio
            </label>
            <input
              type="bio"
              placeholder="Fale sobre você"
              className="areaInput"
              {...register("bio")}
            />
            {errors.bio && <p className="areaError">{errors.bio.message}</p>}

            <label htmlFor="contact" className="areaLabel">
              Contato
            </label>
            <input
              type="contact"
              placeholder="Opção de contato"
              className="areaInput"
              {...register("contact")}
            />
            {errors.contact && (
              <p className="areaError">{errors.contact.message}</p>
            )}

            <label htmlFor="course_module" className="areaLabel">
              Selecionar Módulo
            </label>
            <select
              name="course_module"
              id="course_module"
              className="areaInput"
              {...register("course_module")}
            >
              <option value="">Selecione</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
            {errors.course_module && (
              <p className="areaError">{errors.course_module.message}</p>
            )}

            <button type="submit" className="btRegister" disabled={loading}>
              {loading ? "Carregando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </StyledRegisterPage>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
